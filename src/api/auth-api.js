import axios from "axios";
import env from "react-dotenv";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export async function Login(email, password) {
  const response = await axios
    .post(
      env.backend_url + "/api/auth/login",

      {
        email,
        password,
      }
    )
    .then((response) => {
      if (response.data.status) {
        localStorage.setItem("name", response.data.data.name);
        localStorage.setItem("surname", response.data.data.surname);
        cookies.set("accessToken", response.data.accessToken, {
          path: "/",
          domain: "." + window.location.hostname,
        });
        cookies.set("refreshToken", response.data.refreshToken, {
          path: "/",
          domain: "." + window.location.hostname,
        });
        cookies.set("ref_code", response.data.data._id, {
          path: "/",
          domain: "." + window.location.hostname,
        });
        return response.data;
      } else {
        cookies.remove("accessToken", {
          path: "/",
          domain: "." + window.location.hostname,
        });
        cookies.remove("refreshToken", {
          path: "/",
          domain: "." + window.location.hostname,
        });
       
        return response.data;
      }
    })
    .catch((error) => {
      localStorage.setItem("name", "");
      localStorage.setItem("surname", null);
     
      cookies.remove("accessToken", {
        path: "/",
        domain: "." + window.location.hostname,
      });
      cookies.remove("refreshToken", {
        path: "/",
        domain: "." + window.location.hostname,
      });
    
    });

  return response;
}

export async function Forgot(email) {
  const response = await axios
    .post(
      env.backend_url + "/api/auth/forgot-password",

      {
        email,
      }
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return response;
}
export async function ChangePassword(password, repassword, token) {
  const response = await axios
    .post(
      env.backend_url + "/api/auth/reset-password",

      {
        password,
        repassword,
        token,
      }
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return response;
}

export async function Register(name, surname, email, password, ref, tel) {
  const response = await axios
    .post(
      env.backend_url + "/api/auth/register",

      {
        name,
        surname,
        email,
        password,
        ref,
        tel,
      }
    )
    .then((response) => {
      if (response.data.status) {
        localStorage.setItem("name", response.data.data.name);
        localStorage.setItem("surname", response.data.data.surname);
       
        cookies.set("accessToken", response.data.accessToken, {
          path: "/",
          domain: "." + window.location.hostname,
        });
        cookies.set("refreshToken", response.data.refreshToken, {
          path: "/",
          domain: "." + window.location.hostname,
        });
 

        return response.data;
      } else {
        cookies.remove("accessToken", {
          path: "/",
          domain: "." + window.location.hostname,
        });
        cookies.remove("refreshToken", {
          path: "/",
          domain: "." + window.location.hostname,
        });
       
        return response.data;
      }
    })
    .catch((error) => {
      localStorage.setItem("name", "");
      localStorage.setItem("surname", "");
     
      cookies.remove("accessToken", {
        path: "/",
        domain: "." + window.location.hostname,
      });
      cookies.remove("refreshToken", {
        path: "/",
        domain: "." + window.location.hostname,
      });
    

      console.log(error);
    });

  return response;
}

export async function Logout() {
  localStorage.setItem("id", null);
  localStorage.setItem("name", "");
  localStorage.setItem("surname", "");

  cookies.remove("accessToken", {
    path: "/",
    domain: "." + window.location.hostname,
  });
  cookies.remove("refreshToken", {
    path: "/",
    domain: "." + window.location.hostname,
  });

  return window.location.reload();
}
