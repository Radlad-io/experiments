import styles from "./001.module.scss";
import React, { useState } from "react";

import ReturnButton from "@components/elements/ReturnButton/ReturnButton";

export default function Blender001() {
  const [animate, setAnimate] = useState(true);
  return (
    <>
      <ReturnButton recycle />

      <div className={styles.flex}>
        <h1>Blender</h1>
      </div>
    </>
  );
}
