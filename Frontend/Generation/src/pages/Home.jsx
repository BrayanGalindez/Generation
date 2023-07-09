import CardP from "../components/Card.jsx";
import fondo from "../utils/fondo.jpg";
import { motion } from "framer-motion";
function Home() {
  return (
    <motion.div
      initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth, transition:{duration: 0.1}}}
    >
      <div
        style={{
          className: "image-fondo",
          backgroundImage: `url(${fondo})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <CardP />
      </div>
    </motion.div>
  );
}

export default Home;
