import { useState, useEffect } from "react";
import { useTranslation } from "../hooks/useTranslation";

const FloatingExperienceBadge = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has dismissed it before
    const dismissed = localStorage.getItem('experienceBadgeDismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Show badge after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500); // 1.5 seconds

    const autoHideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 15000);

    return () => {
      clearTimeout(timer);
      clearTimeout(autoHideTimer);
    };
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('experienceBadgeDismissed', 'true');
  };

  if (isDismissed) return null;

  return (
    <div className={`floating-badge ${isVisible ? 'floating-badge--visible' : ''}`}>
      <div className="floating-badge__content">
        <button 
          className="floating-badge__close"
          onClick={handleDismiss}
          aria-label="Sluiten"
        >
          ×
        </button>
        <div className="floating-badge__icon">
          <span className="floating-badge__star">⭐</span>
        </div>
        <div className="floating-badge__text">
          <div className="floating-badge__number">30+</div>
          <div className="floating-badge__label">
            {t("floating.experience")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingExperienceBadge;
