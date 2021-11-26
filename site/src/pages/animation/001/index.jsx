import styles from "./001.module.scss";
import React, { useState } from "react";
import { motion } from "framer-motion";

import ReturnButton from "@components/elements/ReturnButton/ReturnButton";
import CodeLink from "@components/elements/CodeLink/CodeLink";

const transition = { ease: [0.5, 0.01, -0.05, 0.9] };

const FirstVariants = {
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
      staggerDirection: -1,
    },
  },
  out: {
    opacity: 1,
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.14,
      staggerDirection: 1,
    },
  },
};

const LastVariants = {
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

const FirstLetterVariants = {
  inital: {
    y: 150,
    opacity: 0,
    transition: { duration: 1.2, ...transition },
  },
  in: {
    y: [150, -15, 0],
    opacity: 1,
    transition: { duration: 1.2, ...transition },
  },
  out: {
    y: [0, -15, 150],
    opacity: 0,
    transition: { duration: 1.2, ...transition },
  },
};

const SecondLetterVariants = {
  inital: {
    y: 150,
    opacity: 0,
    transition: { duration: 1.2, ...transition },
  },
  in: {
    y: [150, -15, 0],
    opacity: 1,
    transition: { duration: 1.2, ...transition },
  },
  out: {
    y: [0, -15, 150],
    opacity: 0,
    transition: { duration: 1.2, ...transition },
  },
};

const UnderlineVariants = {
  inital: {
    width: "0%",
    opacity: 0,
    transition: { duration: 1.2, delay: 1.2, ...transition },
  },
  in: {
    width: "96%",
    opacity: 1,
    transition: { duration: 1.25, delay: 0.75, ...transition },
  },
  out: {
    width: "0%",
    opacity: 0,
    transition: {
      duration: 1.2,
      ...transition,
    },
  },
};

export default function Animation001() {
  const [animate, setAnimate] = useState(true);
  return (
    <>
      <div
        onClick={() => {
          setAnimate(!animate);
        }}
      >
        <ReturnButton recycle />
      </div>
      <div className={styles.flex}>
        <h1 className={styles.heading}>
          <motion.div initial="inital" animate={animate ? "in" : "out"}>
            <span className={styles.first}>
              <motion.span variants={FirstVariants}>
                <motion.span variants={FirstLetterVariants}>A</motion.span>
                <motion.span variants={FirstLetterVariants}>r</motion.span>
                <motion.span variants={FirstLetterVariants}>t</motion.span>
                <motion.span variants={FirstLetterVariants}>i</motion.span>
                <motion.span variants={FirstLetterVariants}>c</motion.span>
                <motion.span variants={FirstLetterVariants}>l</motion.span>
                <motion.span variants={FirstLetterVariants}>e</motion.span>
              </motion.span>
            </span>
            <span className={styles.last}>
              <motion.span variants={LastVariants}>
                <motion.span variants={SecondLetterVariants}>T</motion.span>
                <motion.span variants={SecondLetterVariants}>i</motion.span>
                <motion.span variants={SecondLetterVariants}>t</motion.span>
                <motion.span variants={SecondLetterVariants}>l</motion.span>
                <motion.span variants={SecondLetterVariants}>e</motion.span>
              </motion.span>
            </span>
            <motion.div
              className={styles.underline}
              variants={UnderlineVariants}
            />
          </motion.div>
        </h1>
      </div>
      <CodeLink link="https://github.com/Radlad-io/workshop/blob/main/src/components/layout/Layout.js" />
    </>
  );
}
