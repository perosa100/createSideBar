import { Flex, IconButton, Text } from '@chakra-ui/react'
import { Sidebar } from 'components/SideBar'
import React from 'react'
import { FiMenu } from 'react-icons/fi'

function UserCreate() {
  return (
    <Flex w="100%">
      <Sidebar />

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
  )
}

export default UserCreate
