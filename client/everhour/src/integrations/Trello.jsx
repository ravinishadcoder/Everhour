import React from "react";
import { Box, Button, Center, Heading, Image, Text } from "@chakra-ui/react";
import WhyPageIntegration from "./commonIntegration/WhyPageIntegration";
import RightImage from "./commonIntegration/RightImage";
import LeftImage from "./commonIntegration/LeftImage";
import Star from "./commonIntegration/Star";
import YourQuestions from "./commonIntegration/YourQuestions";
import Articles from "../pages/Home/Articles";
import { DiTrello } from "react-icons/di";
import { Trellowhydata } from "./Data/Trello/TrelloWhydata";
import { TrelloLeftImageData1, TrelloLeftImageData2 } from "./Data/Trello/TrelloLeftImageData";
import { TrelloRightImageData1, TrelloRightImageData2 } from "./Data/Trello/TrelloRightImageData";
import { TrelloQuestionData } from "./Data/Trello/TrelloQuestionData";

const Trello = () => {
  function changeBackground(e) {
    e.target.style.background = '#05c160';
    e.target.style.color = 'white';
  }
  function changeBackground1(e) {
    e.target.style.background = 'white';
    e.target.style.color = '#92d1a0';
  }
  return (
    <Box >
      <Box width={"80%"} m="auto">
        <Box >
        <Heading fontSize={"45px"} fontWeight="400">Trello time tracking integration</Heading>
      <Text color={"grey"} fontSize={"25px"} fontWeight="400">
      Time tracking in Trello with timesheets, budgeting, client reporting, and payroll.
Works inside Trello. No more tab switching!
      </Text>
      <Button
        variant="outline"
        colorScheme="green"
        leftIcon={<DiTrello style={{color:"blue"}}/>}
        fontSize="18px"
        fontWeight={"100"}
        m="30px 0px 20px 0px"
        p={"23px 15px 23px 15px"}
        onMouseEnter={changeBackground}
        onMouseLeave={changeBackground1}
      >
       Try With my Trello
      </Button>
      <Text fontSize={"lg"} color="grey">
        Free to try • No credit card required • 1-minute signup
      </Text>
      <Center mt={"50px"}>
      <Image src="https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/asana-primary.webp"></Image>
      </Center>
    </Box>
       
        <WhyPageIntegration  whydata={Trellowhydata}/>

        <Box m={"100px auto 100px auto"}>
          <Heading size="xl">
          How does Everhour improve Trello?
          </Heading>
          <Text m={"20px auto"} w="50%" color={"grey"} fontSize="large">
            After you successfully connected Everhour and Asana, there are multiple useful features you can start using directly in your Asana interface
          </Text>
        </Box>

        <RightImage RightImageData={TrelloRightImageData1}/>
        <LeftImage LeftImageData={TrelloLeftImageData1}/>

        <RightImage RightImageData={TrelloRightImageData2}/>
        <LeftImage LeftImageData={TrelloLeftImageData2}/>


        <Star/>
        <YourQuestions QuestionData={TrelloQuestionData}/>
        <Articles/>
       
      </Box>
    </Box>
  );
};

export default Trello;
