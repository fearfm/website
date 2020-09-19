import React from "react"
import { withAuthenticationRequired } from "@auth0/auth0-react"

export const Add = withAuthenticationRequired(() => {
  return <>Add new set</>
})
