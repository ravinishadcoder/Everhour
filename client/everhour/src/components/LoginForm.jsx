import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { useContext } from "react";
import { useState } from "react";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import styles from "../pages/Login/signup.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LoginForm() {
  const toast = useToast();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});

  const handleClick = () => setShow(!show);
  const { signUpData, updateSignUpInfo } = useContext(AuthContext);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    const payload = JSON.stringify(data);
    fetch("https://efficiousever.herokuapp.com/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log);
    toast({
      status: "success",
      title: "SignIn Successful",
      position: "top",
      isClosable: true,
    });
    navigate("/login");
  };

  return (
    <>
      <Box>
        <Navbar />
      </Box>
      <Flex
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} width="30rem" maxW={"lg"} py={12} px={6}>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Text fontSize="22px" lineHeight="30px" fontWeight={"600"}>
              Welcome to EverHour
            </Text>
            <Text mt={"5px"} className={styles.subHead} fontSize="14px">
              Add your info to make collaborating easy
            </Text>
            <Stack spacing={4} mt="20px">
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" onChange={handleChange} name="name" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" onChange={handleChange} name="email" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Job Title</FormLabel>
                <Input
                  type="text"
                  placeholder={"e.g. Co-Founder/CEO"}
                  name="jobtitle"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Phone</FormLabel>
                <InputGroup>
                  <InputLeftAddon children="+91" />
                  <Input
                    type="number"
                    placeholder="phone number"
                    onChange={handleChange}
                    name="phone"
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>password</FormLabel>
                <InputGroup size="md">
                  <Input
                    onChange={handleChange}
                    name="password"
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={() => setShow(!show)}
                    >
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link to={"./projectDetails"} color={"blue.400"}>
                    Forgot password?
                  </Link>
                </Stack>

                <Button
                  onClick={handleSignIn}
                  bg={"#24be6a"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  continue
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Box>
        <Footer />
      </Box>
    </>
  );
}
