import React from 'react'
import googlePlayStore from '../assets/images/download-google.svg'
import {Center, Image,Link} from '@chakra-ui/react'
const Action = () => {
  return (
    <Center>
    
    <Link href='https://play.google.com/store/apps/details?id=com.tukesolutions.fxlog' isExternal>   <Image height='50px' mt={60} mb={20}  src={googlePlayStore}/></Link>
    </Center> 
  )
}

export default Action