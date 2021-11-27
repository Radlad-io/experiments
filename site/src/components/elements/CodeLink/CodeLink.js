import styles from "./CodeLink.module.scss";
import Link from "next/link";

function CodeLink({ link }) {
  return (
    <div className={styles.footer}>
      <p>
        💻 Project files can be found{" "}
        <a>
          <Link href={link} passHref>
            here!
          </Link>
        </a>
      </p>
    </div>
  );
}

export default CodeLink;
