import React, { useEffect, useState } from "react";
import { Image, Row, Col, Container } from "react-bootstrap";
import "../../assets/css/style.css";
import Cookies from "universal-cookie";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Master = () => {
  const { t } = useTranslation();
  const cookies = new Cookies();

  return (
    <>
      <Container fluid className="outerContainer">
      <Header/>
        <Container className="innerContainer">
          {/* Content Area With Outlet */}
          <Outlet />

          {/* Footer Area */}
        </Container>
      </Container>
    </>
  );
};

export default Master;
