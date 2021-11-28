import styles from "./Home.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

import Container from "@components/layout/Container/Container";
import Layout from "@components/utility/Metadata";

const pageWrapper = {
  initial: {
    opacity: 0,
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  in: {
    opacity: 1,
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

const heading = {
  initial: {
    opacity: 0,
    y: 15,
    transition: {
      ease: "easeInOut",
    },
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};

const articles = {
  initial: {
    opacity: 0,
    y: 15,
    transition: {
      ease: "easeInOut",
    },
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};

export default function Home() {
  return (
    <motion.div
      exit={"inital"}
      initial={"initial"}
      animate={"in"}
      variants={pageWrapper}
    >
      <Layout>
        <Container>
          <main className={styles.wrapper}>
            <motion.h1 variants={heading}>Experiments</motion.h1>
            <div className={styles.grid}>
              <motion.article
                variants={articles}
                className={styles.block}
                id={styles.current}
              >
                <h2>Currently working on</h2>

                <Link
                  href="https://www.awwwards.com/academy/course/flawless-typography-understanding-and-breaking-the-rules"
                  passHref
                >
                  A typography course
                </Link>
                <Link
                  href="https://www.awwwards.com/academy/course/impress-everyone-with-a-3d-particle-scene-starting-from-bad-models"
                  passHref
                >
                  A Three.js + Blender particle course
                </Link>
                <Link
                  href="https://www.awwwards.com/academy/course/audio-reactive-visuals-with-code"
                  passHref
                >
                  Audio visualizations with P5.js
                </Link>
                <Link href="https://www.udemy.com/course/learn-webxr" passHref>
                  WebXR API basics with Three.js
                </Link>
              </motion.article>
              <motion.article
                variants={articles}
                className={styles.block}
                id={styles.framerMotion}
              >
                <h2>Framer Motion</h2>
                <Link href="/framer-motion/001" passHref>
                  Example 001
                </Link>
              </motion.article>
              <motion.article
                variants={articles}
                className={styles.block}
                id={styles.threeJS}
              >
                <h2>Three.js</h2>
                <p>Coming soon.</p>
              </motion.article>
              <motion.article
                variants={articles}
                className={styles.block}
                id={styles.aframe}
              >
                <h2>AFrame</h2>
                <p>Coming soon.</p>
              </motion.article>
              <motion.article
                variants={articles}
                className={styles.block}
                id={styles.electron}
              >
                <h2>Electron</h2>
                <Link href="https://github.com/Radlad-io/RadBooth-App" passHref>
                  <div>
                    Radbooth
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16px"
                      viewBox="0 0 24 24"
                      width="16px"
                      fill="#000"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                    </svg>
                  </div>
                </Link>
              </motion.article>
              <motion.article
                variants={articles}
                className={styles.block}
                id={styles.reactNative}
              >
                <h2>React Native</h2>
                <p>Coming soon.</p>
              </motion.article>
              <motion.article
                variants={articles}
                className={styles.block}
                id={styles.nodejs}
              >
                <h2>Node.JS</h2>
                <Link href="https://github.com/Radlad-io/Soundbot" passHref>
                  <div>
                    SoundBot
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16px"
                      viewBox="0 0 24 24"
                      width="16px"
                      fill="#000"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                    </svg>
                  </div>
                </Link>
              </motion.article>
              <motion.article
                variants={articles}
                className={styles.block}
                id={styles.nodejs}
              >
                <h2>TensorFlow.JS</h2>
                <p>Coming soon.</p>
              </motion.article>
              <motion.article
                variants={articles}
                className={styles.block}
                id={styles.nodejs}
              >
                <h2>P5.JS</h2>
                <p>Coming soon.</p>
              </motion.article>
              <motion.article
                variants={articles}
                className={styles.block}
                id={styles.nodejs}
              >
                <h2>WebXR API</h2>
                <ol>
                  <li>
                    <Link href="/webxr/001" passHref>
                      Basic Scene
                    </Link>
                  </li>
                  <li>
                    <Link href="/webxr/002" passHref>
                      Basic Scene + WebXR
                    </Link>
                  </li>
                  <li>
                    <Link href="/webxr/003" passHref>
                      Additional Objects
                    </Link>
                  </li>
                  <li>
                    <Link href="/webxr/004" passHref>
                      Additional Objects + Animation
                    </Link>
                  </li>
                  <li>
                    <Link href="/webxr/005" passHref>
                      Model loading
                    </Link>
                  </li>
                  <li>
                    <Link href="/webxr/006" passHref>
                      Animated Model
                    </Link>
                  </li>
                  <li>
                    <Link href="/webxr/007" passHref>
                      Touch gestures
                    </Link>
                  </li>
                  <li>
                    <Link href="/webxr/008" passHref>
                      Hit testing (reticle only)
                    </Link>
                  </li>
                  <li>
                    <Link href="/webxr/009" passHref>
                      Hit testing
                    </Link>
                  </li>
                </ol>

                <div className={styles.disclaimer}>
                  <p>⚠️ Warning</p>
                </div>
              </motion.article>
              <motion.article
                variants={articles}
                className={styles.block}
                id={styles.nodejs}
              >
                <h2>Blender</h2>
                <Link href="/blender/001" passHref>
                  Example 001 (Physics)
                </Link>
              </motion.article>
            </div>
          </main>
        </Container>
      </Layout>
    </motion.div>
  );
}
