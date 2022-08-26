import { Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const RightImage = ({RightImageData}) => {
  const {details,imgLink}=RightImageData
  return (
    <Grid templateColumns={"4fr 6fr"}  gap="100px" w="80%"  m={"auto"} mb="70px" alignItems="center">
        <GridItem textAlign={"left"} p={"0px 35px"}>
          <Text fontSize={"2xl"} color={"blackAlpha.700"} fontWeight="200" mb={"10px"}>{details.title}</Text>
          <Text fontSize={"large"} color={"gray.400"}>{details.detail}</Text>
        </GridItem>
        <GridItem>
            <Image src={imgLink} ></Image>
        </GridItem>
       
    </Grid>
  )
}

export default RightImage