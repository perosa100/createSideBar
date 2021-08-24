import { Flex, Text, IconButton } from '@chakra-ui/react'
import Sidebar from 'components/SideBar'

import { FiMenu } from 'react-icons/fi'

export default function Home() {
  return (
    <Flex w="100%">
      <Sidebar />
      <Flex
        pos="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <Text>
          Click the
          <IconButton
            aria-label="test"
            background="none"
            _hover={{ background: 'none' }}
            icon={<FiMenu />}
          />
          to resize the vertical navigation bar.
        </Text>
      </Flex>
    </Flex>
  )
}
