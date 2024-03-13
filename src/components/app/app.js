import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import featuresList from "../../mocks/featuresitem";
import products from "../../mocks/products";
import { GlobalStyle } from "./styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "../../const";
import MainPage from "../pages/main-page/main-page";
import OrderPage from "../pages/order-page/order-page";
import ScrollToTop from "../ui/scrolltop/scrolltop";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route
              index
              element={<MainPage features={featuresList} />}
            />
            <Route
              path={AppRoute.ORDER.replace(AppRoute.MAIN, "")}
              element={<OrderPage products={products} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
