import React from 'react'
import {Box, Image, Center,Container,Text,Heading} from '@chakra-ui/react'
import addTrade from '../assets/screenshots/iosFrame/add trade.jpg'
import listTrade from '../assets/screenshots/iosFrame/list_trades.jpg'
import tradeDetails from '../assets/screenshots/iosFrame/trade_details.jpg'
import quickAnalytics from '../assets/screenshots/iosFrame/quick_analytics.jpg'
import generalAnalytics from '../assets/screenshots/iosFrame/trade_analytics.jpg'
import report from '../assets/screenshots/iosFrame/trade_report.jpg'
import test from '../assets/screenshots/iosFrame/test.jpg'
const HowToApp = () => {
  return (
    <Box > 
     <Center>
        
          <Heading as='h3' mb={{md:5,lg:8,sm:5,base:5}}  color='white'>
       Why you should use FxLog 
       </Heading>
        </Center>

   <Center>
    
     <Box ml={6} mr={6}  display='flex'  flexDirection={{md:'column',lg:'row',sm:'column',base:'column'}}  >
{/* First Row/Column */}
   
    <Box   boxSize='200px'  pb={{md:0,lg:0,sm:60,base:60}} alignContent='center'  alignItems='center' justifyContent='center' justifyItems='center' >
        <Image width='100%'  src={addTrade} />
    </Box>
    <Box boxSize='200px'  py={{md:0,lg:0,sm:60,base:60}}  alignContent='center'  alignItems='center' justifyContent='center' justifyItems='center' >
        <Image width='100%' src={listTrade} />
    </Box>
    <Box boxSize='200px'  py={{md:0,lg:0,sm:60,base:60}} alignContent='center'  alignItems='center' justifyContent='center' justifyItems='center' >
        <Image width='100%'  src={tradeDetails} />
    </Box>
    </Box>
    </Center>
     <Center>
    
     <Box ml={6} mr={6}  mt={{md:60,lg:60,sm:0,base:0}}  display='flex'  flexDirection={{md:'column',lg:'row',sm:'column',base:'column'}}  >
{/* First Row/Column */}
   
    <Box  boxSize='200px'   py={{md:0,lg:0,sm:60,base:60}} alignContent='center'  alignItems='center' justifyContent='center' justifyItems='center' >
        <Image width='100%'  src={quickAnalytics} />
    </Box>
    <Box boxSize='200px' py={{md:0,lg:0,sm:60,base:60}} alignContent='center'  alignItems='center' justifyContent='center' justifyItems='center' >
        <Image width='100%'  src={generalAnalytics} />
    </Box>
    <Box boxSize='200px'  py={{md:0,lg:0,sm:60,base:60}} alignContent='center'  alignItems='center' justifyContent='center' justifyItems='center' >
        <Image width='100%'  src={report} />
    </Box>
    </Box>
    </Center>
  </Box>
 
  )
}

export default HowToApp