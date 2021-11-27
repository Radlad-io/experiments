import CodeLink from "../CodeLink/CodeLink";
import styles from "./Video.module.scss";

export default function Video() {
  return (
    <>
      <div className={styles.wrapper}>
        <video
          src="https://s3.blk.studio/Personal/Experiments/Blender/001/Blender_Physics%20001.mp4"
          autoPlay
          playsInline
          muted
          loop
          controls
        ></video>
      </div>
      <CodeLink
        link={
          "https://s3.blk.studio/Personal/Experiments/Blender/001/Physics_Cube_Wall.blend"
        }
      ></CodeLink>
    </>
  );
}
