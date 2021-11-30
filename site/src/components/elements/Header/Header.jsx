import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
import { motion } from "framer-motion";
import * as variants from "./Header.motion";

import Modal from "@components/elements/Modal/Modal";

export default function ReturnButton({ title, info, animate, setAnimate }) {
  const [modal, setModal] = useState(false);
  return (
    <motion.div
      className={styles.header}
      variants={variants.wrapper}
      initial="initial"
      animate="in"
      exit="out"
    >
      <Link href="/" passHref scroll={false}>
        <motion.div
          className={`${styles.btn} noselect`}
          variants={variants.btn}
        >
          <motion.i className={`material-icons`}>arrow_back</motion.i>
          <motion.p>Return</motion.p>
        </motion.div>
      </Link>

      <div className={`${styles.actions} noselect`}>
        {title && (
          <motion.i
            variants={variants.actions}
            onClick={() => {
              setModal(!modal);
            }}
            className={`${styles.info} material-icons-outlined`}
          >
            text_snippet
          </motion.i>
        )}

        {setAnimate && (
          <motion.i
            variants={variants.actions}
            onClick={() => {
              setAnimate(!animate);
            }}
            className={`${styles.reload} material-icons`}
          >
            sync
          </motion.i>
        )}
      </div>
      <Modal title={title} info={info} isOpen={modal} />
    </motion.div>
  );
}
