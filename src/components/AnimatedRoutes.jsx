import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import CardPage from "../pages/CardPage";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="informacion" element={<CardPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
