/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as ServicesRouteImport } from './routes/services'
import { Route as FleetRouteImport } from './routes/fleet'
import { Route as ContactRouteImport } from './routes/contact'
import { Route as BookingRouteImport } from './routes/booking'
import { Route as IndexRouteImport } from './routes/index'

const ServicesRoute = ServicesRouteImport.update({
  id: '/services',
  path: '/services',
  getParentRoute: () => rootRouteImport,
} as any)
const FleetRoute = FleetRouteImport.update({
  id: '/fleet',
  path: '/fleet',
  getParentRoute: () => rootRouteImport,
} as any)
const ContactRoute = ContactRouteImport.update({
  id: '/contact',
  path: '/contact',
  getParentRoute: () => rootRouteImport,
} as any)
const BookingRoute = BookingRouteImport.update({
  id: '/booking',
  path: '/booking',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/booking': typeof BookingRoute
  '/contact': typeof ContactRoute
  '/fleet': typeof FleetRoute
  '/services': typeof ServicesRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/booking': typeof BookingRoute
  '/contact': typeof ContactRoute
  '/fleet': typeof FleetRoute
  '/services': typeof ServicesRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/booking': typeof BookingRoute
  '/contact': typeof ContactRoute
  '/fleet': typeof FleetRoute
  '/services': typeof ServicesRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/booking' | '/contact' | '/fleet' | '/services'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/booking' | '/contact' | '/fleet' | '/services'
  id: '__root__' | '/' | '/booking' | '/contact' | '/fleet' | '/services'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  BookingRoute: typeof BookingRoute
  ContactRoute: typeof ContactRoute
  FleetRoute: typeof FleetRoute
  ServicesRoute: typeof ServicesRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/services': {
      id: '/services'
      path: '/services'
      fullPath: '/services'
      preLoaderRoute: typeof ServicesRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/fleet': {
      id: '/fleet'
      path: '/fleet'
      fullPath: '/fleet'
      preLoaderRoute: typeof FleetRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/contact': {
      id: '/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/booking': {
      id: '/booking'
      path: '/booking'
      fullPath: '/booking'
      preLoaderRoute: typeof BookingRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  BookingRoute: BookingRoute,
  ContactRoute: ContactRoute,
  FleetRoute: FleetRoute,
  ServicesRoute: ServicesRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
