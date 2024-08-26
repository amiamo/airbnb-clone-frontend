import {
  Box,
  Button,
  HStack,
  IconButton,
  LightMode,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FaAirbnb, FaMoon, FaSun } from "react-icons/fa";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUp";

export default function Header() {
  const {
    isOpen: isLoginOpen,
    onClose: onLoginClose,
    onOpen: onLoginOpen,
  } = useDisclosure();
  const {
    isOpen: isSignUpOpen,
    onClose: onSignUpClose,
    onOpen: onSignUpOpen,
  } = useDisclosure();
  const { toggleColorMode } = useColorMode();
  const logoColor = useColorModeValue("cyan.500", "cyan.700");
  const Icon = useColorModeValue(FaMoon, FaSun);
  return (
    <Stack
      justifyContent={"space-between"}
      alignItems={"center"}
      spacing={{ sm: 3, md: 0 }}
      py={"5"}
      px={{ sm: "10", md: "20", lg: "30", xl: "40" }}
      direction={{
        sm: "column",
        md: "row",
      }}
      borderBottomWidth={"1px"}>
      <Box color={logoColor}>
        <FaAirbnb size={"36px"} />
      </Box>
      <HStack spacing={"1rem"}>
        <IconButton
          onClick={toggleColorMode}
          aria-label='Toggle dark mode'
          icon={<Icon />}
          variant={"ghost"}
        />
        <Button onClick={onLoginOpen}>Log in</Button>
        <LightMode>
          <Button
            onClick={onSignUpOpen}
            colorScheme={"red"}>
            Sign up
          </Button>
        </LightMode>
      </HStack>
      <LoginModal
        isOpen={isLoginOpen}
        onClose={onLoginClose}
      />
      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={onSignUpClose}
      />
    </Stack>
  );
}
