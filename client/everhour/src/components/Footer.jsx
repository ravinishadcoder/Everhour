import { Box, Flex, Grid, GridItem, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import styles from './footer.module.css'
import { AiFillTwitterCircle ,AiFillYoutube} from "react-icons/ai";
import { FaFacebook,FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <Box>
        {/* <Flex justifyContent={'end'} display={["none","none","none","flex","flex"]}>
            <img src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/primary-illustrations/footer.jpg" alt="" />
        </Flex> */}
    <Box className={styles.mainFooter}>
        <Grid margin="auto" width={["90%","90%","90%","100%","80%"]} templateColumns={['repeat(1,1fr)','repeat(1,1fr)','repeat(5,1fr)','repeat(6,1fr)','repeat(7,1fr)']} className={styles.subFooter}>
            <GridItem display={["none","none","none","block","block"]}>
            <Flex justifyContent="center" >
            <img 
            width="30px"
            alt=""
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.trustradius.com%2Fproduct-logos%2Fdy%2Fzk%2FG5MXHRHW9UCZ-180x180.PNG&f=1&nofb=1'/>
            </Flex>
            </GridItem>
            <GridItem>
            <Flex direction="column" justifyContent="flex-start" gap={'12px'}>
               <Text style={{opacity:0.5}} textAlign="start" fontSize={['lg','lg','md','md','md']}>Company</Text>
               <Text display={["none","none","grid"]} textAlign="start" fontSize={['xs','xs','xs','xs','md']}>About</Text>
               <Text display={["none","none","grid"]} textAlign="start" fontSize={['xs','xs','xs','xs','md']}>Contact</Text>
                </Flex>
            </GridItem>
            <GridItem>
                <Flex direction="column" justifyContent="flex-start" gap={'12px'}>
                    <Text style={{opacity:0.5}} textAlign="start" fontSize={['lg','lg','md','md','md']}>Product</Text>
                    <Text display={["none","none","grid"]}textAlign="start" fontSize={['xs','xs','xs','xs','md']}>Tour</Text>
                    <Text display={["none","none","grid"]}textAlign="start" fontSize={['xs','xs','xs','xs','md']}>Pricing</Text>
                    <Text display={["none","none","grid"]}textAlign="start" fontSize={['xs','xs','xs','xs','md']}>Request a demo</Text>
                    <Text display={["none","none","grid"]}textAlign="start" fontSize={['xs','xs','xs','xs','md']}>Customers</Text>
                    <Text display={["none","none","grid"]}textAlign="start" fontSize={['xs','xs','xs','xs','md']}>API & docs</Text>
                    <Text display={["none","none","grid"]}textAlign="start" fontSize={['xs','xs','xs','xs','md']}>Status</Text>
                </Flex>
            </GridItem>
            <GridItem>
            <Flex direction="column" justifyContent="flex-start" gap={'12px'}>
                    <Text style={{opacity:0.5}}textAlign="start" fontSize={['lg','lg','md','md','md']}>Solutions</Text>
                    <Text display={["none","none","grid"]}textAlign="start" fontSize={['xs','xs','xs','xs','md']}>Time tracking</Text>
                    <Text display={["none","none","grid"]}textAlign="start" fontSize={['xs','xs','xs','xs','md']}>Project budgeting</Text>
                    <Text display={["none","none","grid"]}textAlign="start" fontSize={['xs','xs','xs','xs','md']}>Visual planning</Text>
                    <Text display={["none","none","grid"]}textAlign="start" fontSize={['xs','xs','xs','xs','md']}>Expenses</Text>
                    <Text display={["none","none","grid"]}textAlign="start" fontSize={['xs','xs','xs','xs','md']}>Reporting</Text>
                    <Text display={["none","none","grid"]}textAlign="start" fontSize={['xs','xs','xs','xs','md']}>Invoicing</Text>
                    <Text display={["none","none","grid"]}textAlign="start" fontSize={['xs','xs','xs','xs','md']}>Time card calculator</Text>
                    <Text display={["none","none","grid"]}textAlign="start" fontSize={['xs','xs','xs','xs','md']}>Weekly timesheet template</Text>
                    <Text display={["none","none","grid"]}textAlign="start" fontSize={['xs','xs','xs','xs','md']}>Invoice generator</Text>
                </Flex>
            </GridItem>
            <GridItem>
            <Flex direction="column" justifyContent="flex-start" gap={'12px'}>
                    <Text style={{opacity:0.5}} textAlign="start" fontSize={['lg','lg','md','md','md']}>Integrations</Text>
                    <Text display={["none","none","grid"]} textAlign="start" fontSize={['xs','xs','xs','xs','md']}>Asana</Text>
                    <Text display={["none","none","grid"]} textAlign="start" fontSize={['xs','xs','xs','xs','md']}>Basecamp</Text>
                    <Text display={["none","none","grid"]} textAlign="start" fontSize={['xs','xs','xs','xs','md']}>Trello</Text>
                    <Text display={["none","none","grid"]} textAlign="start" fontSize={['xs','xs','xs','xs','md']}>Jira</Text>
                    <Text display={["none","none","grid"]} textAlign="start" fontSize={['xs','xs','xs','xs','md']}>GitHub</Text>
                    <Text display={["none","none","grid"]} textAlign="start" fontSize={['xs','xs','xs','xs','md']}>ClickUp</Text>
                    <Text display={["none","none","grid"]} textAlign="start" fontSize={['xs','xs','xs','xs','md']}>Monday</Text>
                    <Text display={["none","none","grid"]} textAlign="start" fontSize={['xs','xs','xs','xs','md']}>Notion</Text>
                    <Text display={["none","none","grid"]} textAlign="start" fontSize={['xs','xs','xs','xs','md']}>Todoist</Text>
                    <Text display={["none","none","grid"]} textAlign="start" fontSize={['xs','xs','xs','xs','md']}>GitLab</Text>
                    <Text display={["none","none","grid"]} textAlign="start" fontSize={['xs','xs','xs','xs','md']}>All</Text>
                </Flex>
            </GridItem>
            <GridItem>
            <Flex direction="column" justifyContent="flex-start" gap={'12px'}>
                    <Text style={{opacity:0.5}} textAlign="start" fontSize={['lg','lg','md','md','md']}>Learn</Text>
                    <Text display={["none","none","grid"]} textAlign="start" fontSize={['xs','xs','xs','xs','md']}>Resources</Text>
                    <Text display={["none","none","grid"]} textAlign="start" fontSize={['xs','xs','xs','xs','md']}>Help center</Text>
                    <Text display={["none","none","grid"]} textAlign="start" fontSize={['xs','xs','xs','xs','md']}>Blog</Text>
                    <Text display={["none","none","grid"]} textAlign="start" fontSize={['xs','xs','xs','xs','md']}>Product updates</Text>
                    <Text display={["none","none","grid"]} textAlign="start" fontSize={['xs','xs','xs','xs','md']}>Timesheet app</Text>
                    <Text display={["none","none","grid"]} textAlign="start" fontSize={['xs','xs','xs','xs','md']}>Time clock app</Text>
                    <Text display={["none","none","grid"]} textAlign="start" fontSize={['xs','xs','xs','xs','md']}>Attendance tracker</Text>
                    <Text display={["none","none","grid"]} textAlign="start" fontSize={['xs','xs','xs','xs','md']}>Work hours tracker</Text>
                    <Text display={["none","none","grid"]} textAlign="start" fontSize={['xs','xs','xs','xs','md']}>Employee time tracking</Text>
                    
                </Flex>
            </GridItem>
            <GridItem>
            <Flex direction="column" justifyContent="flex-start" gap={'12px'}>
                    <Text style={{opacity:0.5}} textAlign="start" fontSize={['lg','lg','md','md','md']}>Download</Text>
                    <Text display={["none","none","none","grid"]} textAlign="start" fontSize={['xs','xs','xs','xs','md']}>Browser extension</Text>
                    <Text display={["none","none","none","grid"]} textAlign="start" fontSize={['xs','xs','xs','xs','md']}>Chrome time tracking extension</Text>
                    <Text display={["none","none","none","grid"]} textAlign="start" fontSize={['xs','xs','xs','xs','md']}>Time tracking with screenshots</Text>
                    <Text display={["none","none","none","grid"]} textAlign="start" fontSize={['xs','xs','xs','xs','md']}>iPhone app </Text>
                   
                </Flex>
            </GridItem>
        </Grid>
        <Flex width={["90%","70%"]} margin="auto" alignItems={"center"} gap="2rem" direction={["column","column","row","row","row"]} justifyContent={'space-between'}mt='80px'>
         <Box>
         <Flex gap="2rem" alignItems={"center"} justifyContent="center" direction={["column","column","row","row","row"]} fontSize={'small'}>
            <Text>© 2022 Everhour</Text>
            <Text>Terms |Privacy |Cookies |Sitemap</Text>
         </Flex>
         </Box>
         <Box>
         <HStack fontSize='24px' mb={'50px'}>
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