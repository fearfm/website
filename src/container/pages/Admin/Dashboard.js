import React from "react"
import { withAuthenticationRequired } from "@auth0/auth0-react"

export const Dashboard = withAuthenticationRequired(() => {
  return <>todo</>
})
