import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "./home.module.css";

const Demo = () => {
  return (
    <div>
        <Text fontWeight={500} color="#333333"
            fontSize={["25px", "25px","35px","35px", "45px"]}
            width={["100%", "100%"]}>Book a 30-min live demo</Text>
        <Text fontWeight={400} color="#757575"
            fontSize={["25px","25px","25px","25px","25px"]}
            width={["100%", "100%"]}>10+ users? Let one of our customer success experts show you how Everhour </Text>
        <Text fontWeight={400} color="#757575"
            fontSize={["25px","25px","25px","25px","25px"]}
            width={["100%", "100%"]}>works, with plenty of time set aside for questions</Text>
            <br/>
        <Flex gap="2rem" justifyContent={"center"}>
        <Button
            as={"a"}
            width="200px"
            height="50px"
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            href={"/signup"}
            bg={"green.400"}
            _hover={{
              bg: "green",
            }}
          >
            Schedule time
          </Button>
          <Button color='#57bb71' variant='outline' height="50px">
    Watch Videos
  </Button>
  </Flex>
  <br/><br/>
  <Flex  flexDirection={"column"} justifyContent="center" width="40%">
            <Stack className={styles.botList} display={["none","none","flex","flex","flex"]}>
                    <Text textAlign={"start"} ml="35px">What you’ll learn</Text>
                <Flex alignItems={'center'} gap="20px">
                <Box className={styles.greendot} ></Box>
                    <Text w={['30%']} textAlign={"start"}>We’ll briefly explain what’s so special about Everhour.</Text>
                </Flex>
                <Flex alignItems={'center'} gap="20px">
                <Box className={styles.greendot}></Box>
                    <Text w={['30%']} textAlign={"start"}>We’ll teach you the basics of using the app, with plenty of time for questions.</Text></Flex>
                <Flex alignItems={'center'} gap="20px">
                <Box className={styles.greendot}></Box>
                    <Text w={['30%']} textAlign={"start"}>We’ll answer all questions about setting up Everhour, using it with your team, or anything else you’d like to ask.</Text>
                </Flex>
            </Stack>
        </Flex>

    </div>
  )
}

export default Demo