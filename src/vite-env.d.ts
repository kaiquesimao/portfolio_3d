/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICEID: string;
  readonly VITE_EMAILJS_TEMPLATEID: string;
  readonly VITE_EMAILJS_OPTIONS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
