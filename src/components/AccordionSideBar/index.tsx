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
import { useRouter } from 'next/router'

type AccordionSideBarProps = {
  menu: LinkItemProps
  index: number
}

export default function AccordionSideBar({
  menu,
  index
}: AccordionSideBarProps) {
  const router = useRouter()
  const isActiveMenu = router.asPath.startsWith(String(menu.href))

  return (
    <Accordion>
      <NextLink href={menu.opcao ? '#' : menu.href} passHref>
        <AccordionItem color={isActiveMenu ? 'red' : 'blue'}>
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
                <AccordionPanel key={op.href} pb={4}>
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
