import { useRouter } from "next/router";
import styles from "./Home.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

import Container from "@components/layout/Container/Container";
import Layout from "@components/utility/Metadata";
import router from "next/router";

const pageWrapper = {
  initial: {
    opacity: 0,
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  in: {
    opacity: 1,
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.05,
      staggerDirection: 1,
    },
  },
  out: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
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
  out: {
    opacity: 0,
    y: 15,
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
    y: [15, -4, 0],
    transition: {
      duration: 0.45,
      ease: "easeInOut",
    },
  },
  out: {
    opacity: 0,
    y: 15,
    transition: {
      duration: 0.35,
      ease: "easeInOut",
    },
  },
};

export default function Home() {
  const router = useRouter();
  return (
    <motion.div
      exit={"out"}
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
                <ul>
                  <li>
                    <Link
                      href="https://www.awwwards.com/academy/course/flawless-typography-understanding-and-breaking-the-rules"
                      passHref
                    >
                      A typography course
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.awwwards.com/academy/course/impress-everyone-with-a-3d-particle-scene-starting-from-bad-models"
                      passHref
                    >
                      A Three.js + Blender particle course
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.awwwards.com/academy/course/audio-reactive-visuals-with-code"
                      passHref
                    >
                      Audio visualizations with P5.js
                    </Link>
                  </li>
                </ul>
              </motion.article>
              <motion.article
                variants={articles}
                className={styles.block}
                id={styles.framerMotion}
              >
                <h2>Framer Motion</h2>
                <ul>
                  <li>
                    <Link href="/framer-motion/001" passHref scroll={false}>
                      Orchestration + State
                    </Link>
                  </li>
                  <li>
                    <Link href="/framer-motion/001" passHref scroll={false}>
                      Adding Masks
                    </Link>
                  </li>
                  <li>
                    <Link href="/framer-motion/001" passHref scroll={false}>
                      Keyframes
                    </Link>
                  </li>
                  <li>
                    <Link href="/framer-motion/002" passHref scroll={false}>
                      Intersection Observer
                    </Link>
                  </li>
                  <li>
                    <Link href="/framer-motion/003" passHref scroll={false}>
                      Parallax effect
                    </Link>
                  </li>
                  <li>
                    <Link href="/framer-motion/003" passHref scroll={false}>
                      Custom cursor
                    </Link>
                  </li>
                  <li>
                    <Link href="/framer-motion/001" passHref scroll={false}>
                      Drag + Drop
                    </Link>
                  </li>
                  <li>
                    <Link href="/framer-motion/001" passHref scroll={false}>
                      Shared layout
                    </Link>
                  </li>
                </ul>
                <div className={styles.disclaimer}>
                  <i className={`material-icons-outlined`}>construction</i>
                  <p>Work in progress</p>
                </div>
              </motion.article>
              <motion.article
                variants={articles}
                className={styles.block}
                id={styles.comingSoon}
              >
                <h2>Three.js</h2>
                <p>Coming soon.</p>
              </motion.article>
              <motion.article
                variants={articles}
                className={styles.block}
                id={styles.comingSoon}
              >
                <h2>AFrame</h2>
                <p>Coming soon.</p>
              </motion.article>
              <motion.article
                variants={articles}
                className={styles.block}
                id={styles.electron}
              >
                <h2>RadBooth</h2>
                <ul>
                  <li>
                    <Link
                      href="https://github.com/Radlad-io/RadBooth-App"
                      passHref
                      scroll={false}
                    >
                      <a>
                        Application
                        <i className={`material-icons-outlined`}>open_in_new</i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com/Radlad-io/radbooth-service"
                      passHref
                      scroll={false}
                    >
                      <a>
                        Service
                        <i className={`material-icons-outlined`}>open_in_new</i>
                      </a>
                    </Link>
                  </li>
                </ul>
                <div className={styles.disclaimer}>
                  <i className={`material-icons-outlined`}>construction</i>
                  <p>Work in progress</p>
                </div>
              </motion.article>
              <motion.article
                variants={articles}
                className={styles.block}
                id={styles.comingSoon}
              >
                <h2>Electron</h2>
                <p>Coming soon.</p>
              </motion.article>
              <motion.article
                variants={articles}
                className={styles.block}
                id={styles.comingSoon}
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
                <ul>
                  <li>
                    <Link href="https://github.com/Radlad-io/Soundbot" passHref>
                      <div>
                        SoundBot
                        <i className={`material-icons-outlined`}>open_in_new</i>
                      </div>
                    </Link>
                  </li>
                </ul>
              </motion.article>
              <motion.article
                variants={articles}
                className={styles.block}
                id={styles.comingSoon}
              >
                <h2>TensorFlow.JS</h2>
                <p>Coming soon.</p>
              </motion.article>
              <motion.article variants={articles} className={styles.block}>
                <h2>P5.JS</h2>

                <ul>
                  <li>
                    <Link
                      href="/p5/01_simple-canvas-drawing"
                      passHref
                      scroll={false}
                    >
                      Simple Canvas
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/p5/02_input-interactions"
                      passHref
                      scroll={false}
                    >
                      User Interactions
                    </Link>
                  </li>
                  <li>
                    <Link href="/p5/03_audio_input" passHref scroll={false}>
                      Audio Input
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/p5/04_static_audio_waveform"
                      passHref
                      scroll={false}
                    >
                      Audio Waveform
                    </Link>
                  </li>
                </ul>
              </motion.article>
              <motion.article
                variants={articles}
                className={styles.block}
                id={styles.webXr}
              >
                <h2>WebXR API</h2>
                <ul>
                  <li>
                    <Link href="/webxr/001" passHref scroll={false}>
                      Basic Scene
                    </Link>
                  </li>
                  <li>
                    <Link href="/webxr/002" passHref scroll={false}>
                      Basic Scene + WebXR
                    </Link>
                  </li>
                  <li>
                    <Link href="/webxr/003" passHref scroll={false}>
                      Additional Objects
                    </Link>
                  </li>
                  <li>
                    <Link href="/webxr/004" passHref scroll={false}>
                      Additional Objects + Animation
                    </Link>
                  </li>
                  <li>
                    <Link href="/webxr/005" passHref scroll={false}>
                      Model loading
                    </Link>
                  </li>
                  <li>
                    <Link href="/webxr/006" passHref scroll={false}>
                      Animated Model
                    </Link>
                  </li>
                  <li>
                    <Link href="/webxr/007" passHref scroll={false}>
                      Touch gestures
                    </Link>
                  </li>
                  <li>
                    <Link href="/webxr/008" passHref scroll={false}>
                      Hit testing (reticle only)
                    </Link>
                  </li>
                  <li>
                    <Link href="/webxr/009" passHref scroll={false}>
                      Hit testing
                    </Link>
                  </li>
                </ul>

                <div className={styles.disclaimer}>
                  <i className={`material-icons-outlined`}>warning</i>
                  <p>Requires special browser</p>
                </div>
              </motion.article>
              <motion.article
                variants={articles}
                className={styles.block}
                id={styles.nodejs}
              >
                <h2>Blender</h2>
                <ul>
                  <li>
                    <Link href="/blender/001" passHref scroll={false}>
                      Physics animation
                    </Link>
                  </li>
                </ul>
              </motion.article>
              <motion.article
                variants={articles}
                className={styles.block}
                id={styles.comingSoon}
              >
                <h2>After Effects</h2>
                <p>Coming soon.</p>
              </motion.article>
              <motion.article
                variants={articles}
                className={styles.block}
                id={styles.comingSoon}
              >
                <h2>Spark AR Studio</h2>
                <p>Coming soon.</p>
              </motion.article>
              <motion.article
                variants={articles}
                className={styles.block}
                id={styles.fusion360}
              >
                <h2>Fusion360 / CAD</h2>
                <ul>
                  <li>
                    <Link href="/cad/3d-printer" passHref scroll={false}>
                      3D Printer
                    </Link>
                  </li>
                </ul>
              </motion.article>
            </div>
          </main>
        </Container>
      </Layout>
    </motion.div>
  );
}
