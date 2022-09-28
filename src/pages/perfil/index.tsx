import React from "react";
import { AuthAction, useAuthUser, withAuthUser } from "next-firebase-auth";
import { Box, Button } from "@mui/material";

import Image from "next/image";
import styles from "./styles.module.css";

const Perfil = () => {
  const AuthUser = useAuthUser();

  return (
    <Box className={styles.root}>
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
        <Box className={styles.buttonContainer}>
          <Button variant="contained" onClick={AuthUser.signOut}>
            Cerrar Sesión
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(Perfil);
