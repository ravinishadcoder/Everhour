import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import styles from "./Project.module.css";
import { FiChevronDown } from "react-icons/fi";
import { MdMonetizationOn } from "react-icons/md";
const ProjectTime = () => {
  return (
    <Box>
      <Flex className={styles.mainProject}>
        <Text fontSize={"24px"} lineHeight="32px">
          Project
        </Text>
        <Button bg={"#24be6a"} borderRadius="4px" color="white">
          Create Project
        </Button>
      </Flex>
      <Flex className={styles.subProject}>
        <Box>
          <Checkbox size="sm" colorScheme="red">
            Select all
          </Checkbox>
        </Box>
        <Box>
          <HStack>
            <Box className={styles.commonBox}>
              <Box bg="white">
                <Text as="small" color='#a2aab1'>GROUP BY:</Text>
                <Text>None</Text>
              </Box>
              <FiChevronDown />
            </Box>
            <Box className={styles.commonBox}>
              <Box bg="white">
                <Text as="small" color='#a2aab1'>FILTER:</Text>
                <Text>Active</Text>
              </Box>
              <FiChevronDown />
            </Box>
            <Box
              width={"250px"}
              height="45px"
              bg="white"
             
            >
              <Input placeholder="search projects" border="none" />
            </Box>
          </HStack>
        </Box>
      </Flex>
      <Flex justifyContent='space-between' fontSize='12px'mt='10px' >
        <Box ml='20px'>
          <Text>NAME</Text>
        </Box>
        <Box width='600px'>
          <HStack justifyContent='space-around'>
            <Flex  gap='30px'>
              <Text color='#a2aab1'>MEMBERS</Text>
              <Text color='#a2aab1'>BUDGET</Text>
            </Flex>
            <Box color='#a2aab1'>
          BILLING
            </Box>
            
          </HStack>
        </Box>
      </Flex>
      <Divider mt='10px' />
      <Flex justifyContent='space-between' mt='10px' >
        <Box ml='20px'>
          {/* <everhourIncon/> */}
         <HStack>
         <img src="https://app.everhour.com/assets/img/everhour_48.svg" height={'20px'} width={'20px'} />
          <Text>Everhour</Text>
         </HStack>
        </Box>
        <Box width='550px'>
          <HStack justifyContent='space-around'>
            <Flex  gap='30px'>
              <Text color='#a2aab1'>R</Text>
              <Text color='#a2aab1'>No budget</Text>
            </Flex>
            <Box color='#a2aab1'>
            <MdMonetizationOn/>
            </Box>
            
          </HStack>
        </Box>
      </Flex>
      <Divider mt='10px' />
    </Box>
  );
};

export default ProjectTime;
