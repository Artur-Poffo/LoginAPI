import React from "react";

import ResultSection from "../components/ResultSection"

export default function NewUserError() {
  return (
    <>
      <ResultSection msg={"Account Created"} msgReturn={"Return to Login Page"} returnTo={"/"} />
    </>
  )
}