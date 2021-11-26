import styles from "./Header.module.scss";
import { motion } from "framer-motion";

const transition = { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] };

const FirstContainer = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.09,
      staggerDirecctsion: -1,
    },
  },
};

const SecondContainer = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.09,
    },
  },
};

const item = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
};

function Header({ title }) {
  // Breaks the string into an array of characters
  var list = [...title];
  var spans = list.map((character, index) => (
    <motion.span key={index} variants={item}>
      {character.toString()}
    </motion.span>
  ));
  return (
    <div className={styles.mask}>
      <motion.h1
        variants={FirstContainer}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        {spans}
      </motion.h1>
    </div>
  );
}

export default Header;
