export const textVariant = (delay?: number) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number,
) => {
  let x = 0;
  let y = 0;

  switch (direction) {
    case "left":
      x = 100;
      break;
    case "right":
      x = -100;
      break;
    case "up":
      y = 100;
      break;
    case "down":
      y = -100;
      break;
    default:
      break;
  }

  return {
    hidden: {
      x,
      y,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number,
) => {
  let x = "0";
  let y = "0";

  switch (direction) {
    case "left":
      x = "-100%";
      break;
    case "right":
      x = "100%";
      break;
    case "up":
      y = "100%";
      break;
    case "down":
      y = "100%";
      break;
    default:
      break;
  }
  return {
    hidden: {
      x: x,
      y: y,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (
  staggerChildren?: never,
  delayChildren?: never,
) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren ?? 0,
      },
    },
  };
};
