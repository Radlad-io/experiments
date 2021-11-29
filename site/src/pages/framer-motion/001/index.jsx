import styles from "./001.module.scss";
import React, { useState } from "react";
import { motion } from "framer-motion";
import * as variants from "@motion/framer-motion/001.motion";

import Header from "@components/elements/Header/Header";
import CodeLink from "@components/elements/CodeLink/CodeLink";

export default function Animation001() {
  const [animate, setAnimate] = useState(true);
  return (
    <>
      <Header
        title="Exploring Framer Motion"
        info="Framer-Motion is a powerful motion library for React. I've wanted to get more familiar with it so I'm putting together a few examples. This one is focused on choregraphing different elements and reacting to state change."
        animate={animate}
        setAnimate={setAnimate}
      />
      <div className={styles.wrapper}>
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
      </div>
      <CodeLink link="https://github.com/Radlad-io/experiments/tree/main/site/src/pages/framer-motion/001" />
    </>
  );
}
