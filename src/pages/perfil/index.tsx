import {
  AuthAction,
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from "next-firebase-auth";
import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";

import Image from "next/image";

const Perfil = () => {
  const AuthUser = useAuthUser();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {AuthUser.photoURL && (
        <Image
          alt="Profile picture"
          width={125}
          height={125}
          loader={() => `${AuthUser.photoURL}?w=125`}
          src={AuthUser.photoURL}
        />
      )}

      <p>Tu email es {AuthUser.email ? AuthUser.email : "unknown"}.</p>

      {AuthUser.signOut && (
        <Box sx={{ marginTop: "36px" }}>
          <Button variant="contained" onClick={AuthUser.signOut}>
            Cerrar Sesión
          </Button>
        </Box>
      )}
    </Box>
  );
};

export const getServerSideProps = withAuthUserTokenSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
  // authPageURL: "/login/",
})();

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(Perfil);
