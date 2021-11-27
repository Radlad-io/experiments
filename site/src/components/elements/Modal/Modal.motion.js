
export const modal = {
  initial: {
    y: "-100vh"
  },
  in: {
    y: 0,
    transition: {
      duration: .01,
      delayChildren: 0.01,
    }
  },
  out: {
    y: "-100vh",
    transition: {
      delay: .75,
      duration: .01,
    }
  },
};

export const modalBg = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      duration: .5,
      delayChildren: .5,
      staggerChildren: .25,
    },
  },
  out: {
    opacity: 0,
    transition: {
      delay: .25,
      duration: .5,
    },
  },
};

export const heading = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      duration: .75,
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: .25,
    },
  },
};


export const info = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      duration: .75,
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: .25,
    },
  },
};
