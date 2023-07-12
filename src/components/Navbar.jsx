// import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai";
// import useMusicPlayer from "../musicPlayer.js";
// import musicURL from "../utils/music.mp3";
import "../styles/components/Navbar.css";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/"); // Reemplaza "/otra-ruta" con la ruta a la que deseas redirigir
  };
  // const { setVolume, playMusic, pauseMusic, volume, isPlaying } =
  //   useMusicPlayer(musicURL);

  // const handleVolumeChange = (event) => {
  //   const newVolume = event.target.value;
  //   setVolume(newVolume);
  // };

  // const handleTogglePlay = () => {
  //   if (isPlaying) {
  //     pauseMusic();
  //   } else {
  //     playMusic();
  //   }
  // };

  return (
    <div className="navbar">
      <button className="button-inicio" onClick={handleButtonClick}>
        Inicio
      </button>
      <div className="controlsContainer">
        {/* <div className="playButton" onClick={handleTogglePlay}>
          {isPlaying ? (
            <AiOutlinePauseCircle className="playIcon" />
          ) : (
            <AiOutlinePlayCircle className="playIcon" />
          )}
        </div> */}

        {/* <div className="volumeControl">
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div> */}
      </div>
    </div>
  );
}
export default NavBar;
