import styles from "./ReturnButton.module.scss";
import Link from "next/link";

export default function ReturnButton({ recycle }) {
  return (
    <div className={styles.header}>
      <Link href="/" passHref>
        <div className={styles.btn}>
          <i className={`material-icons`}>arrow_back</i>
          <p>Return</p>
        </div>
      </Link>

      {recycle && <i className={`${styles.reload} material-icons`}>sync</i>}
    </div>
  );
}
