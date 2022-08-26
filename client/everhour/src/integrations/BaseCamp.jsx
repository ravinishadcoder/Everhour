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
import { ImBasecamp } from "react-icons/im";
import Articles from "../pages/Home/Articles";
import Star from "./commonIntegration/Star";
import WhyPageIntegration from "./commonIntegration/WhyPageIntegration";
import YourQuestions from "./commonIntegration/YourQuestions";
import { basecampwhydata } from "./Data/BaseCamp/BasecampWhydata";
import { BasecampQuestionData } from "./Data/BaseCamp/BasecampQuestionData";

const BaseCamp = () => {
  function changeBackground(e) {
    e.target.style.background = "#05c160";
    e.target.style.color = "white";
  }
  function changeBackground1(e) {
    e.target.style.background = "white";
    e.target.style.color = "#92d1a0";
  }
  return (
    <Box width={"80%"} m="auto">
      <Box>
        <Heading fontSize={"45px"} fontWeight="400">
          Basecamp time tracking integration
        </Heading>
        <Text color={"grey"} fontSize={"25px"} fontWeight="400">
          Accurate time tracker for timesheets, budgeting, client reporting, and
          payroll. Works inside Basecamp. No more tab switching!
        </Text>
        <Button
          variant="outline"
          colorScheme="green"
          leftIcon={<ImBasecamp style={{ color: "green" }} />}
          fontSize="18px"
          fontWeight={"100"}
          m="30px 0px 20px 0px"
          p={"23px 15px 23px 15px"}
          onMouseEnter={changeBackground}
          onMouseLeave={changeBackground1}
        >
          Try With my BaseCamp
        </Button>
        <Text fontSize={"lg"} color="grey">
          Free to try • No credit card required • 1-minute signup
        </Text>
        <Center mt={"50px"}>
          <Image src="https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/basecamp-primary.webp"></Image>
        </Center>
      </Box>
      <WhyPageIntegration whydata={basecampwhydata} />
      <Box w={"70%"} m="100px auto 50px auto " 
            textAlign={"left"}
            >
        <Heading as={"h3"} size="xl" ml={"35px"}>
          Does Basecamp have time tracking?
        </Heading>
        <Text fontSize={"16px"} p="0px 40px" fontWeight={"100"}>
          Many businesses love Basecamp. It offers a dime a dozen tools for
          effective project management and works perfectly even for the most
          complex projects. Yet, there is one simple component missing—a handy
          Basecamp time tracking feature. Everhour offers a neat solution to
          this issue—an intuitive and efficient time tracker extension that
          effortlessly integrates with Basecamp 2 and Basecamp 3.
        </Text>
      </Box>

      <Box >
        <Heading as={"h3"} size="xl">
          How to track time in Basecamp with Everhour
        </Heading>
        <Text w={"70%"} m="auto" fontSize={"16px"} p="0px 40px" fontWeight={"100"}>A smoothly synced Everhour time tracking app with Basecamp 3 enables your project team with the advanced time tracking functionality close at hand. Here is how it works.</Text>
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
              Sign up for free and install our browser extension. This is how we
              embed controls into the Clickup interface. We support all popular
              browsers: Chrome, Firefox, Safari, Edge.
            </Text>
          </ListItem>

          <ListItem
            textAlign={"left"}
            fontSize="30px"
            fontWeight={"700"}
            mb="30px"
          >
            <ListIcon as={IoMdCheckmarkCircle} color="green.500" font />
            Step 2: Connect Everhour and Basecamp
            <Text fontSize={"16px"} p="0px 40px" fontWeight={"100"}>
            When you sign up, Everhour will automatically sync tasks from your projects. Sync happens periodically so all new tasks that you create in Basecamp will be visible in Everhour reports. Everhour also updates the names of tasks or projects if they were renamed in Basecamp. This way Everhour reports will always show you the freshest data.


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
              You need to invite your team to join Everhour. They will also need
              to connect their ClickUp accounts and install our browser
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
            Step 4: Use time tracking controls right in Basecamp
            <Text fontSize={"16px"} p="0px 40px" fontWeight={"100"}>
            After successful integration, you can track time using the timer or log time manually. You’ll see the time reported by each employee and its progress.
            </Text>
            <Image src="https://blog-cdn.everhour.com/assets/images/new-design/screens/guides/basecamp-controls.webp"></Image>
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
            You don't necessarily need to open Basecamp or Everhour websites. By clicking on the timer icon in the browser toolbar you can quickly start the timer, add time to any task, edit time or estimate, and more.
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
            Step 6: Make custom reports with Basecamp data
            <Text fontSize={"16px"} p="0px 40px" fontWeight={"100"}>
            There are a number of columns that show specific data coming from Basecamp. Open a report builder and select any of the columns to display the data in your report. For example, group tasks by project showing members, reported time and original estimates. Or you can build a report with the total involvement of a specific department. Use this data to keep your customer informed and to make sure that your team moves according to your original estimates. By increasing transparency in the development process, you will increase the number of your satisfied customers.
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
              spent for a week. Timecard page displays when a user started their
              workday, when they had breaks and when they finished their work.
              Timeoff page shows all vacations, sick leaves, and any other PTO
              types.
            </Text>
            <Image src="https://blog-cdn.everhour.com/assets/images/new-design/screens/guides/team-timers.webp"></Image>
          </ListItem>
        </List>
        <br />
        <br />
        <Star />
        <YourQuestions QuestionData={BasecampQuestionData} />
        <Articles />
      </Box>
    </Box>
  );
};

export default BaseCamp;
