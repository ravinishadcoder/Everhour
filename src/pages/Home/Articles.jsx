import { Box, Button, Flex, Grid, GridItem, Input, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import styles from "./home.module.css";
import badges from "../../assests/badges.png";
import {FcGoogle } from "react-icons/fc";
const data = [
  {
    text: "“Everhour has the best integration with Asana compared to other time tracking tools — including Asana’s preferred integration (Harvest). And it’s not just because it’s more affordable than Harvest. With Harvest you have to click the icon in the task to start the time, then you have to set the project and task you want to track time for. That’s 3 additional clicks every time you want to track your time. With Everhour you just click your button to start your time. The product team at Everhour really gets UX here — their integration automatically pulls in all relevant data to your task including task name, section level, project, team, tags, literally everything available via the API! Imagine how useful having all that rich data can be if you want to report on things! No more settling for Asana’s weak and fluffy dashboard reports. With Everhour’s rich data you can export it into a data source to analyze or visualize in BI tools like DataStudio or Tableau.”",
    Auther: "— Skyler R. (Source: G2.com)",
  },
  {
    text: "Simple, elegant, and powerful. My team uses Everhour for a few reasons: (1) It has a simple, intuitive interface; (2) It has a powerful reporting engine that we now use for generating various insights, including employee time analyses and customer invoices; (3) It comes with solid integrations with task management software (we use ClickUp in particular); (4) Per-user costs are low, which is essential for us as we have many part-time employees, some of whom only work a few hours per week.",
    Auther: "— Aaron M. (Source: G2.com)",
  },
  {
    text: "“Everhour is being used by my department now, but it’s planned to be used across the whole company. We were having problems tracking the times of every project and Everhour ended up being the best solution to the issue. We’re tracking our tasks involved in every project, in every level (software development, meetings, project management, etc.)”",
    Auther: "— Maria Lucia S. (Source: TrustRadius)",
  },
  {
    text: "Everhour allows our team to save time on time tracking! Everhour is the best time tracking tool for use with Basecamp. In the past, we have used Toggl and Tick and while they did integrate with Basecamp, it wasn't as seamless as it is with Everhour.",
    Auther: "— Kory L. (Source: Capterra)",
  },
  {
    text: "“Overall a great and very affordable software with just the right amount of very robust and well thought out features! The perfect tool for freelancers and companies! I hate wasting time on complex software. Everhour just gets out of my way so I can get work done. Very responsive and helpful support! GitHub integration is fantastic and makes time tracking a lot easier and faster! I can build detailed reports of my work for clients. Exporting invoices directly to Freshbooks perfectly integrates my time tracking with my invoicing workflow. The app allows me to quickly start/stop timers when I forgot to do so on the web.”",
    Auther: "Benjamin W. (Source:     Capterra)",
  },
  {
    text: "Initially while working with Jira we had a need to measure the time of our teams in projects. Our main idea was to improve the way we worked based on actual data. After that, we also realized that we should have a tool that can help us plan and track time. We started with the Tempo planner and timesheets. After several updates from those two tools, we decided that we were no longer a fit and that we needed a real solution to our issues that was bug-free and that could actually help us invoice our customers too. Everhour is transparent, clear, and very easy to use. We now track our time, plan out team time in projects and also we invoice our customers in an easy and simple way. Things could not get better!",
    Auther: "— Joaquin G. (Source: Atlassian)",
  },
];
const Articles = () => {
  return (
    <Box>
      <VStack mt={"100px"}>
        <Text color={"#7c7c7c"}>A time tracker you can trust for life</Text>
        <Flex style={{ marginTop: "50px" }} justifyContent="center">
          <img src={badges} width="70%" />
        </Flex>
      </VStack>
      <Grid
        templateColumns={"repeat(3,1fr)"}
        className={styles.article}
        mt={"80px"}
      >
        {data.map((item, i) => {
          if (i == 4) {
            return (
              <GridItem key={i} className={styles.fourth}>
                <Text>{item.text}</Text>
                <Text>{item.Auther}</Text>
              </GridItem>
            );
          }
          if (i == 5) {
            return (
              <GridItem key={i} className={styles.fifth}>
                <Text>{item.text}</Text>
                <Text>{item.Auther}</Text>
              </GridItem>
            );
          } else {
            return (
              <GridItem key={i}>
                <Text>{item.text}</Text>
                <Text>{item.Auther}</Text>
              </GridItem>
            );
          }
        })}
      </Grid>
      <VStack mt={'100px'}>
        <Text className={styles.everArt}>Get more from Everhour</Text>
        <Text
          fontSize={"1.125rem"}
          lineHeight="1.44"
          color="#767676"
          fontWeight={400}
        >
          Productivity tips and techniques, tutorials, guides, and other time
          management resources
        </Text>
      </VStack>
      <Flex className={styles.getMore}>
        <Box>
          <Box>
            <img
              src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/resources/section-help-docs.webp"
              alt=""
            />
          </Box>
          <Text fontSize="0.875rem" lineHeight="1.57" color="#767676">
            Resources
          </Text>
          <Box   className={styles.botHover}>
          <Text className={styles.bottomP}>Free Guides and </Text>
          <Text className={styles.bottomP}>templates to help your </Text>
          <Text className={styles.bottomP}>team work better</Text>
          </Box>
        </Box>
        <Box>
          <Box>
            <img
              src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/resources/section-product-updates.webp"
              alt=""
            />
          </Box>
          <Text fontSize="0.875rem" lineHeight="1.57" color="#767676">
            Video tutorials
          </Text>
          <Box className={styles.botHover}>
          <Text className={styles.bottomP}>Short videos to learn</Text>
          <Text className={styles.bottomP}>The best way to use </Text>
          <Text className={styles.bottomP}>EverHour</Text>
          </Box>
        </Box>
        <Box>
          <Box>
            <img
              src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/resources/section-tutorial-videos.webp"
              alt=""
            />
          </Box>
          <Text fontSize="0.875rem" lineHeight="1.57" color="#767676">
            Blog
          </Text>
          <Box className={styles.botHover}>
          <Text className={styles.bottomP}>Your first destination for</Text>
          <Text className={styles.bottomP}>the freshly released</Text>
          <Text className={styles.bottomP}>EverHour features</Text>
          </Box>
        </Box>
        <Box>
          <Box>
            <img
              src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/resources/section-guide-and-templates.webp"
              alt=""
            />
          </Box>
          <Text fontSize="0.875rem" lineHeight="1.57" color="#767676">
            Help center
          </Text>
          <Box className={styles.botHover}>
          <Text className={styles.bottomP}>FAQ, tutorials, </Text>
          <Text className={styles.bottomP}>documentation, help,</Text>
          <Text className={styles.bottomP}>and support</Text>
          </Box>
        </Box>
      </Flex>
      <Flex className={styles.control}>
        <Box w={'70%'}>
            <Stack>
                <Box>
                <Text className={styles.everArt}>
                Take control of your time with Everhour
                </Text>
                <Text
                fontSize={"1.125rem"}
                lineHeight="1.44"
                color="#767676"
                fontWeight={400}
                textAlign='start'
                ml={'175px'}
                mt='10px'
                >Beautiful integrations. Intuitive interface. No unexpected fees</Text>
                </Box>
             <Flex style={{marginLeft:"175px",marginTop:"25px"}}
             width={'470px'}  gap={'10px'} >
             <Input placeholder='Work email...' h={'48px'}/>
             <Button
            background={"#57bb71"}
            size="lg"
            width={"150px"}
            color="white"
            _hover={{ bg: "#57bb71" }}
            borderColor="#ccd0d5"
          >
            Try free
          </Button>
             </Flex>   
            </Stack>
            <Flex alignItems={'center'} className={styles.googleF} >
                <FcGoogle/>
                <Text>Or sign up with Google Account</Text>
            </Flex>
        </Box>
        <Box w={'30%'}>
            <Stack className={styles.botList}>
                <Flex alignItems={'center'} gap="5px">
                    <Box className={styles.greendot}></Box>
                    <Text >Track time from the apps you already use</Text>
                </Flex>
                <Flex alignItems={'center'} gap="5px">
                <Box className={styles.greendot}></Box>
                    <Text>Know where your team’s time is going</Text>
                </Flex>
                <Flex alignItems={'center'} gap="5px">
                <Box className={styles.greendot}></Box>
                    <Text>Keep projects on budget</Text></Flex>
                <Flex alignItems={'center'} gap="5px">
                <Box className={styles.greendot}></Box>
                    <Text>Increase transparency</Text>
                </Flex>
                <Flex alignItems={'center'} gap="5px">
                <Box className={styles.greendot}></Box>
                    <Text>Make your workflow more efficient</Text>
                </Flex>
                <Flex alignItems={'center'} gap="5px">
                <Box className={styles.greendot}></Box>
                    <Text>Spot burnout before it happens</Text>
                </Flex>
            </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Articles;
