import React from "react";

import { Container, Button } from "./styles"
import { Link } from "react-router-dom"

export default function SignUpForm() {
  return (
    <Container>
      <form method="POST" action="/api/NewUser">
        <h2>Create a New Account:</h2>

        <div>
          <label htmlFor="email">Email Address</label>
          <input required type="email" name="email" id="email" />
          <label htmlFor="password">Password</label>
          <input required type="password" name="password" id="password" />
        </div>

        <Button type="submit" >Sign Up</Button>
        <br />
        <Link to={"/"} >Login</Link>
      </form>
    </Container>
  )
}