import { Box, Image,Grid, GridItem,Flex, Spacer, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const WhyPageIntegration = ({whydata}) => {
 const {imglink,detaildata,maintitle}=whydata
  return (
   <Flex mt={"100px"}>
    <Box w={"30%"}>
        <Heading>{maintitle}</Heading>
        <Image src={imglink} h="65%" mt={20}></Image>
    </Box>
    <Grid w="60%" templateColumns='repeat(2, 1fr)'justifyContent={"space-between"} gap={10} margin="0 auto">
       {detaildata.map((el,index)=>{
        return <GridItem key={index} >
          <Heading size={"md"}>{el.title}</Heading>
          <Text p="20px" fontSize={"20px"}>{el.details}</Text>
        </GridItem>
       })}
    </Grid>

   </Flex>
  )
}

export default WhyPageIntegration