import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  useDisclosure,
  Input,
  RadioGroup,
  Stack,
  Radio,
  Select,
  Heading,
  Text,
} from "@chakra-ui/react";

function Modals() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button bg={"#24be6a"} borderRadius="4px" color="white" onClick={onOpen}>
        Create Project
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Project</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired mb="30px">
              <FormLabel>Project Name</FormLabel>
              <Input placeholder="Project name" />
            </FormControl>
            <RadioGroup defaultValue="1" mb="25px">
              <Text fontSize="16px" fontWeight="500">Layout</Text>
              <Stack spacing={5} direction="row" mt="15px">
                <Radio colorScheme="green" value="1">
                  Board
                </Radio>
                <Radio colorScheme="green" value="2">
                  List
                </Radio>
              </Stack>
            </RadioGroup>
            <FormControl mb="30px">
              <FormLabel>Client</FormLabel>
              <Select placeholder="Select client...">
                <option>United Arab Emirates</option>
                <option>Nigeria</option>
              </Select>
            </FormControl>
            <FormControl mb="30px">
              <FormLabel>Privacy</FormLabel>
              <Select placeholder="Select Privacy">
                <option>Public to team</option>
                <option>Only selected members...</option>
              </Select>
            </FormControl>
            <FormControl mb="30px">
              <FormLabel>Members</FormLabel>
              <Select placeholder="Everyone">
                <option>options</option>
                <option>Options</option>
              </Select>
            </FormControl>
            <RadioGroup defaultValue="1">
              <Stack spacing={5} direction="row">
                <Radio colorScheme="green" value="1">
                  Everyone
                </Radio>
                <Radio colorScheme="green" value="2">
                  Only admins
                </Radio>
              </Stack>
            </RadioGroup>
          </ModalBody>

          <ModalFooter display="flex" justify="flex-start" m="20px 0px 20px 0px">
            <Button variant="ghost" bg={"#24be6a"} borderRadius="4px" color="white" mr="10px">Create Project</Button>
            <Button mr={3} onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Modals;
