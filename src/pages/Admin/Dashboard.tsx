import * as React from 'react';
import {useAuth0, withAuthenticationRequired} from "@auth0/auth0-react";
import {CenterColumn} from "@atoms/CenterColumn";
import {Loading} from '@atoms/Loading';

export const Dashboard = withAuthenticationRequired(() => {
  const {user} = useAuth0();
  console.log(user);
  return (
    <CenterColumn>
      <h1>Dashboard</h1>
    </CenterColumn>
  );
}, {
  onRedirecting: () => {<Loading />},
});
