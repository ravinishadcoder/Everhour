import { Box, Button, Flex, HStack, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FcGoogle} from "react-icons/fc";
import styles from './signup.module.css'
import { BsDot} from "react-icons/bs";
import Articles from '../Home/Articles';
const SignUp = () => {
  return (
    <Box >
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
        <Flex className={styles.googleBox}>
            <Text className={styles.icon}><FcGoogle  /></Text>
            <Text fontSize={'1rem'}>Sign up Google</Text>
        </Flex>
        <Text>Or</Text>
        <Flex className={styles.googleBoxI}>
           
            <Input type='text' placeholder='Work email...' />
        </Flex>
        
        <Button
        as={'a'}
        mt={'30px'}
            background={"#57bb71"}
            h='55px'
            width={"180px"}
            color="white"
            _hover={{ bg: "#57bb71" }}
            href={'./loginDetails'}
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
    </Box>
  )
}

export default SignUp