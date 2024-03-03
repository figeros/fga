import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Login, Register, Logout, Forgot,ChangePassword } from "../api/auth-api";

import * as yup from "yup";

export function useLogin() {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const data = new FormData(e.target);
    const email = data.get("email");
    const password = data.get("password");
    console.log(email, password);
    schema
      .validate({ email, password })
      .then((res) => {
        Login(email, password)
          .then((res) => {
            if(res.status){
              window.location.reload();
            }else{
              setErrors({ error: res.data });
              console.log(errors);
              setLoading(false);
            }
         
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        setErrors((error) => ({ ...error, [err.path]: err.message }));
        console.log(errors);
      });
  };

  return {
    setLoading,
    loading,
    inputs,
    errors,
    handleChange,
    handleSubmit,
  };
}

export const useForgot = () => {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState({});
  const [loading, setLoading] = useState(false);

  const schema = yup.object({
    email: yup.string().email().required(),
  });
  const handleChange = (e) => {
    const name = e.target.email;
    const value = e.target.value;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const data = new FormData(e.target);
    const email = data.get("email");

    schema
      .validate({ email })
      .then((res) => {
        Forgot(email)
          .then((res) => {
            setLoading(false);
            res.status
              ? setSuccess({ success: res.data })
              : setErrors({ error: res.data });
            console.log(errors);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        setErrors((error) => ({ ...error, [err.path]: err.message }));
        console.log(errors);
      });
  };

  return {
    loading,
    inputs,
    errors,
    success,
    handleChange,
    handleSubmit,
  };
};
export const useChangePassword = () => {

  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState({});
  const [loading, setLoading] = useState(false);

  const schema = yup.object({
    password: yup.string().required("Password is required").min(8,'Password is too short - should be 8 chars minimum.'),
    repassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    token: yup.string().required("Token is required.Please check your email")
  });
  const handleChange = (e) => {
    const name = e.target.email;
    const value = e.target.value;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const data = new FormData(e.target);
    const password = data.get("password");
    const repassword = data.get("repassword");
    const token = data.get("token");

    schema
      .validate({ password, repassword, token })
      .then((res) => {
        ChangePassword(password, repassword, token)
          .then((res) => {
            setLoading(false);
            res.status
              ? setSuccess({ success: res.data })
              : setErrors({ error: res.data });

          })
          .catch((err) => {
            setLoading(false);
            setErrors((error) => ({ ...error, [err.path]: err.message }));
          
          });
      })
      .catch((err) => {
        setLoading(false);
        setErrors({error: err });
  
      });
  };

  return {
    loading,
    inputs,
    errors,
    success,
    handleChange,
    handleSubmit,
  };
};

export function useRegister() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const schema = yup.object({
    name: yup.string().required(),
    surname: yup.string().required(),
    tel: yup.number().required("Phone must be a required field").typeError("That doesn't look like a phone number"),
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required").min(8,'Password is too short - should be 8 chars minimum.'),
    repassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    ref: yup.string().nullable(),
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const data = new FormData(e.target);
    const email = data.get("email");
    const tel = data.get("tel");
    const password = data.get("password");
    const repassword = data.get("repassword");
    const name = data.get("name");
    const surname = data.get("surname");
    const ref = data.get("ref");
    console.log(email, password, repassword, name, surname, ref, tel)

    schema
      .validate({ name, surname, email, tel, password, repassword })
      .then((res) => {
        Register(name, surname, email, password, ref, tel)
          .then((res) => {
            setLoading(false);
            if(res.status){
              navigate("/") ;
              window.location.reload();
            } else{
              setErrors({ error: res.data });
            }
          })
          .catch((err) => {
            setLoading(false);
            console.log(err);
          });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        setErrors((error) => ({ ...error, [err.path]: err.message }));
        console.log(errors);
      });
  };

  return {
    loading,
    inputs,
    errors,
    handleChange,
    handleSubmit,
  };
}

export function ErrForbidden() {
  const navigate = useNavigate();
  Logout();
  navigate("/login");
  return;
}
