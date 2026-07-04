export const getBrowser = () => {
  const userAgent = navigator.userAgent;

  if (userAgent.includes("Chrome")) {
    return "Chrome";
  } else if (userAgent.includes("Firefox")) {
    return "Firefox";
  } else {
    return "Other";
  }
};
