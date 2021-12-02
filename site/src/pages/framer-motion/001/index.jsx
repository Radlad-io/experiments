import styles from "./001.module.scss";
import React, { useState } from "react";
import { motion } from "framer-motion";
import * as variants from "@motion/framer-motion/001.motion";

import Header from "@components/elements/Header/Header";
import CodeLink from "@components/elements/CodeLink/CodeLink.jsx";

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
      <motion.div
        className={styles.wrapper}
        initial="inital"
        animate={animate ? "in" : "out"}
        exit="out"
      >
        <div className={styles.flex}>
          <h1 className={styles.heading}>
            <motion.span variants={variants.FirstVariants}>
              <span className={styles.noWrap}>
                <motion.span variants={variants.letterVariants}>T</motion.span>
                <motion.span variants={variants.letterVariants}>h</motion.span>
                <motion.span variants={variants.letterVariants}>
                  e&nbsp;
                </motion.span>
              </span>
              <span className={styles.noWrap}>
                <motion.span variants={variants.letterVariants}>u</motion.span>
                <motion.span variants={variants.letterVariants}>n</motion.span>
                <motion.span variants={variants.letterVariants}>i</motion.span>
                <motion.span variants={variants.letterVariants}>v</motion.span>
                <motion.span variants={variants.letterVariants}>e</motion.span>
                <motion.span variants={variants.letterVariants}>r</motion.span>
                <motion.span variants={variants.letterVariants}>s</motion.span>
                <motion.span variants={variants.letterVariants}>
                  e&nbsp;
                </motion.span>
              </span>
              <span className={styles.noWrap}>
                <motion.span variants={variants.letterVariants}>i</motion.span>
                <motion.span variants={variants.letterVariants}>
                  s&nbsp;
                </motion.span>
              </span>
              <motion.span variants={variants.letterVariants}>
                a&nbsp;
              </motion.span>
              <span className={styles.noWrap}>
                <motion.span variants={variants.letterVariants}>b</motion.span>
                <motion.span variants={variants.letterVariants}>i</motion.span>
                <motion.span variants={variants.letterVariants}>
                  g&nbsp;
                </motion.span>
              </span>
              <span className={styles.noWrap}>
                <motion.span variants={variants.letterVariants}>p</motion.span>
                <motion.span variants={variants.letterVariants}>l</motion.span>
                <motion.span variants={variants.letterVariants}>a</motion.span>
                <motion.span variants={variants.letterVariants}>c</motion.span>
                <motion.span variants={variants.letterVariants}>e</motion.span>
                <motion.span variants={variants.letterVariants}>
                  ,&nbsp;
                </motion.span>
              </span>
              <span className={styles.noWrap}>
                <motion.span variants={variants.letterVariants}>p</motion.span>
                <motion.span variants={variants.letterVariants}>e</motion.span>
                <motion.span variants={variants.letterVariants}>r</motion.span>
                <motion.span variants={variants.letterVariants}>h</motion.span>
                <motion.span variants={variants.letterVariants}>a</motion.span>
                <motion.span variants={variants.letterVariants}>p</motion.span>
                <motion.span variants={variants.letterVariants}>
                  s&nbsp;
                </motion.span>
              </span>
              <span className={styles.noWrap}>
                <motion.span variants={variants.letterVariants}>t</motion.span>
                <motion.span variants={variants.letterVariants}>h</motion.span>
                <motion.span variants={variants.letterVariants}>
                  e&nbsp;
                </motion.span>
              </span>
              <span className={styles.noWrap}>
                <motion.span variants={variants.letterVariants}>b</motion.span>
                <motion.span variants={variants.letterVariants}>i</motion.span>
                <motion.span variants={variants.letterVariants}>g</motion.span>
                <motion.span variants={variants.letterVariants}>g</motion.span>
                <motion.span variants={variants.letterVariants}>e</motion.span>
                <motion.span variants={variants.letterVariants}>s</motion.span>
                <motion.span variants={variants.letterVariants}>t</motion.span>
                <motion.span variants={variants.letterVariants}>.</motion.span>
              </span>
            </motion.span>
          </h1>
          <motion.p variants={variants.cite}>Kurt Vonnegut</motion.p>
        </div>
      </motion.div>
      <CodeLink link="https://github.com/Radlad-io/experiments/tree/main/site/src/pages/framer-motion/001" />
    </>
  );
}
