import React from "react";

import ResultSection from "../components/ResultSection"

export default function NewUserError() {
  return (
    <>
      <ResultSection msg={"Email Already in use"} msgReturn={"Return to Sign Up Page"} returnTo={"/NewUser"} />
    </>
  )
}