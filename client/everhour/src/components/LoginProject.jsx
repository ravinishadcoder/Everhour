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
  import { useToast } from '@chakra-ui/react'
  import { useContext } from "react";
  import { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { AuthContext } from "../context/AuthContext";
  import styles from '../pages/Login/signup.module.css'
  export default function LoginProject() {
    const [data,setData]=useState({})
    const navigate  = useNavigate();

      
   const handleChange = (e)=>{
    let {name, value} = e.target
    setData({...data, [name]: value});
       
   }

   const createForm = (e)=>{
    e.preventDefault();
    console.log(data);

   }

//    const moveToNxt => () { navigate(“/”) }


    return (
      <Flex
        align={"center"}
        
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} width='30rem' maxW={"lg"} py={12} px={6}>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Text fontSize="22px" lineHeight="30px" fontWeight={"600"}>
              Create first project
            </Text>
            <Text mt={'5px'} className={styles.subHead} fontSize='14px'>In Everhour , your team time spent on concrete  tasks. This keeps time organized and easy to analyze</Text>
            <Stack spacing={4} mt='20px'>
                
              <FormControl isRequired>
                <FormLabel>Project</FormLabel>
                <Input type="text" onChange={handleChange} name="name" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>client</FormLabel>
                <Input type="text" onChange={handleChange} name="client" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Tasks</FormLabel>
                <Input type="text" onChange={handleChange} name="Tasks" />
               
              </FormControl>
              
              
             
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                 
                </Stack>
                <Button
                // onClick={ moveToNxt() }

                onClick={createForm}
                  bg={"#24be6a"}
                  color={"white"}
                  
                  _hover={{

                    bg: "blue.500",
                  }}
                >
                  create
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
  