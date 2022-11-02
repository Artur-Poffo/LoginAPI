import React from "react";

import { Container, Button } from "./styles"
import { Link } from "react-router-dom"

export default function LoginForm() {
  return (
    <>
      <Container>
        <form method="POST" action="/api/Login">
          <h2>Log in to your account:</h2>

          <div>
            <label htmlFor="email">Email Address</label>
            <input required type="email" name="email" id="email" />
            <label htmlFor="password">Password</label>
            <input required type="password" name="password" id="password" />
          </div>

          <Button type="submit" >Log In</Button>
          <br />
          <Link to={"/NewUser"} >Sign Up</Link>
        </form>
      </Container>
    </>
  )
}