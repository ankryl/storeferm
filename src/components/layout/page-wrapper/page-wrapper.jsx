import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { StyledPageWrapper } from "./styles";
import { Outlet } from "react-router-dom";

export default function PageWrapper({ ...prop }) {
  return (
    <>
      <Header />
      <StyledPageWrapper>
       <Outlet />
      </StyledPageWrapper>
      <Footer />
    </>
  );
}
