import React from 'react'
import {Box, Image, Center,Container, Heading,Text} from '@chakra-ui/react'
import brandLogo from '../assets/logo/logo 1.png'
import {IoLogoInstagram,IoLogoTwitter} from 'react-icons/io'
import {MdEmail} from 'react-icons/md'
import banner from '../assets/screenshots/iosFrame/banner_transparent.png'
const Banner = () => {
  return (
    <Box  >
   <header>
    <Box display='flex' alignItems='center' justifyContent='space-Between' ml={6} mr={6}>
      <Box>
        <Image   boxSize={90} src={brandLogo} alt="Brandlogo" />
      </Box>
      <Box display='flex' ml={6}>
      <IoLogoInstagram color='white' size={20}   />
      <Box ml={6} />
    <IoLogoTwitter color='white' size={20}/>
    <Box ml={6} />
    <MdEmail  color='white' size={20}/>
      </Box>
    </Box>
   </header>
<Center>
   <Box   ml={6} mr={6}>
    <Heading as='h2' color='#FAEAB1'>
    The Smartest Way To Journal Your Trades And Achieve Profitability.
    </Heading>
    <Text mt='6' color='#FAF8F1'>
    Mastering the Art of Journaling for Successful Forex Trading. Maximizing Your Trading Performance Through Journaling
    </Text>
    <Image src={banner}/>
  </Box>




  </Center>

  </Box>

  )
}

export default Banner