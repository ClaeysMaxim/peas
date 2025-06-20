import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";
import BookingProgress from "../components/booking/BookingProgress";
import BookingStep1 from "../components/booking/BookingStep1";
import BookingStep2 from "../components/booking/BookingStep2";
import BookingStep3 from "../components/booking/BookingStep3";
import BookingSuccess from "../components/booking/BookingSuccess";

// Lijst met luchthavens
const airports = [
  { id: "zaventem", name: "Zaventem (BRU)" },
  { id: "anr", name: "Antwerpen (ANR)" },
  { id: "crl", name: "Charleroi (CRL)" },
  { id: "lgg", name: "Luik (LGG)" },
  { id: "ost", name: "Oostende / Brugge (OST)" },
  { id: "ams", name: "Schiphol (AMS)" },
  { id: "cdg", name: "Parijs Charles De Gaulle (CDG)" },
  { id: "ory", name: "Parijs Orly" },
  { id: "lil", name: "Lille Airport" },
];

// Lijst met treinstations
const trainStations = [
  { id: "lille-europe", name: "Lille Europe" },
  { id: "lille-flandres", name: "Lille Flandres" },
  { id: "brussel-zuid", name: "Brussel Zuid" },
];

const BookingPage = () => {
  // Get location to detect navigation
  const location = useLocation();
  const { t } = useTranslation();

  // Initial form data - factored out to allow reset
  const initialFormData = {
    direction: "",
    locationType: "",
    locationId: "",
    customLocation: "",
    pickupAddress: "",
    dropoffAddress: "",
    departureDate: "",
    departureTime: "",
    returnDate: "",
    returnTime: "",
    passengers: "1",
    largeLuggage: 0,
    smallLuggage: 0,
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
    terms: false,
  };

  // Base state using initialFormData
  const [formData, setFormData] = useState(initialFormData);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [showValidationSummary, setShowValidationSummary] = useState(false);
  const [luggageError, setLuggageError] = useState(false);

  // Effect om datum velden te initialiseren
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const dateString = tomorrow.toISOString().split("T")[0]; // YYYY-MM-DD
    setFormData((prev) => ({
      ...prev,
      departureDate: dateString,
      returnDate: dateString,
    }));
  }, []);

  // Bereken totaal aantal valiezen
  const totalLuggage =
    Number(formData.largeLuggage) + Number(formData.smallLuggage);

  // Valideer de velden voor de huidige stap
  const validateStep = (step) => {
    const errors = {};

    if (step === 1) {
      // Stap 1 validatie: route informatie
      if (!formData.direction) {
        errors.direction = t("booking.errors.required");
      }

      if (!formData.locationType) {
        errors.locationType = t("booking.errors.required");
      }

      if (
        formData.locationType === "airport" ||
        formData.locationType === "station"
      ) {
        if (!formData.locationId) {
          errors.locationId = t("booking.errors.required");
        }
      } else if (formData.locationType === "custom") {
        if (!formData.customLocation.trim()) {
          errors.customLocation = t("booking.errors.required");
        }
      }

      // Valideer de juiste adresvelden gebaseerd op de reisrichting
      if (
        formData.direction === "toAirport" ||
        formData.direction === "roundTrip"
      ) {
        if (!formData.pickupAddress.trim()) {
          errors.pickupAddress = t("booking.errors.required");
        }
      }

      if (
        formData.direction === "fromAirport" ||
        formData.direction === "roundTrip"
      ) {
        if (!formData.dropoffAddress.trim()) {
          errors.dropoffAddress = t("booking.errors.required");
        }
      }

      if (!formData.departureDate) {
        errors.departureDate = t("booking.errors.required");
      }

      if (!formData.departureTime) {
        errors.departureTime = t("booking.errors.required");
      }

      if (formData.direction === "roundTrip") {
        if (!formData.returnDate) {
          errors.returnDate = t("booking.errors.required");
        }

        if (!formData.returnTime) {
          errors.returnTime = t("booking.errors.required");
        }
      }
    } else if (step === 2) {
      // Stap 2 validatie: passagiers en bagage
      if (!formData.passengers) {
        errors.passengers = t("booking.errors.required");
      }

      // Bagage: totaal aantal valiezen moet maximaal 4 zijn
      if (totalLuggage > 4) {
        errors.luggage = t("booking.step2.luggageError");
      }
    } else if (step === 3) {
      // Stap 3 validatie: Contactgegevens
      if (!formData.name.trim()) {
        errors.name = t("booking.errors.required");
      }

      if (!formData.email.trim()) {
        errors.email = t("booking.errors.required");
      } else if (!isValidEmail(formData.email)) {
        errors.email = t("booking.errors.validEmail");
      }

      if (!formData.phone.trim()) {
        errors.phone = t("booking.errors.required");
      }

      if (!formData.terms) {
        errors.terms = t("booking.errors.required");
      }
    }

    return errors;
  };

  // Email validatie helper functie
  const isValidEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  // Functie voor onmiddellijke validatie bij het verlaten van een veld (onBlur)
  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    // Valideer alleen dit specifieke veld
    let error = null;

    // Validatie per veldtype
    if (name === "email" && value.trim() !== "" && !isValidEmail(value)) {
      error = t("booking.errors.validEmail");
    } else if (
      (name === "pickupAddress" ||
        name === "dropoffAddress" ||
        name === "customLocation") &&
      !value.trim()
    ) {
      error = t("booking.errors.required");
    } else if (
      (name === "departureDate" ||
        name === "returnDate" ||
        name === "departureTime" ||
        name === "returnTime") &&
      !value
    ) {
      error = t("booking.errors.required");
    } else if (name === "name" && !value.trim()) {
      error = t("booking.errors.required");
    } else if (name === "phone" && !value.trim()) {
      error = t("booking.errors.required");
    } else if (name === "terms" && !checked) {
      error = t("booking.errors.required");
    } else if (
      name === "locationId" &&
      !value &&
      (formData.locationType === "airport" ||
        formData.locationType === "station")
    ) {
      error = t("booking.errors.required");
    }

    // Update de fouten state alleen voor dit veld
    setFormErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Voor bagage moeten we speciale validatie doen
    if (name === "largeLuggage" || name === "smallLuggage") {
      const otherLuggageType =
        name === "largeLuggage" ? "smallLuggage" : "largeLuggage";
      const otherValue = Number(formData[otherLuggageType]);
      const newValue = Number(value);

      // Reset error state
      setLuggageError(false);

      // Check if total exceeds 4
      if (newValue + otherValue > 4) {
        setLuggageError(true);
        return; // Do not update state
      }
    }

    // Update formData met de juiste waarde gebaseerd op het type input
    const newValue = type === "checkbox" ? checked : value;

    // Update formData
    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    // Clear specifieke fout wanneer het veld wordt gewijzigd
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));

      // Verberg de validatie samenvatting als er wordt getypt
      setShowValidationSummary(false);
    }
  };

  // Helper voor het verhogen van bagagetellers
  const adjustLuggage = (type, amount) => {
    const currentValue = Number(formData[type]);
    const otherType = type === "largeLuggage" ? "smallLuggage" : "largeLuggage";
    const otherValue = Number(formData[otherType]);

    // Bereken de nieuwe waarde
    const newValue = Math.max(0, currentValue + amount);

    // Check total limit
    if (newValue + otherValue > 4) {
      setLuggageError(true);
      return;
    }

    // Reset error en update value
    setLuggageError(false);
    setFormData((prev) => ({
      ...prev,
      [type]: newValue,
    }));
  };

  // Valideer het formulier bij het wisselen van stappen
  const nextStep = (e) => {
    e.preventDefault();

    // Valideer de huidige stap
    const errors = validateStep(currentStep);

    // Als er validatiefouten zijn, toon ze dan en ga niet verder
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setShowValidationSummary(true);

      // Scroll naar de foutmelding bovenaan
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    // Geen fouten, ga naar de volgende stap
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);

      // Reset validatiefouten en samenvatting
      setFormErrors({});
      setShowValidationSummary(false);
    }
  };

  const prevStep = (e) => {
    e.preventDefault();
    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  };

  // Reset form when user navigates away and back (detects URL change)
  useEffect(() => {
    // Save the success state to prevent overriding when component remounts while on success state
    const wasSubmitted = isSubmitted;

    // Reset form if navigating back to form (not just a refresh)
    return () => {
      if (!wasSubmitted) {
        setFormData(initialFormData);
        setCurrentStep(1);
        setFormErrors({});
        setShowValidationSummary(false);
      }
    };
  }, [location.key]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Valideer de laatste stap voordat we indienen
    const errors = validateStep(currentStep);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setShowValidationSummary(true);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simuleer een API-aanroep (tijdelijke oplossing)
      console.log("Boeking zou verzonden worden:", formData);

      // Wacht 1,5 seconde om verzending te simuleren
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Toon succes en blijf op de succespagina
      setIsSubmitted(true);

      // We verwijderen de timeout die de succespagina automatisch laat verdwijnen
      // De gebruiker moet nu navigeren via het menu om weg te gaan
    } catch (error) {
      console.error("Fout bij verzenden boeking:", error);
      alert("Er is een fout opgetreden. Probeer het later opnieuw.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Bepaal locatie opties op basis van geselecteerde type
  const getLocationOptions = () => {
    if (formData.locationType === "airport") {
      return airports.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ));
    } else if (formData.locationType === "station") {
      return trainStations.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ));
    }
    return null;
  };

  // Bepaal de geselecteerde locatie naam voor weergave
  const getSelectedLocationName = () => {
    if (formData.locationType === "airport") {
      const airport = airports.find((a) => a.id === formData.locationId);
      return airport ? airport.name : "";
    } else if (formData.locationType === "station") {
      const station = trainStations.find((s) => s.id === formData.locationId);
      return station ? station.name : "";
    } else if (formData.locationType === "custom") {
      return formData.customLocation;
    }
    return "";
  };

  // Helper functie om de juiste trip beschrijving te tonen
  const getTripDescription = () => {
    const locationName = getSelectedLocationName();
    const yourAddress = t("booking.step1.addressPlaceholder");
    const selectedLocation = t("booking.step2.locationNotSelected");

    if (formData.direction === "toAirport") {
      return `${t("booking.step2.fromTo")} ${formData.pickupAddress || yourAddress} ${t("booking.step2.to")} ${locationName || selectedLocation}`;
    } else if (formData.direction === "fromAirport") {
      return `${t("booking.step2.fromTo")} ${locationName || selectedLocation} ${t("booking.step2.to")} ${formData.dropoffAddress || yourAddress}`;
    } else {
      // roundTrip
      return `${t("booking.step2.roundTrip")} ${formData.pickupAddress || yourAddress} ${t("booking.step2.and")} ${locationName || selectedLocation}`;
    }
  };

  return (
    <main
      className={`booking-page ${isSubmitted ? "booking-page--success" : ""}`}
    >
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">{t("booking.pageTitle")}</h1>
          <p className="page-header__subtitle">{t("booking.pageSubtitle")}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {isSubmitted ? (
            <BookingSuccess />
          ) : (
            <div className="booking-container">
              <BookingProgress currentStep={currentStep} />

              <form className="booking-form" onSubmit={handleSubmit}>
                {/* Validatie samenvatting tonen als er fouten zijn */}
                {showValidationSummary &&
                  Object.keys(formErrors).length > 0 && (
                    <div className="form-error-summary">
                      <p>
                        <FaExclamationTriangle />{" "}
                        {t("booking.errors.formErrors")}
                      </p>
                    </div>
                  )}

                {currentStep === 1 && (
                  <BookingStep1
                    formData={formData}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    formErrors={formErrors}
                    nextStep={nextStep}
                    getLocationOptions={getLocationOptions}
                  />
                )}

                {currentStep === 2 && (
                  <BookingStep2
                    formData={formData}
                    handleChange={handleChange}
                    formErrors={formErrors}
                    prevStep={prevStep}
                    nextStep={nextStep}
                    adjustLuggage={adjustLuggage}
                    totalLuggage={totalLuggage}
                    luggageError={luggageError}
                    getTripDescription={getTripDescription}
                  />
                )}

                {currentStep === 3 && (
                  <BookingStep3
                    formData={formData}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    formErrors={formErrors}
                    prevStep={prevStep}
                    isSubmitting={isSubmitting}
                  />
                )}
              </form>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default BookingPage;
