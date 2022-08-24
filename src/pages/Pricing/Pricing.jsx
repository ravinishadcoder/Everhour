import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Articles from '../Home/Articles'
import { FaAngleDown } from "react-icons/fa";
import React from "react";
import styles from "./pricing.module.css";
import { BsCheck } from "react-icons/bs";
import { useState } from "react";
const Pricing = () => {
    const [switchData,setSwitchData]=useState(true);
   const handleSwitchM=()=>{
    setSwitchData(false)
   } 
   const handleSwitchY=()=>{
    setSwitchData(true)
   } 
  return (
    <Box>
      <Stack>
        <Text lineHeight={1.5} fontWeight={500} fontSize={"45px"}>
          Simple pricing with no extra fees
        </Text>
        <Text className={styles.priceSubHead}>
          Start with no commitment. Try everything. Subscribe if you love it.
        </Text>
      </Stack>
      <Stack className={styles.radioBtn} >
        <Flex className={styles.slideBtn}>
            <Box>
            <Text as={'span'} onClick={handleSwitchM} style={{color:switchData?"":"#57bb71"}}>Monthly</Text>
            </Box>
            <Box>
            <Text as={'span'}onClick={handleSwitchY} style={{color:switchData?"#57bb71":""}}>Yearly</Text>
            </Box>
       
      
        </Flex>
        
      </Stack>
      <Stack className={styles.pricBKI}></Stack>
      <Stack className={styles.priceBox}>
        <section className={styles.boxSolid}></section>
        <Box >
          <Text className={styles.priceBoxHead}>All-in-one</Text>
          <Text className={styles.priceBoxSub}>
            All features, plus best-in-class integrations
          </Text>
          <Text>
            <Text
              as={"span"}
              fontSize="1.5rem"
              color="#57bb71"
              position="absolute"
              ml="-15px"
            >
              $
            </Text>
            <Text
              as={"span"}
              fontSize="4.375rem"
              lineHeight="5rem"
              color="#57bb71"
            >
             {switchData? 8:10}
            </Text>
            <Text as={"span"} color="#57bb71">
             {switchData? .50:""}
            </Text>
          </Text>
          <Text
            mt="10px"
            fontSize="0.875rem"
            lineHeight="1.25rem"
            color="#7c7c7c"
            fontWeight="500"
          >
            / user / month, starting at 5 users
          </Text>

          <Flex alignItems="center" mt="30px">
            <Text color={"#57bb71"}>
              <BsCheck />
            </Text>
            <Text fontSize="0.875rem" lineHeight="1.25rem" color="#333">
              Unlimited users
            </Text>
          </Flex>
          <Flex alignItems="center" mt="8px">
            <Text color={"#57bb71"}>
              <BsCheck />
            </Text>
            <Text fontSize="0.875rem" lineHeight="1.25rem" color="#333">
              Unlimited projects
            </Text>
          </Flex>
          <Flex alignItems="center" mt="8px">
            <Text color={"#57bb71"}>
              <BsCheck />
            </Text>
            <Text fontSize="0.875rem" lineHeight="1.25rem" color="#333">
              Unlimited integrations
            </Text>
          </Flex>
          <Flex alignItems="center" mt="8px">
            <Text color={"#57bb71"}>
              <BsCheck />
            </Text>
            <Text fontSize="0.875rem" lineHeight="1.25rem" color="#333">
              All features
            </Text>
          </Flex>
          <Flex alignItems="center" mt="8px">
            <Text color={"#57bb71"}>
              <BsCheck />
            </Text>
            <Text fontSize="0.875rem" lineHeight="1.25rem" color="#333">
              Fast and responsive support
            </Text>
            
          </Flex>
          <Stack mt={'20px'} alignItems='center'>
          <Button
            background={"#57bb71"}
            size="lg"
            width={"258px"}
            fontSize='1rem'
            fontWeight={'400px'}
            color="white"
            _hover={{ bg: "#57bb71" }}
            borderColor="#ccd0d5"
          >
            Try free
          </Button>
          </Stack>
          <Box className={styles.priceBKIsec}></Box>
        </Box>
      </Stack>
      <Flex className={styles.quesBox} mt='200px'>
        <Box>
          <Text className={styles.priceBoxHead}>Your questions. Answered!</Text>
          <Stack width={"29rem"} m="auto">
            <Text className={styles.priceBoxSub}>
              Here is a list of the most frequently asked questions. Got others
              or some ideas? — Contact us!
            </Text>
          </Stack>
          <Flex justifyContent={"center"} mt="40px">
            <img
              src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/primary-illustrations/faq.webp"
              alt=""
            />
          </Flex>
        </Box>
        <Stack alignItems={"start"} gap='10px' mt={'20px'}>
          <HStack gap={'195px'}>
          <Text className={styles.anserBox}>
            What's the trial period purpose?
          </Text>
          <Text ><FaAngleDown/></Text>
          </HStack>
          <Divider borderColor={'#57bb71'} orientation="horizontal" width={"30rem"} />
          <HStack gap={'180px'}>
          <Text className={styles.anserBox}>
          What means 'Starting at 5 users'?
          </Text>
          <Text ><FaAngleDown/></Text>
          </HStack>
          <Divider borderColor={'#57bb71'} orientation="horizontal" width={"30rem"} />
          <HStack gap={'225px'}>
          <Text className={styles.anserBox}>
          Can I change my plan later?
          </Text>
          <Text ><FaAngleDown/></Text>
          </HStack>
         
          <Divider borderColor={'#57bb71'} orientation="horizontal" width={"30rem"} />
          <HStack gap={'105px'}>
          <Text className={styles.anserBox}>
          Can I add or remove members at any time?
          </Text>
          <Text alignSelf={'end'}><FaAngleDown/></Text>
          </HStack>
          <Divider borderColor={'#57bb71'} orientation="horizontal" width={"30rem"} />
          <HStack gap={'165px'}>
          <Text className={styles.anserBox}>
          What if I want to cancel my service?
          </Text>
          <Text ><FaAngleDown/></Text>
          </HStack>
          <Divider borderColor={'#57bb71'} orientation="horizontal" width={"30rem"} />
          <HStack gap={'78px'}>
          <Text className={styles.anserBox}>
          What kind of payment methods do you accept?
          </Text>
          <Text ><FaAngleDown/></Text>
          </HStack>
          <Divider borderColor={'#57bb71'} orientation="horizontal" width={"30rem"} />
          <HStack gap={'166px'}>
          <Text className={styles.anserBox}>
          Which currency will I be charged in?
          </Text>
          <Text ><FaAngleDown/></Text>
          </HStack>
          <Divider borderColor={'#57bb71'} orientation="horizontal" width={"30rem"} />
        </Stack>
      </Flex>
      <Box>
        <Articles/>
      </Box>
    </Box>
  );
};

export default Pricing;
