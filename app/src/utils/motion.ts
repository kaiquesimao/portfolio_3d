import type { Variants } from "framer-motion";

type Direction = "left" | "right" | "up" | "down" | "";
type TransitionType = "spring" | "tween" | "inertia" | "keyframes";

export const textVariant = (delay = 0): Variants => {
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
  direction: Direction,
  type: TransitionType = "tween",
  delay: number,
  duration: number,
): Variants => {
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
  direction: Direction,
  type: TransitionType = "tween",
  delay: number,
  duration: number,
): Variants => {
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
  staggerChildren = 0,
  delayChildren = 0,
): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren: delayChildren ?? 0,
      },
    },
  };
};
