import React from 'react'
import {Box, Flex, Text,Image, SimpleGrid} from '@chakra-ui/react'
import {ReactComponent as StarSVG} from '../icons/star.svg';

const Card=()=>{
    return(
        <Flex
        justify='center'
        align='center'
        flexDir='column'
        >
        <Box
        bgColor='rgb(59,54,140)' 
        borderRadius='20px'
        h={['143px']}
        w={['225px']}
        >
            <Text
            textAlign='center'
            textColor='gray.300'
            mt='5'
            px='3'
            fontSize='lg'
            >Perfect work to start on, support is awesome</Text>
            <Flex
             px='5'
            justify='space-around'
            align='center'
            >
            <StarSVG height='20px' width='20px' fill='yellow'/>
            <StarSVG height='20px' width='20px' fill='yellow'/>
            <StarSVG height='20px' width='20px' fill='yellow'/>
            <StarSVG height='20px' width='20px' fill='yellow'/>
            <StarSVG height='20px' width='20px' fill='yellow'/>
            </Flex>
        </Box>
        <Image 
        mt='4'
        src='images/client03.png'/>
        </Flex>

    )
}

const Card1=(props:any)=>{
    return(
        <Box>
        <Text
        textColor='white'
        fontSize={['2xl']}
        fontWeight='bold'
        >
            {props.i}
        </Text>
        <Text
        textColor='gray.200'
        >
            {props.e}
        </Text>
        </Box>
    )
}
function Section5() {
    return (
        <Box
        py='32'
        bgImage='url(images/client-bg.jpg)'
        ><Flex 
        flexDir='column'
        justify='center'
        px={[10,20]}
        >
            <Text
            textColor='gray.100'
            fontSize='xl'
            py={[3]}
            >Testimonials</Text>
            <Text
            textColor='white'
            fontSize={['4xl',]}
            fontWeight='blod'
            > Over 10,000 happy clients</Text>
            <Text
            textColor='gray.300'
            fontSize={['lg']}
            mb={[10]}
            >Everyday reviews from users around the world are an important driver of our team.</Text>
        <SimpleGrid mt='6' columns={[1,2,3]}>
          <Card/>
          <Card/>
          <Box display={['none','none','none','block']}><Card/></Box>
          </SimpleGrid>
          <Box
          bgColor='rgb(49,55,125)'
          borderRadius='30px'
          boxShadow='rgba(60,57,213,.1)'
          mt={['50px']}
          pos='relative'
          >
              <Flex justify='center'>
              <SimpleGrid p='30px' spacingX='3' columns={[1,4]}>
               <Card1 i='45K' e='User'/>
               <Card1 i='90+' e='Countries'/>
               <Card1 i='10+' e='Integrations'/>
               <Card1 i='95%' e='Satifaction'/>
              </SimpleGrid>
              </Flex>
          </Box>
          </Flex>
        </Box>
    )
}

export default Section5
