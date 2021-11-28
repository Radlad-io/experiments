import styles from "./002.module.scss";

import Header from "@components/elements/Header/Header";
import Video from "@components/elements/Video/Video";

export default function Blender001() {
  return (
    <>
      <Header
        title="Exploring Blender Physics"
        info="This is an exploration of how to animate in Blender using physics. In this instance, the ball is manually keyframed up until it meets the tower of cubes. From that point on, Blender's physics engine takes over and animates the position of everything using properties like weight and friction that are assigned to each of the objects."
        recycle
      />
      <iframe
        className={styles.frame}
        src="https://experiments-webxr.vercel.app/1-basic_scene_webxr.html"
      ></iframe>
      <div className={styles.launch}>
        <a href="https://experiments-webxr.vercel.app/2-more_objects.html">
          Launch WebXR Application
          <i className={`${styles.external} material-icons-outlined`}>
            open_in_new
          </i>
        </a>
      </div>
    </>
  );
}
