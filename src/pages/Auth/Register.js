import React, { useState } from "react";
import { useRegister } from "../../hooks/auth-hook";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Container,
  Image,
  Row,
  Col,
  Form,
  Card,
} from "react-bootstrap";
import { useTranslation } from "react-i18next";
const Register = () => {
  const { t } = useTranslation();
  const { inputs, errors, handleSubmit, loading } = useRegister();
  const navigate = useNavigate();
  return (
    <Container fluid>
     
    </Container>
  );
};

export default Register;
