import React from "react";
import { Box, Flex, Button } from "@chakra-ui/react";
import { UserContext } from "../../ApiContext";

const Header = () => {
  const { isAuth, doLogout } = React.useContext(UserContext);

  function handleLogout() {
    const opt = confirm("Tem certeza que deseja sair?");
    if (opt) {
      const logout = doLogout();
      if (logout) {
        window.location.href = "/";
      }
    }
  }

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      display="fixed"
      zIndex={99}
      padding="1rem 2rem"
      backgroundColor="gray.800"
    >
      <Box fontWeight="700" color="whiteAlpha.500">
        DIO Bank
      </Box>
      {isAuth() && (
        <Button size="xs" colorScheme="purple" onClick={handleLogout}>
          Sair
        </Button>
      )}
    </Flex>
  );
};

export default Header;
