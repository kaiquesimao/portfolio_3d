declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_EMAILJS_SERVICEID?: string;
      NEXT_EMAILJS_TEMPLATEID?: string;
      NEXT_EMAILJS_OPTIONS?: string;
      NEXT_EMAILJS_PRIVATEKEY?: string;
    }
  }
}

export {};
