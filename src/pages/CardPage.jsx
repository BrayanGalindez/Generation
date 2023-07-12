import { useState } from "react";
import CardInfo from "../components/CardInfo.jsx";
import fondo from "../utils/fondo.jpg";
import { cardData } from "../data/CardData.jsx"; // Ruta al archivo cardData.js
import "../styles/pages/CardPage.css";
import { motion } from "framer-motion";

const CardsPage = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [cards, setCards] = useState(cardData);

  const goToNextCard = () => {
    setCurrentCardIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex < cards.length ? newIndex : prevIndex;
    });
  };

  const goToBackCard = () => {
    setCurrentCardIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex >= 0 ? newIndex : prevIndex;
    });
  };
  const removeCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
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
        <div className="cards-info-page">
          <CardInfo
            key={cards[currentCardIndex].id}
            title={cards[currentCardIndex].title}
            content={cards[currentCardIndex].content}
            onRemove={() => removeCard(cards[currentCardIndex].id)}
          />
          <div className="button-container">
            <button className="button-card-back" onClick={goToBackCard}>
              Anterior tarjeta
            </button>
            <button className="button-card-next" onClick={goToNextCard}>
              Siguiente tarjeta
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CardsPage;
