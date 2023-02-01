"use client"
import { ChakraProvider,extendTheme } from '@chakra-ui/react';
import Features from './Features';
import Header from './Header';
import Pricing from './Pricing';


const theme = extendTheme({
  styles:{
    global:{
      body:{
        color:"white",
        bg:"white"
      }
    }
    }
})

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Header/>
      <Pricing/>
      <Features/>
    </ChakraProvider>
  )
}
