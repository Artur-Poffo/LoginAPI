import React from "react";

import { Container, Image } from "./styles"
import SignUpForm from "../SignUpForm";

export default function SighUpSection() {
  return (
    <Container>
      <SignUpForm />

      <Image src={"https://images.unsplash.com/photo-1628527304948-06157ee3c8a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} />
    </Container>
  )
}