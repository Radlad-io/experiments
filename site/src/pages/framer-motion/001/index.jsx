import styles from "./001.module.scss";
import React, { useState } from "react";
import { motion } from "framer-motion";
import * as variants from "./001.motion";

import ReturnButton from "@components/elements/ReturnButton/ReturnButton";
import CodeLink from "@components/elements/CodeLink/CodeLink";

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
              <motion.span variants={variants.FirstVariants}>
                <motion.span variants={variants.FirstLetterVariants}>
                  A
                </motion.span>
                <motion.span variants={variants.FirstLetterVariants}>
                  r
                </motion.span>
                <motion.span variants={variants.FirstLetterVariants}>
                  t
                </motion.span>
                <motion.span variants={variants.FirstLetterVariants}>
                  i
                </motion.span>
                <motion.span variants={variants.FirstLetterVariants}>
                  c
                </motion.span>
                <motion.span variants={variants.FirstLetterVariants}>
                  l
                </motion.span>
                <motion.span variants={variants.FirstLetterVariants}>
                  e
                </motion.span>
              </motion.span>
            </span>
            <span className={styles.last}>
              <motion.span variants={variants.LastVariants}>
                <motion.span variants={variants.SecondLetterVariants}>
                  T
                </motion.span>
                <motion.span variants={variants.SecondLetterVariants}>
                  i
                </motion.span>
                <motion.span variants={variants.SecondLetterVariants}>
                  t
                </motion.span>
                <motion.span variants={variants.SecondLetterVariants}>
                  l
                </motion.span>
                <motion.span variants={variants.SecondLetterVariants}>
                  e
                </motion.span>
              </motion.span>
            </span>
            <motion.div
              className={styles.underline}
              variants={variants.UnderlineVariants}
            />
          </motion.div>
        </h1>
      </div>
      <CodeLink link="https://github.com/Radlad-io/workshop/blob/main/src/components/layout/Layout.js" />
    </>
  );
}
