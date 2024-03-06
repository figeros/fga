import React, { useState } from "react";
import { Image, Row, Col, Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import ArtPieces from "./Components/ArtPieces/ArtPieces";
import Artists from "./Components/Artists/Artists";
import ArtEvents from "./Components/ArtEvents/ArtEvents";
import Contact from "./Components/Contact/Contact";

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title></title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Helmet>

      <Container fluid className="homePageComponent">
        <ArtPieces/>
        <Artists/>
        <ArtEvents/>
        <Contact/>
      </Container>
    </>
  );
};

export default Home;
