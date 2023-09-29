import { HStack, Image, Text } from '@chakra-ui/react'
import Logo from "../assets/GameHub Resources/Logo/logo.webp"


const Navbar = () => {
  return (
    <HStack>
      <Image src={Logo} boxSize={'60px'}/>
      <Text>Navbar</Text>
    </HStack>
  )
}

export default Navbar