import { StarIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Star = () => {
  return (
    <Flex gap="5px" w={"70%"} margin="auto" >
      <Flex gap="5px">
        <StarIcon color="#efbc45" w={5} h={5} />
        <StarIcon color="#efbc45" w={5} h={5} />
        <StarIcon color="#efbc45" w={5} h={5} />
        <StarIcon color="#efbc45" w={5} h={5} />
        <StarIcon color="#e8e8e8" w={5} h={5} />
      </Flex>
      <Text color={"gray.400"}>
        4.5 / 5 that's how people rate Everhour. See what 500+ reviewers are
        saying about us on popular platforms, such as Capterra, G2Crowd, or
        TrustRadius
      </Text>
    </Flex>
  );
};

export default Star;
