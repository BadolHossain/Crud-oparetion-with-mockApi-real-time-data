import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Create.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const UserName = (e) => {
    e.target.value(setName);
    e.target.value(setEmail);
    console.log(email);
  };
  const history = useNavigate()
  const header = { "Access-Control-allow-Origin": "*" };
  const handleClick = (e) => {
    e.preventDefault();
    console.log("clickd");
    axios.post("https://62f899fe3eab3503d1d873c7.mockapi.io/Crud", {
      name: name,
      email: email,
      header,
    });
    history('/read')
  };
  return (
    <div className="middel">
      <Form onSubmit={UserName}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>{" "}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleClick}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Create;
