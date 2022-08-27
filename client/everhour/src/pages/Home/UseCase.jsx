import styles from "./home.module.css";
import billing from "../../assests/billing.png";
import expenses from "../../assests/expenses.png";
import file from "../../assests/file.png";
import invoice from "../../assests/invoicing.png";
import visual from "../../assests/visual.png";
import timetrack from "../../assests/timetrack.png";
import 'react-slideshow-image/dist/styles.css'
import { useTimer } from 'react-use-precision-timer';
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import React from "react";
import { Progress } from '@chakra-ui/react'

const UseCase = () => {
  const [useTime, setUseTime] = useState(true);
  const [useBilling, setUseBilling] = useState(false);
  const [useTask, setUseTask] = useState(false);
  const [useVisual, setUseVisual] = useState(false);
  const [useExpense, setUseExpense] = useState(false);
  const [useInvoice, setUseInvoice] = useState(false);
  const handleUseTime = () => {
    setUseTime(true);
    setUseBilling(false);
    setUseTask(false);
    setUseVisual(false);
    setUseExpense(false);
    setUseInvoice(false);
  };
  const handleUseBilling = () => {
    setUseBilling(true);
    setUseTime(false);
    setUseTask(false);
    setUseVisual(false);
    setUseExpense(false);
    setUseInvoice(false);
  };
  const handleUseTask = () => {
    setUseTask(true);
    setUseTime(false);
    
    setUseBilling(false);
    setUseVisual(false);
    setUseExpense(false);
    setUseInvoice(false);
  };
  const handleUseVisual = () => {
    setUseVisual(true);
    setUseTime(false);
    setUseBilling(false);
    
    setUseTask(false);
    setUseExpense(false);
    setUseInvoice(false);
  };
  const handleUseExpenses = () => {
    setUseExpense(true);
    setUseTime(false);
    setUseBilling(false);
    setUseTask(false);
    
    setUseVisual(false);
    setUseInvoice(false);
  };
  const handleUseInvoice = () => {
    setUseInvoice(true);
    setUseTime(false);
    setUseBilling(false);
    setUseTask(false);
    setUseVisual(false);
    
    setUseExpense(false);
  };
  
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(1)
const images=["https://blog-cdn.everhour.com/assets/images/new-design/screens/expenses.webp",
"https://blog-cdn.everhour.com/assets/images/new-design/screens/projects-dashboard-v2.webp",
"https://blog-cdn.everhour.com/assets/images/new-design/screens/invoices-preview-v2.webp",
"https://blog-cdn.everhour.com/assets/images/new-design/screens/projects-board-view-v2.webp",
"https://blog-cdn.everhour.com/assets/images/new-design/screens/expenses.webp",
"https://blog-cdn.everhour.com/assets/images/new-design/screens/resource-planning-members-new-v2.webp"];

const func=()=>{
  setInterval(() => {
    setCount(old=>old+1)
  }, 50);
}

useEffect(() => {
func();
}, [])

useEffect(() => {

if(count===100)
{setCount(0)
  if(number===6)
  setNumber(1)
  else
  setNumber(number+1)
}


}, [count,number])
  

  return (
    <Box className={styles.usage}>
      <Box className={styles.hideDot} />
      <Box className={styles.useImg} display={["none","none","none","flex","flex"]}
      height= {["200px","300px"]}
      width= {["250px","250px"]}
      ></Box>

      <Grid margin="auto" width={["80%","80%","80%","100%","100%"]} templateColumns={["80%","80%","80%","30% 70%","30% 70%"]} zIndex="2" margin="auto">
        <GridItem>
          <Text
            fontSize={"36px"}
            fontWeight={500}
            textAlign="start"
            padding={"10px"}
          >
            Use Cases
          </Text>
          <Stack className={styles.useBox}>
            {(number===1) ? (
              <Box>
              <Progress colorScheme='green' value={count} height="5px" width="77%"/>
               <Box className={styles.subUsage}>
                  <Flex gap={"10px"}>
                    <img src={invoice} alt="" />
                    <Text fontSize={"18px"}>Time tracking</Text>
                  </Flex>
                  <Box>
                    <Text className={styles.subUsageText}>
                      Easy-to-use time tracker. Know the time spent on tasks,
                      hours of work, and breaks for each employee
                    </Text>
                  </Box>
                </Box>
              </Box>
            ) : (
              <Box>
                <Flex gap={"10px"} onClick={handleUseTime} cursor="pointer">
                  <img src={timetrack} alt=""/>
                  <Text fontSize={"18px"}>Time tracking</Text>
                </Flex>
              </Box>
            )}
            {(number===2) ? (
              <Box>
              <Progress colorScheme='green' value={count} height="5px" width="77%"/>
                <Box className={styles.subUsage}>
                  <Flex gap={"10px"}>
                    <img src={invoice} alt="" />
                    <Text fontSize={"18px"}>Billing and Budgeting</Text>
                  </Flex>
                  <Box>
                    <Text className={styles.subUsageText}>
                      Simple and flexible projects billing. Set budgets to track
                      progress in real time. Receive timely notifications
                    </Text>
                  </Box>
                </Box>
              </Box>
            ) : (
              <Box>
                <Flex gap={"10px"} onClick={handleUseBilling} cursor="pointer">
                  <img src={billing} alt="" />
                  <Text fontSize={"18px"}>Billing and Budgeting</Text>
                </Flex>
              </Box>
            )}
            {(number===3) ? (
              <Box>
                <Progress colorScheme='green' value={count} height="5px" width="77%"/>
                <Box className={styles.subUsage}>
                  <Flex gap={"10px"}>
                    <img src={invoice} alt="" />
                    <Text fontSize={"18px"}>Task Management</Text>
                  </Flex>
                  <Box>
                    <Text className={styles.subUsageText}>
                      Create tasks, organize them in sections, add time
                      estimates to keep everyone in the loop and on track
                    </Text>
                  </Box>
                </Box>
              </Box>
            ) : (
              <Box>
                
                <Flex gap={"10px"} onClick={handleUseTask} cursor="pointer">
                  <img src={file} alt="" />
                  <Text fontSize={"18px"}>Task Management</Text>
                </Flex>
              </Box>
            )}
            {(number===4) ? (
              <Box>
                <Progress colorScheme='green' value={count} height="5px" width="77%"/>
                <Box className={styles.subUsage}>
                  <Flex gap={"10px"}>
                    <img src={invoice} alt="" />
                    <Text fontSize={"18px"}>Visual Planning</Text>
                  </Flex>
                  <Box>
                    <Text className={styles.subUsageText}>
                      View your team’s schedule, know how busy or available
                      someone is, compare plan to the actual time spent
                    </Text>
                  </Box>
                </Box>
              </Box>
            ) : (
              <Box>
                <Flex gap={"10px"} onClick={handleUseVisual} cursor="pointer">
                  <img src={visual} alt="" />
                  <Text fontSize={"18px"}>Visual Planning</Text>
                </Flex>
              </Box>
            )}
             {(number===5) ? (
              <Box>
                <Progress colorScheme='green' value={count} height="5px" width="77%"/>
                <Box className={styles.subUsage}>
                  <Flex gap={"10px"}>
                    <img src={invoice} alt="" />
                    <Text fontSize={"18px"}>Expenses</Text>
                  </Flex>
                  <Box>
                    <Text className={styles.subUsageText}>
                      Track work-related expenses with ease. Reimburse
                      employees, use costs in project budgets, add to client
                      invoices
                    </Text>
                  </Box>
                </Box>
              </Box>
            ) : (
              <Box>
                
                <Flex gap={"10px"} onClick={handleUseExpenses} cursor="pointer">
                  <img src={expenses} alt="" />
                  <Text fontSize={"18px"}>Expenses</Text>
                </Flex>
              </Box>
            )}

            {(number===6) ? (
              <Box>
                <Progress colorScheme='green' value={count} height="5px" width="77%"/>
                <Box className={styles.subUsage}>
                  <Flex gap={"10px"}>
                    <img src={invoice} alt="" />
                    <Text fontSize={"18px"}>Invoicing</Text>
                  </Flex>
                  <Box>
                    <Text className={styles.subUsageText}>
                      Simple and flexible projects billing. Set budgets to track
                      progress in real time. Receive timely notifications
                    </Text>
                  </Box>
                </Box>
              </Box>
            ) : (
              <Box>
                
                <Flex gap={"10px"} onClick={handleUseInvoice} cursor="pointer">
                  <img src={invoice} alt="" />
                  <Text fontSize={"18px"}>Invoicing</Text>
                </Flex>
              </Box>
            )}
            <Button
              width={"150px"}
              p="25px"
              bg="#57bb71"
              color="white"
              fontWeight={400}
            >
              Product tour
            </Button>
          </Stack>
        </GridItem>
        <GridItem>
          {(number===1) && (
            <img src="https://blog-cdn.everhour.com/assets/images/new-design/screens/expenses.webp" />
          )}
          {(number===2) && (
            <img src="https://blog-cdn.everhour.com/assets/images/new-design/screens/projects-dashboard-v2.webp" />
          )}
          {(number===3) && (
            <img src="https://blog-cdn.everhour.com/assets/images/new-design/screens/invoices-preview-v2.webp" />
          )}
          {(number===4) && (
            <img src="https://blog-cdn.everhour.com/assets/images/new-design/screens/projects-board-view-v2.webp" />
          )}
          {(number===5) && (
            <img src="https://blog-cdn.everhour.com/assets/images/new-design/screens/expenses.webp" />
          )}
          {(number===6) && (
            <img src="https://blog-cdn.everhour.com/assets/images/new-design/screens/resource-planning-members-new-v2.webp" />
          )}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default UseCase;
