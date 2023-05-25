import React from 'react'
import googlePlayStore from '../assets/images/google.svg'
import appleStore from '../assets/images/appstore.svg'
import {Center, Image,Link,Flex} from '@chakra-ui/react'
const Action = () => {
  return (
    <Flex justifyContent='center'>
    
    <Link href='https://play.google.com/store/apps/details?id=com.tukesolutions.fxlog' isExternal>   <Image  mt={60} mb={20}  src={googlePlayStore}/></Link>
    <Link href='https://apps.apple.com/us/app/fxlog/id6447367184' isExternal>   <Image  mt={60} mb={20}  src={appleStore}/></Link>
    </Flex> 
  )
}

export default Action