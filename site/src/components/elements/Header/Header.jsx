import { useState } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";

import Modal from "@components/elements/Modal/Modal";

export default function ReturnButton({ title, info, animate, setAnimate }) {
  const [modal, setModal] = useState(false);
  return (
    <div className={styles.header}>
      <Link href="/" passHref>
        <div className={`${styles.btn} noselect`}>
          <i className={`material-icons`}>arrow_back</i>
          <p>Return</p>
        </div>
      </Link>
      <div className={`${styles.actions} noselect`}>
        {title && (
          <i
            onClick={() => {
              setModal(!modal);
            }}
            className={`${styles.info} material-icons-outlined`}
          >
            text_snippet
          </i>
        )}

        {setAnimate && (
          <i
            onClick={() => {
              setAnimate(!animate);
            }}
            className={`${styles.reload} material-icons`}
          >
            sync
          </i>
        )}
      </div>
      <Modal title={title} info={info} isOpen={modal} />
    </div>
  );
}
