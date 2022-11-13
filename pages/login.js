import axios from "axios";
import Cookies from "js-cookie";
import Router from "next/router";
import { useState } from "react";
const jwt = require("jsonwebtoken");

const JWT_SECRET =
  "Fd0HL2OKmRQ4Qpu7DQCRNc5aPZWSPERaX1TI1M8N31AXM/dNl/BTuTV4Zcl6JkRQDJbGnQEsEjh+I4o97uTKod/Gq8UyRIYXREoQkb/DEV6n9/P6Q0QWDYVLHYF/hKhqh5E9KIV6DyimwD+Q859gx0y9UptAXS671TUfOPQgcZPoQFPbIl2tokBvKKt+kIrmCMQ3cMEvwd+0f/vU7sadabsMc2QME7SSJEE2hbVc4u8cLs9Il7lZRC+L56mN/2TfXKXnZrHaVvk4bqBBSyw5Jb3HAwWv/pSxCZudcHDdHM4IBWzZIPV4ylDb8t/F9CIRKubjpKTJy4zsEzYHM3syXA==";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/login", { sid: id, password });

    if (res.status === 200) {
      console.log("All set boss");
      const maxAge = 3 * 60 * 60;
      const token = jwt.sign({ id, password }, JWT_SECRET);
      Cookies.set("token", token, { expires: maxAge });
      Router.push("/");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="id">Student ID:</label>
        <input
          type="text"
          id="id"
          name="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Student Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
