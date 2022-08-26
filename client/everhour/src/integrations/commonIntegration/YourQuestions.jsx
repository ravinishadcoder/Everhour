import {
  Box,
  Flex,
  Heading,
  Image,
  Spacer,
  Text
} from "@chakra-ui/react";
import React from "react";
import Collapsee from "./Collapse";

const YourQuestions = ({QuestionData}) => {
  return (
    <Flex>
      <Box textAlign={"left"} p="60px" w="50%">
        <Heading size={"xl"}>Your questions. Answered!</Heading>
        <Text fontSize={"large"}>
          Here is a list of the most frequently asked questions. Got others or
          some ideas? — Contact us!
        </Text>
        <Image src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/primary-illustrations/faq.webp"></Image>
      </Box>
      <Spacer />
      <Box w="50%" p="60px">
       {QuestionData.map((el,index)=>{
        return <Collapsee el={el} key={index}/>
       })}
      </Box>
    </Flex>
  );
};

export default YourQuestions;
