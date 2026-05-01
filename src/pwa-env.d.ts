declare module 'virtual:pwa-register' {
  export interface RegisterSWOptions {
    immediate?: boolean;
    onRegisteredSW?: (swUrl: string, registration?: ServiceWorkerRegistration) => void;
  }

  export function registerSW(options?: RegisterSWOptions): void;
}