import React, { useState, useEffect } from "react";
import axios from "axios";

// const Joi = require("@hapi/joi");
// const schema = {};
// module.exports = {schema}

export const Register = () => {
  const [error, setError] = useState(null);
  const [userName, setuserName] = useState();
  const [email, setemail] = useState();
  const [rollNo, setrollNo] = useState();
  const [address, setaddress] = useState();
  const [dateofbirth, setdateofbirth] = useState();
  const [schoolName, setschoolName] = useState();
  const [schaddress, setschaddress] = useState();
  const [password, setpassword] = useState();
  const [startDate, setStartDate] = useState(new Date());

  //   schema = {
  //     username: Joi.string().required().label("UserName"),
  //     email: Joi.string().required().email({ minDomainAtoms: 2
  //         }).label("email"),
  //     password: Joi.string().required().min(5).label("Password")
  // };

  // const  validateUsernamePropery = (username, value, schema) => {
  //       const obj = {
  //           [username]: value
  //       };
  //       const fieldSchema = {
  //           [username]: schema[username]
  //       };
  //       //return result
  //       const result = Joi.validate(obj, fieldSchema);
  // result.error === null -> valid
  // }
  // console.log(e.target.value)

  // const fnemail=(e)=>
  // {
  //   setemail(e.target.value)
  // }
  // const fnrollNo=(e)=>
  // {
  //   setrollNo(e.target.value)
  // }
  // const fnaddress=(e)=>{
  //   setaddress(e.target.value)
  // }
  // const fndob=(e)=>{
  //   setdateofbirth(e.target.value)

  // }
  // const fnschname=(e)=>{
  //   setschoolName(e.target.value)

  // }
  // const fnschaddress=(e)=>{
  //   setschaddress(e.target.value)

  // }
  // const fnpassword=(e)=>
  // {
  //   setpassword(e.target.value)
  // }

  const fnregHandler = (e) => {
    const payload = {
      fullName: userName,
      email: email,
      rollNo: rollNo,
      address: address,
      dateOfBirth: dateofbirth,
      schoolName: schoolName,
      schoolAddress: schaddress,
      password: password,
    };

    axios
      .post("http://localhost:5000/registerUserProfile", payload)
      .then((response) => {
        if (response.status === 200 && response != null) {
          console.log(response.data.data, "in axios");
        } else {
          console.error("Something went wrong");
        }
      });
  };

  return (
    <div className="container-fluid p-2">
      <div className="">
        <div className="rounded d-flex justify-content-center ">
          <div className="col-md-4 col-sm-12 shadow-lg p-5 bg-light">
            <div className="text-center">
              <h5 className="text-primary">Create Account</h5>
            </div>
            <div className="p-4">
              <form action="">
                <div className="input-group mb-3">
                  <span
                    className="far fa-user p-2"
                    style={{ color: "blue" }}
                  ></span>
                  <span className="input-group-text bg-primary">
                    <i className="bi bi-person-plus-fill text-white"></i>
                  </span>

                  <input
                    onChange={(e) => {
                      setuserName(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    required
                    id="name"
                    autoComplete="on"
                  />
                </div>
                <div className="input-group mb-3">
                  <span
                    className="far fa-envelope-open p-2"
                    style={{ color: "blue" }}
                  ></span>

                  <span className="input-group-text bg-primary">
                    <i className="bi bi-envelope text-white"></i>
                  </span>
                  <input
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    id="email"
                    autoComplete="on"
                    required
                  />
                </div>
                <div className="input-group mb-3">
                  <span
                    className="far fa-address-card p-2"
                    style={{ color: "blue" }}
                  ></span>
                  <span className="input-group-text bg-primary">
                    <i className="bi bi-envelope text-white"></i>
                  </span>
                  <input
                    onChange={(e) => {
                      setrollNo(e.target.value);
                    }}
                    type="no"
                    className="form-control"
                    placeholder="Roll No"
                    id="roll"
                    required
                    autoComplete="on"
                  />
                </div>
                <div className="input-group mb-3">
                  <span
                    className="fas fa-address-book p-2"
                    style={{ color: "blue" }}
                  ></span>

                  <span className="input-group-text bg-primary">
                    <i className="bi bi-envelope text-white"></i>
                  </span>
                  <input
                    onChange={(e) => {
                      setaddress(e.target.value);
                    }}
                    type="textarea"
                    className="form-control"
                    placeholder="Address"
                    id="address"
                    autoComplete="on"
                    required
                  />
                </div>
                <div className="input-group mb-3">
                  <span
                    className="far fa-calendar p-2"
                    style={{ color: "blue" }}
                  ></span>
                  <span className="input-group-text bg-primary bi bi-envelope text-white">
                    {/* <i className="bi bi-envelope text-white"></i> */}
                  </span>

                  <input
                    onChange={(e) => {
                      setdateofbirth(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                    placeholder="DOB"
                    required
                    id="dob"
                    autoComplete="on"
                  />
                </div>
                <div className="input-group mb-3">
                  <span
                    className="fas fa-graduation-cap p-2"
                    style={{ color: "blue" }}
                  ></span>
                  <span className="input-group-text bg-primary">
                    <i className="bi bi-envelope text-white"></i>
                  </span>
                  <input
                    onChange={(e) => {
                      setschoolName(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                    placeholder="School Name"
                    autoComplete="on"
                    id="schoolname"
                    required
                  />
                </div>
                <div className="input-group mb-3">
                  <span
                    className="fas fa-address-book p-2"
                    style={{ color: "blue" }}
                  ></span>
                  {/* <FontAwesomeIcon className ='font-awesome' icon={FcBusinessman} /> */}

                  <span className="input-group-text bg-primary">
                    <i className="bi bi-envelope text-white"></i>
                  </span>
                  <input
                    onChange={(e) => {
                      setschaddress(e.target.value);
                    }}
                    type="textarea"
                    className="form-control"
                    placeholder="School Address"
                    id="school address"
                    autoComplete="on"
                  />
                </div>
                <div className="input-group mb-3">
                  <span
                    className="fas fa-key p-2"
                    style={{ color: "blue" }}
                  ></span>
                  <span className="input-group-text bg-primary">
                    <i className="bi bi-key-fill text-white"></i>
                  </span>
                  <input
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                    type="password"
                    className="form-control"
                    placeholder="password"
                    id="pwd"
                    required
                  />
                </div>
                <div className="d-grid col-12 mx-auto">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={fnregHandler}
                    color="success"
                  >
                    <span></span> Sign up
                  </button>
                </div>
                <p className="text-center mt-3">
                  Already have an account?
                  <span className="text-primary">
                    {" "}
                    <a href="/"> Sign in</a>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
