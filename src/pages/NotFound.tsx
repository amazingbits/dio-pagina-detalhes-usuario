import { Box, Center, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <Center width="100%">
      <Box
        maxWidth="25rem"
        backgroundColor="whiteAlpha.200"
        padding="2rem"
        marginTop="1rem"
        borderRadius="0.6rem"
        textAlign="center"
      >
        <Text fontSize="1.2rem" color="#fff" fontWeight="300">
          Página não encontrada.{" "}
          <NavLink to="/" style={{ fontWeight: "700" }}>
            Clique aqui para retornar à página inicial.
          </NavLink>
        </Text>
      </Box>
    </Center>
  );
};

export default NotFound;
