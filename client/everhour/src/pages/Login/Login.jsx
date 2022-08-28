import { Box, Button, Flex, Input, Stack, Text, useToast, VStack } from "@chakra-ui/react";
import React, { useContext, useRef } from "react";
import styles from "./signup.module.css";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { then } from "../../../../../server/db";

const Login = () => {
  const toast = useToast()
  const {signUpData,handleLogin} = useContext(AuthContext)
  const passref = useRef();
  const [user, setUser] =  useState({});
  const Navigate = useNavigate();

const handleSubmit = () => {
  const payload = JSON.stringify(user)
  fetch("https://efficiousever.herokuapp.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }, 
    body: payload
  })
  .then((res) => res.json())
  .then((res) => {
    if(res.token) {
      localStorage.setItem("userid", JSON.stringify(res._id))
      Navigate("/special");
    }
    else {
      console.log(res.message);
      toast({
        position: "top",
        title: `Wrong Credentials`,
        isClosable: true,
        status: "error"
      })
    }
  })
  .catch((err) => console.log(err));


}
const handleChange = (e) => {
  const {name, value} = e.target;
  setUser({
    ...user,
    [name] : value,
  })
}
  return (
    <Box>
      <Box className={styles.topHeading}>
        <Text lineHeight={1.5} fontWeight={500} fontSize={"45px"}>
          Login in to Everhour
        </Text>
      </Box>
      <VStack className={styles.subHead}>
        <Text >
          Using the{" "}
          <Text as={"span"} borderBottom="1px dashed #b4b4b4">
            former version
          </Text>{" "}
          of Everhour? Please{" "}
          <Text as={"a"} className={styles.linkText}>
            login here
          </Text>
        </Text>
      </VStack>
      <Flex className={styles.loginBox}>
        <VStack gap={'10px'} color='#7c7c7c'>
          <Flex className={styles.googleBox}>
            <Text className={styles.icon}>
              <FcGoogle />
            </Text>
            <Text fontSize={"1rem"}>Sign up Google</Text>
          </Flex>
          <Text>Or</Text>
          <Flex className={styles.googleBoxL}>
            <Input placeholder="Work email..." onChange={handleChange} name="email"  />
          </Flex>
          <Flex className={styles.googleBoxL}>
            <Input placeholder='Password...'ref={passref} type='password' onChange={handleChange} name="password" />
          </Flex>

          <Box >
          <Button
          type="submit"
           onClick={handleSubmit}
           background={"#57bb71"}
           h="55px"
           width={"180px"}
           color="white"
           _hover={{ bg: "#57bb71" }}
           borderColor="#ccd0d5"
           fontSize={"1rem"}
           fontWeight="normal"
         >
           Log in
         </Button>
          </Box>
          <Text textDecoration={'underline'} className={styles.newsSubHead}>Login with SSO</Text>
          <Text textDecoration={'underline'} className={styles.newsSubHead}>Reset password</Text>
        </VStack>
        <Stack gap={'10px'}>
          <Text textAlign={'start'} color={'red'}>NEWS</Text>
          <Box>
            <Text className={styles.newsHead}>Integration with Todoist</Text>
            <Text  className={styles.newsSubHead}>Everhour now integrates with Todoist!<Text as={'span'} className={styles.linkText}>Learn more</Text> </Text>
          </Box>
          <Box>
            <Text className={styles.newsHead}>Integration with Todoist</Text>
            <Text className={styles.newsSubHead}>Everhour now integrates with Todoist!<Text as={'span'} className={styles.linkText}>Learn more</Text> </Text>
          </Box>
          <Box>
            <Text className={styles.newsHead}>Single Sign-On</Text>
            <Text className={styles.newsSubHead}>
              Use single sign-on (SSO) to access Everhour for your projects and
              timesheets. <Text as={'span'} className={styles.linkText}>Learn more</Text>
            </Text>
          </Box>
        </Stack>
      </Flex>
      <Stack mt={'100px'}>
        <Box>
            <Text lineHeight={1.5} fontWeight={500} fontSize={"45px"}>New to Everhour?</Text>
            <Text className={styles.subHead} mt='0px'>Try Everhour for free and see if it works for your business</Text>
        </Box>
      </Stack>
      <Flex m='auto' mt={'30px'}
             width={'470px'}  gap={'10px'} >
             <Input type='text' placeholder='Work email...' h={'48px'}/>
             <Button
            background={"#57bb71"}
            h="50px"
            width={"180px"}
            color="white"
            _hover={{ bg: "#57bb71" }}
            borderColor="#ccd0d5"
            fontSize={"1rem"}
            fontWeight="normal"
          >
            Try free
          </Button>
             </Flex>  
             <Flex justifyContent={'center'} alignItems='center' className={styles.icon} mt={'10px'}>
                <Text ><FcGoogle cl/></Text>
                <Text fontSize={'1.25rem'} color='#767676' >Or sign up with Google Account</Text>
            </Flex>
    </Box>
  );
};

export default Login;
