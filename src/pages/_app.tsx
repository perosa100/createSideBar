import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import { AppProps } from 'next/app'
import { useState } from 'react'

/*
 1) Need global state for the accordion openItems to persist across url changes
 2) Open items and function to update the array of open items are passed as props
    to the pages
 3) Don't need ResetCSS in ChakraProvider. It's true by default.
 4) Could eliminate passing props to each page by creating a provider which holds
    the state in its context. Pages could then access the context through a function
    like `useSidebarOpenItems` or whatever you like.
*/
function MyApp({ Component, pageProps }: AppProps) {
  const [openItems, setOpenItems] = useState([])

  const updateItems = (items) => {
    setOpenItems([...items])
  }

  return (
    <ChakraProvider theme={theme}>
      <Component
        {...pageProps}
        openItems={openItems}
        updateItems={updateItems}
      />
    </ChakraProvider>
  )
}

export default MyApp
