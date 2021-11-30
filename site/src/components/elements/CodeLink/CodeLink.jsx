import styles from "./CodeLink.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import * as variants from "./CodeLink.motion";

function CodeLink({ link }) {
  return (
    <motion.div
      variants={variants.wrapper}
      initial="initial"
      animate="in"
      exit="out"
      className={styles.footer}
    >
      <p>
        💻 Project files can be found{" "}
        <a>
          <Link href={link} passHref>
            here!
          </Link>
        </a>
      </p>
    </motion.div>
  );
}

export default CodeLink;
