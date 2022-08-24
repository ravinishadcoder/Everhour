import { Box, Flex, Grid, GridItem, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import styles from './footer.module.css'
import { AiFillTwitterCircle ,AiFillYoutube} from "react-icons/ai";
import { FaFacebook,FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <Box>
        <Flex mr={'50px'} justifyContent={'end'}>
            <img src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/primary-illustrations/footer.jpg" alt="" />
        </Flex>
    <Box className={styles.mainFooter}>
        <Grid templateColumns={'repeat(9,1fr)'} className={styles.subFooter}>
            <GridItem></GridItem>
            <GridItem ml='50px'>
            <img 
            width="30px"
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.trustradius.com%2Fproduct-logos%2Fdy%2Fzk%2FG5MXHRHW9UCZ-180x180.PNG&f=1&nofb=1'/>
            </GridItem>
            <GridItem>
                <VStack gap={'10px'}>
               <Text style={{opacity:0.5}}>Company</Text>
               <Text>About</Text>
               <Text>Contact</Text>
                </VStack>
            </GridItem>
            <GridItem>
                <VStack gap={'10px'}>
                    <Text style={{opacity:0.5}}>Product</Text>
                    <Text>Tour</Text>
                    <Text>Pricing</Text>
                    <Text>Request a demo</Text>
                    <Text>Customers</Text>
                    <Text>API & docs</Text>
                    <Text>Status</Text>
                </VStack>
            </GridItem>
            <GridItem>
            <VStack gap={'10px'}>
                    <Text style={{opacity:0.5}}>Solutions</Text>
                    <Text>Time tracking</Text>
                    <Text>Project budgeting</Text>
                    <Text>Visual planning</Text>
                    <Text>Expenses</Text>
                    <Text>Reporting</Text>
                    <Text>Invoicing</Text>
                    <Text>Time card calculator</Text>
                    <Text>Weekly timesheet template</Text>
                    <Text>Invoice generator</Text>
                </VStack>
            </GridItem>
            <GridItem>
            <VStack gap={'10px'}>
                    <Text style={{opacity:0.5}}>Integrations</Text>
                    <Text>Asana</Text>
                    <Text>Basecamp</Text>
                    <Text>Trello</Text>
                    <Text>Jira</Text>
                    <Text>GitHub</Text>
                    <Text>ClickUp</Text>
                    <Text>Monday</Text>
                    <Text>Notion</Text>
                    <Text>Todoist</Text>
                    <Text>GitLab</Text>
                    <Text>All</Text>
                </VStack>
            </GridItem>
            <GridItem>
            <VStack gap={'10px'}>
                    <Text style={{opacity:0.5}}>Learn</Text>
                    <Text>Resources</Text>
                    <Text>Help center</Text>
                    <Text>Blog</Text>
                    <Text>Product updates</Text>
                    <Text>Timesheet app</Text>
                    <Text>Time clock app</Text>
                    <Text>Attendance tracker</Text>
                    <Text>Work hours tracker</Text>
                    <Text>Employee time tracking</Text>
                    
                </VStack>
            </GridItem>
            <GridItem>
            <VStack gap={'10px'}>
                    <Text style={{opacity:0.5}}>Download</Text>
                    <Text>Browser extension</Text>
                    <Text>Chrome time tracking extension</Text>
                    <Text>Time tracking with screenshots</Text>
                    <Text>iPhone app </Text>
                   
                </VStack>
            </GridItem>
        </Grid>
        <Flex justifyContent={'space-between'}mt='80px'>
         <Box>
         <HStack fontSize={'small'} ml={'150px'}>
            <Text>© 2022 Everhour</Text>
            <Text>Terms |</Text>
            <Text>Privacy |</Text>
            <Text>Cookies |</Text>
            <Text>Sitemap</Text>
         </HStack>
         </Box>
         <Box>
         <HStack mr={'160px'} fontSize='24px' mb={'50px'}>
            <FaFacebook/>
            <AiFillTwitterCircle/>
            <FaLinkedinIn/>
            <AiFillYoutube/>
         </HStack>
         </Box>
        </Flex>
       
    </Box>
    </Box>
  )
}

export default Footer