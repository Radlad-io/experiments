import styles from "./Home.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

import Container from "@components/layout/Container/Container";
import Layout from "@components/utility/Metadata";

export default function Home() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Layout>
        <Container>
          <main className={styles.wrapper}>
            <h1>Experiments</h1>
            <div className={styles.flex}>
              <div className={styles.block}>
                <h2>Framer Motion</h2>
                <Link href="/animation/001">Example 001</Link>
                <Link href="/animation/001">Example 001</Link>
                <Link href="/animation/001">Example 001</Link>
                <Link href="/animation/001">Example 001</Link>
              </div>
              <div className={styles.block}>
                <h2>Three.js</h2>
                <Link href="/animation/001">Example 001</Link>
              </div>
              <div className={styles.block}>
                <h2>AFrame</h2>
                <Link href="/animation/001">Example 001</Link>
              </div>
              <div className={styles.block}>
                <h2>Electron</h2>
                <Link href="/animation/001">Example 001</Link>
              </div>

              <div className={styles.block}>
                <h2>React Native</h2>
                <Link href="/animation/001">Example 001</Link>
              </div>
              <div className={styles.block}>
                <h2>Discord</h2>
                <Link href="/animation/001">Example 001</Link>
              </div>
            </div>
          </main>
        </Container>
      </Layout>
    </motion.div>
  );
}
