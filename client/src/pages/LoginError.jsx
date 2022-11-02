import React from "react";

import ResultSection from "../components/ResultSection"

export default function LoginError() {
  return (
    <>
      <ResultSection msg={"Email or Password Incorrect :("} msgReturn={"Return to Login Page"} returnTo={"/"} />
    </>
  )
}