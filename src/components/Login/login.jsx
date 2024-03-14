import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState();
  const navigate = useNavigate();

  const fnemail = (e) => {
    setemail(e.target.value);
  };
  const fnpassword = (e) => {
    setpassword(e.target.value);
  };

  const FnLogin = (e) => {
    e.preventDefault();

    const payload = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:5000/loginUserProfile", payload)
      .then((response) => {
        if (response.status === 200 && response != null) {
          const { token } = response.data;
          // localStorage.setItem("email",JSON.stringify(email));

          localStorage.setItem("token", token);
          localStorage.setItem("userId", response.data.id);
          navigate("/dashboard/" + response.data.id);
          console.log(response.data, "in axios");
        } else {
          console.error("Something went wrong");
        }
      });
  };
  return (
    <div className="container-fluid p-2 ">
      <div className="wrapper">
        <div className="card">
          <form action="#" className="d-flex flex-column">
            <div className="h3 text-center text-white">Login</div>
            <div className="d-flex align-items-center input-field my-3 mb-4">
              {" "}
              <span className="far fa-user p-2"></span>{" "}
              <input
                onChange={fnemail}
                type="text"
                placeholder="Username or Email"
                required
                className="form-control"
              />{" "}
            </div>
            <div className="d-flex align-items-center input-field mb-4">
              {" "}
              <span className="fas fa-lock p-2"></span>{" "}
              <input
                onChange={fnpassword}
                type="password"
                placeholder="Password"
                required
                className="form-control"
                id="pwd"
              />{" "}
              <button className="btn">
                {" "}
                <span className="fas fa-eye-slash"></span>{" "}
              </button>{" "}
            </div>
            <div className="d-sm-flex align-items-sm-center justify-content-sm-between">
              <div className="d-flex align-items-center">
                {" "}
                <label className="option">
                  {" "}
                  <span className="text-light-white">Remember Me</span>{" "}
                  <input type="checkbox" checked />{" "}
                  <span className="checkmark"></span>{" "}
                </label>{" "}
              </div>
              <div className="mt-sm-0 mt-3">
                <a href="#">Forgot password?</a>
              </div>
            </div>
            <div className="my-3">
              {" "}
              <input
                type="submit"
                value="Login"
                className="btn btn-primary"
                onClick={FnLogin}
              />{" "}
            </div>
            <div className="mb-3">
              {" "}
              <span className="text-light-white">
                Don&apos;t have an account?
              </span>{" "}
              <a href="/register">Sign Up</a>{" "}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
