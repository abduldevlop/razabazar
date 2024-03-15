import React from "react";
import NavBar from "./components/navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import MenuPage from "./pages/menu-page/MenuPage";
import AppPage from "./pages/app-page/AppPage";
import ContactPage from "./pages/contact-page/ContactPage";
import CardPage from "./pages/card-page/CardPage";
import PlaceOrder from "./pages/place-order-page/PlaceOrder";

const App = () => {
  return (
    <main className="main">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/card" element={<CardPage />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </main>
  );
};

export default App;
