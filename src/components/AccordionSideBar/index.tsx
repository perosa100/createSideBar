import React, { useState } from 'react'
import {
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react'
import { LinkItemProps } from 'components/SideBar'
import NextLink from 'next/link'
import { useRouter } from 'next/dist/client/router'
type AccordionSideBarProps = {
  menu: LinkItemProps
}

export default function AccordionSideBar({ menu }: AccordionSideBarProps) {
  const router = useRouter()
  const isActiveMenu = router.asPath.startsWith(String(menu.href))
  const [openItems, setOpenItems] = useState([-1])

  return (
    <Accordion
      allowToggle
      index={openItems}
      onChange={(idx: any) => {
        setOpenItems([idx])
      }}
    >
      <NextLink href={menu.opcao ? '' : menu.href} passHref>
        <AccordionItem
          id={menu.href}
          color={isActiveMenu ? 'red' : 'blue'}
          isExpanded={true}
          aria-expanded={isActiveMenu}
          isFocusable={isActiveMenu}
        >
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {menu.name}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          {menu?.opcao &&
            menu.opcao.map((op) => {
              const isActiveOpcao = router.pathname === op.href
              return (
                <AccordionPanel pb={4}>
                  <NextLink href={op.href} passHref>
                    <Link color={isActiveOpcao ? 'red' : 'blue'}>
                      {op.name}
                    </Link>
                  </NextLink>
                </AccordionPanel>
              )
            })}
        </AccordionItem>
      </NextLink>
    </Accordion>
  )
}
