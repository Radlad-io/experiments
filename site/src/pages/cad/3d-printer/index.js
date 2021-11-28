import styles from "./index.module.scss";
import Header from "@components/elements/Header/Header";

export default function P5001() {
  return (
    <>
      <Header
        title="3D Printer Design"
        info="This was an open source FDM 3d printer design that I was working on for fun. At the time open source machines all seemed to prioritize low cost which presented quality issues. This machine was being designed as a middle ground between high end machines and low cost machines. A surge of new 3d printer companies caused me to halt this project. Valuable experience in CAD was gained."
        recycle
      />
      <iframe className={styles.frame} src="http://a360.co/2kIPC1e"></iframe>
      
    </>
  );
}
