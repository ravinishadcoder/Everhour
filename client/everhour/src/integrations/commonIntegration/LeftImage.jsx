import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'

const LeftImage = ({LeftImageData}) => {
  const {details,imgLink}=LeftImageData

  return (
    <Grid templateColumns={"6fr 4fr"}  gap="100px" w="80%"  m={"auto"} mb="70px" alignItems="center">
        
        <GridItem>
            <Image src={imgLink} ></Image>
        </GridItem>
        <GridItem textAlign={"left"} p={"0px 35px"}>
          <Text fontSize={"2xl"} color={"blackAlpha.700"} fontWeight="200" mb={"10px"}>{details.title}</Text>
          <Text fontSize={"large"} color={"gray.400"}>{details.detail}</Text>
        </GridItem>
       
    </Grid>
  )
}

export default LeftImage