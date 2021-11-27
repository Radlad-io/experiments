import styles from "./001.module.scss";
import React, { useState } from "react";

import Header from "@components/elements/Header/Header";

export default function Blender001() {
  const [animate, setAnimate] = useState(true);
  return (
    <>
      <Header
        title="Exploring Blender Physics"
        info="This is an exploration of how to animate in Blender using physics."
        recycle
      />
      <div className={styles.flex}>
        <h1>Blender</h1>
      </div>
    </>
  );
}
