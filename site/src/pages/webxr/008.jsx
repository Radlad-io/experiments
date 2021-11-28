import styles from "./webxr.module.scss";

import Header from "@components/elements/Header/Header";
import Video from "@components/elements/Video/Video";

export default function Blender001() {
  return (
    <>
      <Header
        title="Exploring WebXR API"
        info={
          "8. Hit testing via reticle. The intention of this project is to explore the very new WebXR API, which will one day power augmented reality experiences delivered via web browsers. At this time, these experiments can only be run in browsers which support the API which are few and far between. WebXRViewer by Mozilla is the only option I know of currently."
        }
      />
      <iframe
        className={styles.frame}
        src="https://experiments-webxr.vercel.app/7-hit_testing_only_reticle.html"
      ></iframe>
      <div className={styles.launch}>
        <a href="https://experiments-webxr.vercel.app/7-hit_testing_only_reticle.html">
          Launch WebXR Application
          <i className={`${styles.external} material-icons-outlined`}>
            open_in_new
          </i>
        </a>
      </div>
    </>
  );
}
