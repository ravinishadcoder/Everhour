import {
  Box,
  Button,
  Collapse,
  Flex,
  Heading,
  HStack,
  Spacer,
  Stack,
  StackDivider,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import React from "react";

const Collapsee = ({ el }) => {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: false });
  return (
    <Stack  divider={<StackDivider borderColor="gray.200" />}>
      <HStack onClick={()=>onToggle()} p={"20px"}>
       <Box fontSize="l">
        <Heading size={"s"}>{el.title}</Heading>
        </Box>
        <Spacer/>
       <Box alignSelf={"right"}>
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </Box>
       </HStack>
      <Collapse in={isOpen} animateOpacity>
        {el.detail}
      </Collapse>
    </Stack>
  );
};

export default Collapsee;
