import React, { useState, useEffect } from "react";
import {
  Image,
  Row,
  Col,
  Container,
  Button,
  Card,
  Form,
} from "react-bootstrap";
import "../../assets/css/style.css";
import { useLogin } from "../../hooks/auth-hook";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { useTranslation } from "react-i18next";
const Login = () => {
  const { t } = useTranslation();
  const { inputs, errors, handleSubmit, loading } = useLogin();
  const navigate = useNavigate();
  const cookies = new Cookies();
  useEffect(() => {
    if (cookies.get("accessToken")) {
      navigate("/");
    }
  }, []);
  return (
    <Container fluid>
      <Row className="section align-items-center justify-content-center flex-column">
       
      </Row>
    </Container>
  );
};

export default Login;
