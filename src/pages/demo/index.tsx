import {
  AuthAction,
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from "next-firebase-auth";

// ./pages/demo
import React from "react";

const Demo = () => {
  const AuthUser = useAuthUser();
  return (
    <div>
      <p>Your email is {AuthUser.email ? AuthUser.email : "unknown"}.</p>
    </div>
  );
};

// Note that this is a higher-order function.
export const getServerSideProps = withAuthUserTokenSSR()();
// export const getServerSideProps = withAuthUserTokenSSR({
//   whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
// })(async ({ AuthUser }) => {
//   // Optionally, get other props.
//   const token = await AuthUser.getIdToken();
//   const response = await fetch("/api/login", {
//     method: "GET",
//     headers: {
//       Authorization: token,
//     },
//   });
//   const data = await response.json();
//   return {
//     props: {
//       thing: data.thing,
//     },
//   };
// });

// export default withAuthUser()(Demo);
export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: "/login/",
})(Demo);
