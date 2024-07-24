import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/react.svg";

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="30px"></Image>
      <Text >Navbar</Text>
    </HStack>
  );
};

export default Navbar;
