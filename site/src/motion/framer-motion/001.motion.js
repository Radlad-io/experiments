const transition = { ease: [0.5, 0.01, -0.05, 0.9] };

export const FirstVariants = {
  initial: {
    opacity: 0,
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.07,
      staggerDirection: -1,
    },
  },
  in: {
    opacity: 1,
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.035,
      staggerDirection: 1,
    },
  },
  out: {
    opacity: 1,
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.035,
      staggerDirection: -1,
    },
  },
};

export const LastVariants = {
  initial: {
    opacity: 0,
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.14,
      staggerDirection: 1,
    },
  },
  in: {
    opacity: 1,
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.14,
      staggerDirection: 1,
    },
  },
  out: {
    opacity: 1,
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.14,
      staggerDirection: -1,
    },
  },
};

export const letterVariants = {
  inital: {
    y: 150,
    opacity: 0,
    transition: { duration: 1 },
  },
  in: {
    y: [150, -15, 0],
    opacity: 1,
    transition: { duration: 1 },
  },
  out: {
    y: [0, -15, 150],
    opacity: 0,
    transition: { duration: 1 },
  },
};

export const cite = {
  inital: {
    opacity: 0,
    transition: { duration: 1 },
  },
  in: {
    opacity: 1,
    transition: { delay: 2, duration: 1 },
  },
  out: {
    opacity: 0,
    transition: { duration: 1 },
  },
};
