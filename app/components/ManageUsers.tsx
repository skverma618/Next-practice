import React, { useState } from "react";
import axios from "axios";

const GetUsers = () => {
  const [users, setUsers] = useState([]);

  const handleSubmit = async () => {
    const response = await axios.post("http://localhost:3000/users/create");
  };

  return (
    <>
      <input type="" />
      <button onClick={handleSubmit} />
    </>
  );
};

export default GetUsers;
