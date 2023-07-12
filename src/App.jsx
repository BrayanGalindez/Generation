// import useMusicPlayer from "./musicPlayer";
// import musicURL from "../src/utils/music.mp3";
// import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  // useMusicPlayer(musicURL);

  return (
    <div className="App">
      {/* <NavBar /> */}
      <AnimatedRoutes />
      <Footer />
    </div>
  );
}

export default App;
