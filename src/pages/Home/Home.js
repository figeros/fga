import React, { useState } from "react";
import { Image, Row, Col, Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title></title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Helmet>

      <Container fluid>
        <p>home</p>
      </Container>
    </>
  );
};

export default Home;
