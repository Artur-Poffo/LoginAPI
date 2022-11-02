import React from "react";

import { Container } from "./styles"
import { Link } from "react-router-dom"

export default function ResultSection(props) {
  return (
    <Container>
      <h1>{props.msg}</h1>
      <Link to={props.returnTo} >{props.msgReturn}</Link>
    </Container>
  )
}