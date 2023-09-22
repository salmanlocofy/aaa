import { Player } from "@lottiefiles/react-lottie-player";
import styles from "./frame.module.css";

const Frame = () => {
  return (
    <div className={styles.rectangleParent}>
      <Player
        className={styles.frameChild}
        autoplay
        src="/lottie-1689-file-download.json"
      />
    </div>
  );
};

export default Frame;
