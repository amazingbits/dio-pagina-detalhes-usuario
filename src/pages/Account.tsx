import React from "react";
import { UserContext } from "../../ApiContext";
import {
  Container,
  Flex,
  Card,
  CardHeader,
  Text,
  CardBody,
} from "@chakra-ui/react";

const Account = () => {
  const { info } = React.useContext(UserContext);

  return (
    <Container>
      <Flex justifyContent="space-between" gap="1rem">
        <Card width="100%" backgroundColor="whiteAlpha.200">
          <CardHeader>
            <Text color="white" fontWeight="700" fontSize="1rem">
              Nome de usuário
            </Text>
          </CardHeader>
          <CardBody
            textAlign="right"
            fontWeight="300"
            fontSize="1.2rem"
            color="white"
          >
            <Text>{info.name}</Text>
          </CardBody>
        </Card>

        <Card width="100%" backgroundColor="whiteAlpha.200">
          <CardHeader>
            <Text color="white" fontWeight="700" fontSize="1rem">
              Saldo
            </Text>
          </CardHeader>
          <CardBody
            textAlign="right"
            fontWeight="300"
            fontSize="1.2rem"
            color="white"
          >
            <Text>
              {info.balance.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </Text>
          </CardBody>
        </Card>
      </Flex>
    </Container>
  );
};

export default Account;
