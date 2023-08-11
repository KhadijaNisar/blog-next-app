import { useState } from "react";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { signIn } from "next-auth/react";

const register = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/register", {
        ...registerData,
      });

      res && alert("user has been registered");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="formr">
        <form className="registerForm" onSubmit={onSubmitHandler}>
          <h1>Register</h1>

          <div className="formControlcontent">
            <label className="registerFormLabel">User Name</label>
            <div className="inputControl">
              <input
                type="text"
                onChange={onChange}
                placeholder="Enter your Username"
                name="name"
                id="name"
                value={registerData.name}
              />
            </div>
            <label className="registerFormLabel">E-mail</label>
            <div className="inputControl">
              <input
                type="email"
                onChange={onChange}
                placeholder="Enter your Email"
                name="email"
                id="email"
                value={registerData.email}
              />
            </div>
            <label className="registerFormLabel">Password</label>
            <div className="inputControl">
              <input
                type="text"
                onChange={onChange}
                placeholder="Enter your Password"
                name="password"
                id="password"
                value={registerData.password}
              />
            </div>
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              Or Sign Up With
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FcGoogle
                  style={{
                    fontSize: "xx-large",
                    marginTop: "10px",
                    marginRight: "15px",
                  }}
                  onClick={() => {
                    signIn("google");
                  }}
                ></FcGoogle>
                <BsGithub
                  style={{ fontSize: "xx-large", marginTop: "10px" }}
                  onClick={() => {
                    signIn("github");
                  }}
                ></BsGithub>
              </div>
            </div>
            <div className="btnS">
              <button type="submit" className="btnSub">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default register;
