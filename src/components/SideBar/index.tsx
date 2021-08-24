import React, { useState } from 'react'
import { Flex, IconButton } from '@chakra-ui/react'
import { FiMenu, FiDollarSign } from 'react-icons/fi'

import { RiDashboardLine, RiContactsLine, RiGitMergeLine } from 'react-icons/ri'

import { IconType } from 'react-icons'
import AccordionSideBar from 'components/AccordionSideBar'

export interface LinkItemProps {
  name: string
  icon: IconType
  href: string
  opcao?: {
    name: string
    icon: IconType
    href: string
  }[]
}

const LinkItems: Array<LinkItemProps> = [
  {
    name: 'Dashboard',
    icon: RiDashboardLine,
    href: '/dashboard'
  },
  {
    name: 'Usuários',
    icon: RiContactsLine,
    href: '/users',
    opcao: [
      {
        name: 'create',
        icon: RiGitMergeLine,
        href: '/users/create'
      },
      {
        name: 'list',
        icon: RiGitMergeLine,
        href: '/users/list'
      }
    ]
  },
  { name: 'Financeiro', icon: FiDollarSign, href: '/financeiro' },
  {
    name: 'Contratos',
    icon: RiGitMergeLine,
    href: '/contratos',
    opcao: [
      {
        name: 'Criação',
        icon: RiGitMergeLine,
        href: '/contratos/criacao'
      },
      {
        name: 'Listagem',
        icon: RiGitMergeLine,
        href: '/contratos/listar'
      }
    ]
  }
]

export default function Sidebar() {
  const [navSize, changeNavSize] = useState('large')

  return (
    <Flex
      pos="sticky"
      left="5"
      h="95vh"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize == 'small' ? '15px' : '30px'}
      w={navSize == 'small' ? '75px' : '200px'}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == 'small' ? 'center' : 'flex-start'}
        as="nav"
      >
        <IconButton
          aria-label="test"
          background="none"
          mt={5}
          _hover={{ background: 'none' }}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize == 'small') changeNavSize('large')
            else changeNavSize('small')
          }}
        />

        {LinkItems.map((menu, index) => (
          <AccordionSideBar key={menu.name} menu={menu} index={index} />
        ))}
      </Flex>
    </Flex>
  )
}
