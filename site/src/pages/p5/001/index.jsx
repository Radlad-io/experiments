import styles from "./001.module.scss";
import Header from "@components/elements/Header/Header";

export default function P5001() {
  return (
    <>
      <Header
        title="Exploring Blender Physics"
        info="This is an exploration of how to animate in Blender using physics. In this instance, the ball is manually keyframed up until it meets the tower of cubes. From that point on, Blender's physics engine takes over and animates the position of everything using properties like weight and friction that are assigned to each of the objects."
        recycle
      />
      <iframe className={styles.frame} src=""></iframe>
    </>
  );
}
