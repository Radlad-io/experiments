import styles from "./Modal.module.scss";
import { motion } from "framer-motion";
import * as variants from "./Modal.motion";

export default function Modal({ title, info, isOpen }) {
  return (
    <motion.div
      className={styles.modal}
      initial={"initial"}
      animate={isOpen ? "in" : "out"}
      exit={"out"}
      variants={variants.modal}
    >
      <motion.div className={styles.modalBg} variants={variants.modalBg}>
        <motion.h3 variants={variants.heading}>{title}</motion.h3>
        <motion.p variants={variants.info}>{info}</motion.p>
      </motion.div>
    </motion.div>
  );
}
