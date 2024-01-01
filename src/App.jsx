import React, { useState } from "react";
import CardContextComponent from "./utils/CardContextComponent";
import { Navigate } from "react-router-dom";
import PurchaseContextComponent from "./utils/PurchaseContextComponent";
import AddToCard from "./components/AddToCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CardContextComponent>
          <PurchaseContextComponent>
            <Routes>
              <Route  path="carts" element={<PurchaseContextComponent> <AddToCard /> </PurchaseContextComponent> }/>
              <Route path="*" element={<Navigate to="carts" />}/>
            </Routes>
          </PurchaseContextComponent>
        </CardContextComponent>    
      </BrowserRouter>
    </>
  );
};

export default App;
