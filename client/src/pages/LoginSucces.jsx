import React from "react";

import ResultSection from "../components/ResultSection"

export default function LoginSucces() {
  return (
    <>
      <ResultSection msg={"Logged With Success!!!"} msgReturn={"Return to Login Page"} returnTo={"/"}  />
    </>
  )
}