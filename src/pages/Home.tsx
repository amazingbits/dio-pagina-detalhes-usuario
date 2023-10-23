import React from "react";
import {
  Container,
  FormControl,
  Input,
  Button,
  Box,
  Center,
  Text,
  FormErrorMessage,
} from "@chakra-ui/react";
import { UserContext } from "../../ApiContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const LoginFormSchema = yup.object().shape({
  email: yup
    .string()
    .required("Este campo é obrigatório")
    .email("Insira um e-mail válido"),
  password: yup
    .string()
    .required("Este campo é obrigatório")
    .min(4, "Insira pelo menos 4 caracteres"),
});

const Home = () => {
  const navigate = useNavigate();
  const { loading, doLogin } = React.useContext(UserContext);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(LoginFormSchema),
    mode: "all",
  });

  const handleLoginForm = async (data: { email: string; password: string }) => {
    if (data) {
      const login = await doLogin(data.email, data.password);
      if (!login) {
        alert("Usuário e/ou senha não conferem");
        return;
      }
      navigate(`/account/${window.localStorage.getItem("userId")}`);
    }
  };

  return (
    <Container maxWidth="2xl">
      <Center>
        <Box
          maxW="sm"
          padding="2rem"
          borderRadius="0.5rem"
          backgroundColor="whiteAlpha.100"
          margin="1rem"
        >
          <Text
            fontWeight="700"
            textTransform="uppercase"
            color="white"
            marginBottom="1rem"
          >
            Efetue o login
          </Text>
          <form
            onSubmit={handleSubmit(async (data) => await handleLoginForm(data))}
          >
            <FormControl
              marginBottom="0.6rem"
              isInvalid={errors?.email ? true : false}
            >
              <Input
                placeholder="E-mail"
                color="whiteAlpha.600"
                fontWeight="700"
                {...register("email")}
              />
              {errors?.email && (
                <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              marginBottom="0.6rem"
              isInvalid={errors?.password ? true : false}
            >
              <Input
                placeholder="Senha"
                type="password"
                color="whiteAlpha.600"
                fontWeight="700"
                {...register("password")}
              />
              {errors?.password && (
                <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
              )}
            </FormControl>
            <Button
              type="submit"
              size="sm"
              width="100%"
              marginTop="0.6rem"
              backgroundColor="gray.700"
              color="whiteAlpha.700"
              _hover={{
                backgroundColor: "gray.100",
                color: "gray.600",
              }}
              isDisabled={!isValid}
              isLoading={loading}
            >
              Fazer login
            </Button>
          </form>
        </Box>
      </Center>
    </Container>
  );
};

export default Home;
