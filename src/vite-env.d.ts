/// <reference types="vite/client" />
declare namespace NodeJS {
  interface ProcessEnv {
    readonly EMAILJS_SERVICEID: string;
    readonly EMAILJS_TEMPLATEID: string;
    readonly EMAILJS_OPTIONS: string;
  }
}
