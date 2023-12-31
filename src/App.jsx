import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import ShopContent from "./components/ShopContent";
import Footer from "./components/Footer";
import CardContextComponent from "./utils/CardContextComponent";
import PurchaseContextComponent from "./utils/PurchaseContextComponent";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import AddToCard from "./components/AddToCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// export const IdContext = React.createContext()

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CardContextComponent>
          <PurchaseContextComponent>
            <Navigation />
            <Routes>
              <Route path="/shop-content" element={<ShopContent />}></Route>
              <Route
                path="carts"
                element={
                  <PurchaseContextComponent>
                    <AddToCard />
                  </PurchaseContextComponent>
                }
              />
              <Route path="/*" element={<Navigate to="/shop-content" />} />
            </Routes>
          </PurchaseContextComponent>
        </CardContextComponent>
      
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
