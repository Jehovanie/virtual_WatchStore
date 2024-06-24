####

Explination file architecture

Components: React components - the main UI building blocks;

Hooks: Custom React hooks for shared logic.

Contexts/providers: Contains React Contexts and Providers

Utils: Utilties for universal logic that is not related to business logic or any technologies. eg string manipulations, mathematic calculations, etc...

lib: Utilities that are related to certain technologies eg DOM manipulations HTML

styles: Contains global CSS or CSS-in-JS

types: For general TypeScript types, enums and interfaces

configs: Configs for the application ( eg: environment variables )

constants: Constant, unchanged values (export const MINUTES_PER_HOUR = 60)

api: For logic that communicates with the server(s)
graphql: GraphQL-specific code.

state/store: Global state management logic( Zustand, Valtio, Jotai, ...)

Routing:
routes/router: Defining router

Tests: Unit tests and others kinds of tests for your code.
