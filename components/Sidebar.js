import { Flex, Text } from '@chakra-ui/layout'
import { Avatar } from "@chakra-ui/avatar"
import { Button, IconButton } from "@chakra-ui/button"
import { ArrowLeftIcon } from "@chakra-ui/icons"
import { signOut } from 'firebase/auth'
import { auth } from '../firebaseconfig'
import { useAuthState } from 'react-firebase-hooks/auth'

const Chat = () => {
  return (
    <Flex p={3} align="center" _hover={{bg: "gray.100", cursor: "pointer"}}>
      <Avatar src="" marginEnd={3} />
      <Text>ipsum@gmail.com</Text>
    </Flex>
  )
}


export default function Sidebar() {
  const [user] = useAuthState(auth);
  console.log(user.photoURL)

  return (
    <Flex
      // bg="blue.100"
      w="300px"
      borderEnd="1px solid" borderColor="gray.200"
      direction="column"
      h="100%"
    >
      
      <Flex
        // bg="red.100"
        h="81px" w="100%"
        align="center" justifyContent="space-between"
        borderBottom="1px solid" borderColor="gray.200"
        p={3}
      >

        <Flex align="center">
          <Avatar src={user.photoURL} marginEnd={3} />
          <Text>{user.displayName}</Text>
        </Flex>

        <IconButton size="sm" isRound icon={<ArrowLeftIcon />} onClick={() => signOut(auth)} title="Sign Out" />

      </Flex>

      <Button m={5} p={4} >New Chat</Button>

      <Flex overflowX="scroll" direction="column" sx={{'::-webkit-scrollbar': {display:'none'}}} flex={1}>
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
      </Flex>

    </Flex>
  )
}