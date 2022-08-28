import { Box, Button, Flex, HStack, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React,{useContext} from 'react'
import { FcGoogle} from "react-icons/fc";
import styles from './signup.module.css'
import { BsDot} from "react-icons/bs";
import Articles from '../Home/Articles';
import GoogleLogin from 'react-google-login';
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"


const SignUp = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const {signUpData,setSignUpData} = useContext(AuthContext);

  let signUpInfo = [{email:''}];

  const handleChange=(e)=>{
    signUpInfo[0].email = e.target.value;
    setSignUpData(signUpInfo);
  } 

  const gotoLoginForm = ()=>{
    if(signUpData[0].email=== ''){
      toast({ description: 'Email is required' });
      return false;
    }
    navigate('/loginDetails')
  }

  const responseGoogle = response=>{
    console.log(response);
  }

  const failureGoogle = resp=>{
    console.log(resp)
  }

  return (
    <Box >
      <Box>
        <Navbar/>
      </Box>
        <Box className={styles.signUpImg}></Box>
        <Box className={styles.signUpsec}></Box>
       <Flex justifyContent={'end'}> <Box className={styles.bacSignup} ></Box></Flex>
       <Box className={styles.topHeading}>
          <Text lineHeight={1.5} fontWeight={500} fontSize={"45px"}>
          Make your team more productive 
          </Text>
          <Text mt={'-20px'} lineHeight={1.5} fontWeight={500} fontSize={"3rem"} >with Everhour</Text>
        </Box>
        <VStack className={styles.subHead}>
            <Text>Speed, flexibility, ability to integrate with the most popular project management software.</Text>
            <Text>Everhour is a time tracking tool your team will actually use.</Text>
        </VStack>
        <Box className={styles.registrationBox}>
        
            <GoogleLogin
                clientId="1080361766688-pqkci2rb3ancc0kvfskvv7f6l5pmlq79.apps.googleusercontent.com"
                onSuccess={responseGoogle}
                onFailure={failureGoogle}
                cookiePolicy={'single_host_origin'}
                width="320px"
              />
       
        <Text>Or</Text>
        <Flex className={styles.googleBoxI}>
           
            <Input  type='text' onChange={handleChange} placeholder='Work email...' />
        </Flex>
        

        {/* Link to="/loginDetails" */}

        <Button onClick={gotoLoginForm} style={{cursor:'pointer'}}
        as={'a'}
        mt={'30px'}
            background={"#57bb71"}
            h='55px'
            width={"180px"}
            color="white"
            _hover={{ bg: "#57bb71" }}
            borderColor="#ccd0d5"
            fontSize={'1rem'}
            fontWeight='normal'
          >
            Get started
          </Button>
        
        </Box>
        <Flex alignItems={'center'} justifyContent='center'color={'#7c7c7c'}>
            <Text>Free to try </Text>
            <Text><BsDot/></Text>
            <Text>No credit card required   </Text>
            <Text><BsDot/> </Text>
            <Text>1-minute signup </Text>
        </Flex>
        <Box>
            <Articles/>
        </Box>
        <Box>
        <Footer/>
      </Box>
    </Box>
  )
}

export default SignUp