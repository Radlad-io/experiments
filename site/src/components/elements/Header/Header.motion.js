import { motion } from "framer-motion";

export const wrapper = {
  in: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
      staggerDirection: 1,
    },
  },
  out: {
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export const btn = {
  initial: {
    opacity: 0,
    transition: { duration: 0.75 },
  },
  in: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.75 },
  },
  out: {
    opacity: 0,
    transition: { duration: 0.75 },
  },
};

export const actions = {
  initial: {
    opacity: 0,
    transition: { duration: 0.75 },
  },
  in: {
    opacity: 1,
    transition: { duration: 0.75 },
  },
  out: {
    opacity: 0,
    transition: { duration: 0.75 },
  },
};
