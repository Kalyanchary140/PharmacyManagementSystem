import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Foot from "./Foot";
import Tool from "./Tools"
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Tooltip,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import logo from "./doctorlogo.png"

const AddDoctor = () => {
  const history = useHistory();
  const [state, setState] = useState({
    UserName: "",
    Email: "",
    Contact: "",
    UserAddress: "",
    UserPassword: "",
  })
  const change = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    })
  }
  const submit = () => {


    if (state.UserName && state.Email && state.Contact && state.Contact && state.UserPassword) {
      axios.post("http://localhost:1552/api/Auth/Register", {
        UserName: state.UserName,
        Email: state.Email,
        UserAddress: state.UserAddress,
        Contact: state.Contact,
        UserPassword: state.UserPassword
      })
      history.push("/login")
    }
    else {
      if (!state.UserName) {
        alert("please enter name")
      }
      else if (!state.Email) {
        alert("please enter email")
      }
      else if (!state.Contact) {
        alert("please enter contact number")
      }
      else if (!state.UserAddress) {
        alert("please enter address")
      }
      else if (!state.UserPassword) {
        alert("please enter the password")
      }
    }

    console.log(state.UserName, state.Email, state.Contact, state.UserAddress, state.UserPassword);

  }
  const paperStyle = { padding: 20, height: '75vh', width: 400, margin: "20px auto" }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const btnstyle = { margin: '8px 0' }
  return (

    <div class="bg_image">
      <div class="float-container">
        <Tool />
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <LockOutlinedIcon />
              </Avatar>
              <h2>SignUp</h2>
            </Grid>

            <TextField
              label="Name"
              placeholder="Name"
              fullWidth
              name="UserName" onChange={change}
              required
            />

            <TextField
              label="Email"
              placeholder="Email"
              fullWidth
              name="Email" onChange={change}
              required
            />
            <TextField
              label="Contact"
              placeholder="Contact"
              fullWidth
              required
              name="Contact" onChange={change}
            />

            <TextField label="Address"
              placeholder="Address"
              fullWidth
              required
              name="UserAddress"
              onChange={change}

            />
            <TextField
              label="Password"
              placeholder="Password"
              fullWidth
              type='password'
              required
              name="UserPassword"
              onChange={change}
            />

            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnstyle}
              fullWidth
              onClick={submit}
            >
              Submit
            </Button>
            <img src={logo} alt="" className="doctor" />
          </Paper>
        </Grid>
        <Foot />
      </div>
    </div>

  );
}

export default AddDoctor;
