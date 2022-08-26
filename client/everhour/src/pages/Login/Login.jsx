import { Box, Button, Flex, Input, Stack, Text, useToast, VStack } from "@chakra-ui/react";
import React, { useContext, useRef } from "react";
import styles from "./signup.module.css";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const toast = useToast()
  const {signUpData,handleLogin} = useContext(AuthContext)
  const passref = useRef();
const hadleLogin=()=>{
  let password = passref.current.value;
  let userPassord = signUpData.some((el)=>el.password==password)
   if(userPassord){
    handleLogin()
   }
    else{
      toast({ description: 'Incorrect password' })
    }
  
  
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
            <Input placeholder="Work email..." />
          </Flex>
          <Flex className={styles.googleBoxL}>
            <Input placeholder='Passoword...'ref={passref} type='password'/>
          </Flex>

          <Box >
          <Button
           onClick={hadleLogin}
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
