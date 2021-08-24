import { Flex, IconButton, Text } from '@chakra-ui/react'
import { Sidebar } from 'components/SideBar'
import React from 'react'
import { FiMenu } from 'react-icons/fi'

function Financeiro(props) {
  return (
    <Flex w="100%">
      <Sidebar {...props} />
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
          usercreate.
        </Text>
      </Flex>
    </Flex>
  )
}

export default Financeiro
