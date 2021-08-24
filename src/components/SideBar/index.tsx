import React, { useState } from 'react'
import {
  Accordion,
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Heading
} from '@chakra-ui/react'
import { FiMenu, FiDollarSign } from 'react-icons/fi'

import { RiDashboardLine, RiContactsLine, RiGitMergeLine } from 'react-icons/ri'

import { IconType } from 'react-icons'
import AccordionSideBarItem from 'components/AccordionSideBarItem'

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

/*
  Changes
  1) Added props for openItems and function to set open items
  2) Accordion is the container for Accordion items 
  3) There should not be an Accordion per sidebar item 
  4) allowMultiple will allow multiple accordion items to be opened 
  5) items provide on onChange will now be an array of indices 
  6) AccordionSideBar changed to AccordionSideBarItem 
  7) AccordionSideBarItem needs a key - used the current iteration index
*/
const SidebarMemo = (props) => {
  const [navSize, changeNavSize] = useState('large')
  const { openItems, updateItems } = props

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
        <Accordion
          allowToggle
          allowMultiple
          index={openItems}
          onChange={(items: any) => {
            updateItems(items)
          }}
        >
          {LinkItems.map((menu, index) => (
            <AccordionSideBarItem key={index} menu={menu} />
          ))}
        </Accordion>
      </Flex>
    </Flex>
  )
}
export const Sidebar = React.memo(SidebarMemo)
