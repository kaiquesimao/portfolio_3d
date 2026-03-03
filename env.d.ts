declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_EMAILJS_SERVICEID: string;
      NEXT_PUBLIC_EMAILJS_TEMPLATEID: string;
      NEXT_PUBLIC_EMAILJS_OPTIONS: string;
    }
  }
}

export {};
