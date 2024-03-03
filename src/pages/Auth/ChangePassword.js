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
import { useForgot } from "../../hooks/auth-hook";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();
  const { inputs, success, errors, handleSubmit, loading } = useForgot();
  const toastMessage = (type, text) => {
    toast[type](text, {
      position: toast.POSITION.TOP_CENTER,
      theme: "colored",
    });
  };

  useEffect(() => {
    if (success.success != null) {
      toastMessage("success", "Reset mail sent. Please check your mail.");
    }
  }, [success.success]);

  useEffect(() => {
    if (errors.error != null) {
      toastMessage("error", errors.error);
    }
  }, [errors.error]);
  return (
    <Container fluid>
      <ToastContainer />
    </Container>
  );
};

export default Login;
