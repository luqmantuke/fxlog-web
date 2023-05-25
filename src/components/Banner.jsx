import React from 'react'
import {Box, Image, Center, Heading,Text,Link,Flex} from '@chakra-ui/react'
import brandLogo from '../assets/logo/logo 1.png'
import {IoLogoInstagram,IoLogoTwitter} from 'react-icons/io'
import {MdEmail} from 'react-icons/md'
import banner from '../assets/screenshots/iosFrame/banner_transparent.png'
import googlePlayStore from '../assets/images/google.svg'
import appleStore from '../assets/images/appstore.svg'
const Banner = () => {
  return (
    <Box  >
   <header>
    <Box display='flex' alignItems='center' justifyContent='space-Between' ml={6} mr={6}>
      <Box>
        <Image   boxSize={90} src={brandLogo} alt="Brandlogo" />
      </Box>
      <Box display='flex' ml={6}>
      <Link href='https://instagram.com/fxlogapp' isExternal> <IoLogoInstagram color='white' size={20}   /></Link>
      <Box ml={6} />
      <Link href='https://twitter.com/fxlogapp' isExternal>  <IoLogoTwitter color='white' size={20}/></Link>
    <Box ml={6} />
    <Link href='mailto:support@fxlogapp.com' isExternal>  <MdEmail  color='white' size={20}/></Link>
      </Box>
    </Box>
   </header>

   <Box  alignContent='center' alignItems='center' textAlign='center'   ml={6} mr={6}>

    <Heading as='h2' color='#FAEAB1'>
    The Smartest Way To Journal Your Trades And Achieve Profitability.
    </Heading>
     <Text mt={{md:6,lg:6,sm:8,base:8 }}  color='#FAF8F1'>
    Mastering the Art of Journaling for Successful Forex Trading. Maximizing Your Trading Performance Through Journaling
    </Text>
    <Image  mt={{md:6,lg:6,sm:8,base:8 }}   src={banner}/>
  
   <Flex justifyContent='center'>
    
   <Link href='https://play.google.com/store/apps/details?id=com.tukesolutions.fxlog' isExternal><Image height='50px' my={{md:5,lg:8,sm:5,base:5}}  src={googlePlayStore}/></Link>
   <Link href='https://apps.apple.com/us/app/fxlog/id6447367184' isExternal><Image height='50px' my={{md:5,lg:8,sm:5,base:5}}  src={appleStore}/></Link>
    </Flex> 
    
    

  </Box>




  

  </Box>

  )
}

export default Banner