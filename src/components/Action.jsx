import React from 'react'
import googlePlayStore from '../assets/images/download-google.svg'
import appleStore from '../assets/images/appstore.svg'
import {Center, Image,Link,Flex} from '@chakra-ui/react'
const Action = () => {
  return (
    <Flex>
    
    <Link href='https://play.google.com/store/apps/details?id=com.tukesolutions.fxlog' isExternal>   <Image height='50px' mt={60} mb={20}  src={googlePlayStore}/></Link>
    <Link href='https://apps.apple.com/us/app/fxlog/id6447367184' isExternal>   <Image height='70px' mt={60} mb={20}  src={appleStore}/></Link>
    </Flex> 
  )
}

export default Action