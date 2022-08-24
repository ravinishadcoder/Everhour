import { Box, Flex, Grid, GridItem, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import styles from "./home.module.css";
import asan from "../../assests/asan.png";
import clickup from "../../assests/clickup.png";
import base from "../../assests/base camp.png";
import git from "../../assests/github.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import jira from "../../assests/jira.png";
import trelo from "../../assests/trelo.png";
import ImageSlider from "./ImageSlider";

import article from '../../assests/article.png'
const Carousel = () => {
  return (
    <Box>
      <Box className={styles.estimate}>
        <Text>Estimate tasks, set budgets, build</Text>
        <Text>reports & track time. All inside your</Text>
        <Text>project management tool</Text>
      </Box>
      <Box mt={"50px"}>
        <Flex className={styles.estiDown}>
          <Flex alignItems={"center"}>
            <img src={asan} alt="" />
            <Text>Asana</Text>
          </Flex>
          <Flex alignItems={"center"}>
            <img src={trelo} />
            <Text>Trello</Text>
          </Flex>
          <Flex alignItems={"center"}>
            <img src={base} />
            <Text>Basecamp</Text>
          </Flex>
          <Flex alignItems={"center"}>
            <img src={jira} />
            <Text>Jira</Text>
          </Flex>
          <Flex alignItems={"center"}>
            <img src={git} />
            <Text>Github</Text>
          </Flex>
          <Flex alignItems={"center"}>
            <img src={clickup} />
            <Text>ClickUp</Text>
          </Flex>
        </Flex>
      </Box>
      <Flex justifyContent={"center"} mt="60px">
        {/* <Box>
          <IoIosArrowBack/>
        </Box> */}
        <Box width={"70%"}>
          <ImageSlider />
        </Box>
        {/* <Box>
      <IoIosArrowForward/>
      </Box> */}
      </Flex>
      <Flex className={styles.quick} justifyContent="center">
      
        <Box>
        <section className={styles.number} >1</section> 
          <Text
            textAlign={"start"}
            fontSize="18px"
            color="#333"
            fontWeight="500"
          >
            Quick setup
          </Text>

          <Text
            textAlign={"start"}
            fontSize="18px"
            lineHeight="26px"
            color="#7c7c7c"
            w="264px"
          >
            Connect Everhour with your tool and start tracking time right away.
            No manual project setup is required.
          </Text>
        </Box>
        <Box textAlign={"start"}>
        <section className={styles.number} >2</section> 
          <Text
            textAlign={"start"}
            fontSize="18px"
            color="#333"
            fontWeight="500"
          >
            Native integration
          </Text>

          <Text
            textAlign={"start"}
            fontSize="18px"
            lineHeight="26px"
            color="#7c7c7c"
            w="264px"
          >
            Time tracking controls natively appears inside your project
            management tool, making it easy to track time.
          </Text>
        </Box>
        <Box>
        <section className={styles.number} >3</section> 
          <Text
            textAlign={"start"}
            fontSize="18px"
            color="#333"
            fontWeight="500"
          >
            Automatic updates
          </Text>

          <Text
            textAlign={"start"}
            fontSize="18px"
            lineHeight="26px"
            color="#7c7c7c"
            w="264px"
          >
            Everhour syncs changes automatically. That means your reports will
            always show the freshest data.
          </Text>
        </Box>
      </Flex>
      <Box mt={'150px'}>
        <Box className={styles.everArt}>
          <Text>Everhour has helped 166,000+</Text>
          <Text>people complete over 118</Text>
          <Text>million tasks in 3 million</Text>
          <Text>projects</Text>
        </Box>
        <Flex width={'90%'}mt='50px' justifyContent={'space-around'}>
          <Box>
            <img src={article} alt="" />
          </Box>
          <Box mt={'-100px'}>
            <img src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/customers/customer-kelly.webp" alt="" />
          </Box>
        </Flex>
        
      </Box>
    </Box>
  );
};

export default Carousel;
