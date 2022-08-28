import React from "react";
import { Box, Button, Center, Heading, Image, Text } from "@chakra-ui/react";
import WhyPageIntegration from "./commonIntegration/WhyPageIntegration";
import RightImage from "./commonIntegration/RightImage";
import LeftImage from "./commonIntegration/LeftImage";
import { asanawhydata } from "./Data/Asana/AsanaWhydata";
import {
  asanaRightImageData1,
  asanaRightImageData2,
  asanaRightImageData3,
  asanaRightImageData4,
  asanaRightImageData5,
} from "./Data/Asana/AsanaRightImageData";
import {
  asanaLeftImageData1,
  asanaLeftImageData2,
  asanaLeftImageData3,
  asanaLeftImageData4,
} from "./Data/Asana/AsanaLeftImageData";
import { AsanaQuestionData } from "./Data/Asana/AsanaQuestionData";
import Star from "./commonIntegration/Star";
import YourQuestions from "./commonIntegration/YourQuestions";
import Articles from "../pages/Home/Articles";
import { TbBrandAsana } from "react-icons/tb";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Asana = () => {
  function changeBackground(e) {
    e.target.style.background = "#05c160";
    e.target.style.color = "white";
  }
  function changeBackground1(e) {
    e.target.style.background = "white";
    e.target.style.color = "#92d1a0";
  }
  return (
    <Box>
      <Box>
        <Navbar />
      </Box>
      <Box width={"80%"} m="auto">
        <Box>
          <Heading fontSize={"45px"} fontWeight="400">
            Asana time tracking integration
          </Heading>
          <Text color={"grey"} fontSize={"25px"} fontWeight="400">
            Time tracking in Asana with timesheets, budgeting, client reporting,
            and payroll. Works inside Asana. No more tab switching!
          </Text>
          <Button
            variant="outline"
            colorScheme="green"
            leftIcon={<TbBrandAsana style={{ color: "red" }} />}
            fontSize="18px"
            fontWeight={"100"}
            m="30px 0px 20px 0px"
            p={"23px 15px 23px 15px"}
            onMouseEnter={changeBackground}
            onMouseLeave={changeBackground1}
          >
            Try With my Asana
          </Button>
          <Text fontSize={"lg"} color="grey">
            Free to try • No credit card required • 1-minute signup
          </Text>
          <Center mt={"50px"}>
            <Image src="https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/asana-primary.webp"></Image>
          </Center>
        </Box>

        <WhyPageIntegration whydata={asanawhydata} />

        <Box m={"100px auto 100px auto"}>
          <Heading size="xl">How does Everhour integrate with Asana?</Heading>
          <Text m={"20px auto"} w="50%" color={"grey"} fontSize="large">
            {" "}
            After you successfully connected Everhour and Asana, there are
            multiple useful features you can start using directly in your Asana
            interface
          </Text>
        </Box>

        <RightImage RightImageData={asanaRightImageData1} />
        <LeftImage LeftImageData={asanaLeftImageData1} />

        <RightImage RightImageData={asanaRightImageData2} />
        <LeftImage LeftImageData={asanaLeftImageData2} />

        <RightImage RightImageData={asanaRightImageData3} />
        <LeftImage LeftImageData={asanaLeftImageData3} />

        <RightImage RightImageData={asanaRightImageData4} />
        <LeftImage LeftImageData={asanaLeftImageData4} />

        <RightImage RightImageData={asanaRightImageData5} />

        <Star />
        <YourQuestions QuestionData={AsanaQuestionData} />
        <Articles />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Asana;
