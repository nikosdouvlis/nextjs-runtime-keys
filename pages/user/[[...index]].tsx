import { UserProfile } from '@clerk/nextjs';
import type { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import { getAuth } from '@clerk/nextjs/server';
import {secrets} from "../../secrets";

export const getServerSideProps: GetServerSideProps = async context => {
  const auth = getAuth(context.req, {apiKey: secrets.CLERK_API_KEY});
  console.log('getServerSideProps', auth);
  console.log('getToken', await auth.getToken({ template: 'hasura1' }));
  return { props: {} };
};

const UserProfilePage: NextPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <UserProfile />
    </div>
  );
};

export default UserProfilePage;

// drivepoint.gr/user
//   -> middleware -> clerk auth flow -> middleware handler -> inject headers
//         -> /user page ->
//               -> getServerSideProps
//                            -> getAuth
//                                       -> render page
