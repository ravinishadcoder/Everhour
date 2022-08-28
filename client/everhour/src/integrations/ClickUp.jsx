import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";

import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { SiClickup } from "react-icons/si";
import Articles from "../pages/Home/Articles";
import Star from "./commonIntegration/Star";
import WhyPageIntegration from "./commonIntegration/WhyPageIntegration";
import YourQuestions from "./commonIntegration/YourQuestions";
import { Clickupwhydata } from "./Data/Clickup/ClickupWhydata";
import { ClickupQuestionData } from "./Data/Clickup/ClickupQuestionData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ClickUp = () => {
  function changeBackground(e) {
    e.target.style.background = "#05c160";
    e.target.style.color = "white";
  }
  function changeBackground1(e) {
    e.target.style.background = "white";
    e.target.style.color = "#92d1a0";
  }
  return (
    <>
      <Box>
        <Navbar />
      </Box>
      <Box width={"80%"} m="auto">
        <Box>
          <Heading fontSize={"45px"} fontWeight="400">
            ClickUp time tracking integration
          </Heading>
          <Text color={"grey"} fontSize={"25px"} fontWeight="400">
            Accurate time tracker for timesheets, budgeting, client reporting,
            and payroll. Works inside ClickUp. No more tab switching!
          </Text>
          <Button
            variant="outline"
            colorScheme="green"
            leftIcon={<SiClickup style={{ color: "red" }} />}
            fontSize="18px"
            fontWeight={"100"}
            m="30px 0px 20px 0px"
            p={"23px 15px 23px 15px"}
            onMouseEnter={changeBackground}
            onMouseLeave={changeBackground1}
          >
            Try With my ClickUp
          </Button>
          <Text fontSize={"lg"} color="grey">
            Free to try • No credit card required • 1-minute signup
          </Text>
          <Center mt={"50px"}>
            <Image src="https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/clickup-primary.webp"></Image>
          </Center>
        </Box>
        <WhyPageIntegration whydata={Clickupwhydata} />

        <Box mt={"150px"}>
          <Heading as={"h3"} size="xl">
            How to track time in ClickUp with Everhour
          </Heading>
          <List w={"70%"} m="auto">
            <ListItem
              textAlign={"left"}
              fontSize="25px"
              fontWeight={"700"}
              mb="30px"
            >
              <ListIcon as={IoMdCheckmarkCircle} color="green.500" font />
              Step 1: Create your Everhour account
              <Text fontSize={"16px"} p="0px 40px" fontWeight={"100"}>
                Sign up for free and install our browser extension. This is how
                we embed controls into the Clickup interface. We support all
                popular browsers: Chrome, Firefox, Safari, Edge.
              </Text>
            </ListItem>

            <ListItem
              textAlign={"left"}
              fontSize="30px"
              fontWeight={"700"}
              mb="30px"
            >
              <ListIcon as={IoMdCheckmarkCircle} color="green.500" font />
              Step 2: Connect Everhour and ClickUp
              <Text fontSize={"16px"} p="0px 40px" fontWeight={"100"}>
                After signup, Everhour will automatically sync all your
                projects. You can choose between lists or folders to be your
                projects. Sync happens periodically so all new projects that you
                create in ClickUp will be visible in Everhour reports. Everhour
                also updates the names of tasks or projects if they were renamed
                in ClickUp. This way Everhour reports will always show you the
                freshest data.
              </Text>
            </ListItem>

            <ListItem
              textAlign={"left"}
              fontSize="30px"
              fontWeight={"700"}
              mb="30px"
            >
              <ListIcon as={IoMdCheckmarkCircle} color="green.500" font />
              Step 3: Invite your team
              <Text fontSize={"16px"} p="0px 40px" fontWeight={"100"}>
                You need to invite your team to join Everhour. They will also
                need to connect their ClickUp accounts and install our browser
                extension. Only those you invite into Everhour will be able to
                track time and see time progress (not necessarily all ClickUp
                users). Your clients or guests will not see anything in ClickUp
                unless you invite them.
              </Text>
            </ListItem>

            <ListItem
              textAlign={"left"}
              fontSize="30px"
              fontWeight={"700"}
              mb="30px"
            >
              <ListIcon as={IoMdCheckmarkCircle} color="green.500" font />
              Step 4: Track time inside ClickUp
              <Text fontSize={"16px"} p="0px 40px" fontWeight={"100"}>
                You can track time using the timer or log time manually. You’ll
                see the time reported by each employee and its progress, plus
                time on parent and all subtasks.
              </Text>
              <Image src="https://blog-cdn.everhour.com/assets/images/new-design/screens/guides/clickup-new-controls.webp"></Image>
            </ListItem>

            <ListItem
              textAlign={"left"}
              fontSize="30px"
              fontWeight={"700"}
              mb="30px"
            >
              <ListIcon as={IoMdCheckmarkCircle} color="green.500" font />
              Step 5: Track time via the Everhour browser extension
              <Text fontSize={"16px"} p="0px 40px" fontWeight={"100"}>
                You don't necessarily need to open ClickUp or Everhour website.
                By clicking on the timer icon in the browser toolbar you can
                quickly start the timer, add time to any task, edit time or
                estimate, and more.
              </Text>
              <Image src="https://blog-cdn.everhour.com/assets/images/new-design/screens/time-tracking-extension.webp"></Image>
            </ListItem>

            <ListItem
              textAlign={"left"}
              fontSize="30px"
              fontWeight={"700"}
              mb="30px"
            >
              <ListIcon as={IoMdCheckmarkCircle} color="green.500" font />
              Step 6: Make custom reports with ClickUp data
              <Text fontSize={"16px"} p="0px 40px" fontWeight={"100"}>
                There are a number of columns that show specific data coming
                from ClickUp. Open a report builder and select any of the
                columns to display the data in your report.
              </Text>
              <Image src="https://blog-cdn.everhour.com/assets/images/new-design/screens/guides/report-builder-v2.webp"></Image>
            </ListItem>

            <ListItem
              textAlign={"left"}
              fontSize="30px"
              fontWeight={"700"}
              mb="30px"
            >
              <ListIcon as={IoMdCheckmarkCircle} color="green.500" font />
              Step 7: Find out more...
              <Text fontSize={"16px"} p="0px 40px" fontWeight={"100"}>
                Timers page shows what your team is doing right now. Timesheet
                page helps to view the structured picture of the time a member
                spent for a week. Timecard page displays when a user started
                their workday, when they had breaks and when they finished their
                work. Timeoff page shows all vacations, sick leaves, and any
                other PTO types.
              </Text>
              <Image src="https://blog-cdn.everhour.com/assets/images/new-design/screens/guides/team-timers.webp"></Image>
            </ListItem>
          </List>
          <br />
          <br />
          <Star />
          <YourQuestions QuestionData={ClickupQuestionData} />
          <Articles />
        </Box>
      </Box>
      <Box>
        <Footer />
      </Box>
    </>
  );
};

export default ClickUp;
