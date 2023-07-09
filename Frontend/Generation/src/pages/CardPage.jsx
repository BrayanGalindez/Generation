import { useState } from "react";
import CardInfo from "../components/CardInfo.jsx";
import fondo from "../utils/fondo.jpg";
import { cardData } from "../data/CardData.jsx"; // Ruta al archivo cardData.js
import "../styles/pages/CardPage.css";
import { motion } from "framer-motion";

const CardsPage = () => {
  const [cards, setCards] = useState(cardData);

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
          {cards.map((card) => (
            <CardInfo
              key={card.id}
              title={card.title}
              content={card.content}
              onRemove={() => removeCard(card.id)}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CardsPage;