import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Box } from "@material-ui/core";
import "./Form.css";

const Forms = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const changeInput1 = (e) => {
    setFirstName(e.target.value);
  };
  const changeInput2 = (e) => {
    setLastName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(firstName);
  };
  return (
    <div>
      <strong>Full Name: </strong>
      <span className={`default ${firstName.length < 5 ? "error" : "success"}`}>
        {firstName}
      </span>
      &nbsp;&nbsp;
      <span className={`default ${lastName.length < 5 ? "error" : "success"}`}>
        {lastName}
      </span>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={changeInput1}
          value={firstName}
          name=""
          placeholder="First Name"
        />
        <br />
        <br />
        <input
          type="text"
          onChange={changeInput2}
          name=""
          placeholder="Last Name"
        />
        <br />
        <br />
        <button>Submit</button>
        <Stack spacing={2} my={2} direction="row">
          <Button variant="outlined">Contained</Button>
        </Stack>
      </form>
      <Box component="span" m={1}>
        Hello
      </Box>
    </div>
  );
};

export default Forms;
