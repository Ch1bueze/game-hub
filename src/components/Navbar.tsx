import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/GameHub Resources/Logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding={"10px"}>
      <Image src={Logo} boxSize={"60px"} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
