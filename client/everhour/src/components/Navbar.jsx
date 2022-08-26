import asan from "../assests/asan.png";
import clickup from "../assests/clickup.png";
import base from "../assests/base camp.png";
import git from "../assests/github.png";
import monday from "../assests/monday.png";
import pivote from "../assests/pivotal.png";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  HStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function WithSubnavigation() {
  const navigate = useNavigate()
  const { isOpen, onToggle } = useDisclosure();
  const { handleLogOut, isAuth } = useContext(AuthContext);
 
  return (
    <Box padding={"25px"} >
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("white", "white")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            <HStack onClick={()=>navigate("/")} cursor='pointer'>
              <img
                width="30px"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.trustradius.com%2Fproduct-logos%2Fdy%2Fzk%2FG5MXHRHW9UCZ-180x180.PNG&f=1&nofb=1"
              />
              <Text fontSize={"lg"} fontWeight={"semibold"}>
                Everhour
              </Text>
            </HStack>
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          {isAuth ? (
            <>
               <Button
                as={"a"}
                fontSize={"1rem"}
                fontWeight={500}
                variant={"link"}
                onClick={handleLogOut}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                as={"a"}
                fontSize={"1rem"}
                fontWeight={500}
                variant={"link"}
                href={"/login"}
              >
                Login
              </Button>
            </>
          )}

          <Button
            as={"a"}
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
            {isAuth ? "My account" : "Sign up"}
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"md"}
                fontWeight={400}
                color={linkColor}
                _hover={{
                  textDecoration: "underLine",
                
                  color: "#767676",
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, img }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("white.50", "gray.900") }}
    >
      <Stack>
        <Grid templateColumns={"repeat(2,1fr)"} gap="10px">
          <GridItem display={"flex"}>
            <img src={git} alt="" width="20px" />
            <Text>GitHub</Text>
          </GridItem>
          <GridItem display={"flex"}>
            <img src={monday} alt="" height={"18px"} width="20px" />
            <Text>Monday</Text>
          </GridItem>
          <GridItem display={"flex"}>
            <img src={pivote} alt="" width="20px" />
            <Text>Pivotal</Text>
          </GridItem>
          <GridItem display={"flex"}>
            <img src={clickup} alt="" width="20px" />
            <Text>Click Up</Text>
          </GridItem>
          <GridItem display={"flex"}>
            <img src={base} alt="" width="20px" />
            <Text>Basecamp</Text>
          </GridItem>
          <GridItem display={"flex"}>
            <img src={asan} width="20px" alt="" />
            <Text>{label}</Text>
          </GridItem>
        </Grid>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Tour",
  },
  {
    label: "Integrations",
    children: [
      {
        label: "Asana",
        subLabel: "Find your dream design job",
        href: "#",
        img: "../assests/clickup.png",
      },
    ],
  },
  {
    label: "Customers",
    href: "#",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Demo",
    href: "#",
  },
];
