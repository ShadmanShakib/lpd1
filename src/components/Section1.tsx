import React from 'react';
import {Box, Flex, Text, Image} from '@chakra-ui/react'

function Section1({handleClick}:any) {
   


    return (
        <Box 
        pos='relative'
        bgImage='url(images/banner-10.jpg)'
        overflowX='hidden'
        textColor='white'
        pt={['100px','100px','100px','150px']}
        pb={['100px']}
        onClick={handleClick}
        >
           


            {/* Image and text */}
            <Flex
            justify='center'
            align='center'
            >
        <Flex flexDirection='column'
        ml={[0,0,0,'100px']}
        
        >
            <Text
            ml={[3,6,9,0]}
             fontSize={['48px','48px','5xl']}
             fontWeight='bold'
            >Where everything comes together</Text>
            <Text
            mt={['10px']}
            mb={'25px'}
            ml={[3,6,9,0]}

            >
                The simple, intuitive and powerful app to manage your work
            </Text>
            <Box
            my='10px'
            ml={[3,6,9,0]}
            bgGradient='linear-gradient(-65deg,#c165dd,#1153fc)'
            borderRadius='30px'
            cursor='pointer'
            transition='all 0.3s ease'
            w={['240px']}
            py={['15px']}
            
            >
                <Text
                fontWeight='bold'
                textAlign='center'
                

                >
                    START USING FOR FREE
                </Text>
            </Box>
            <Box
            border='1px solid  '
            borderColor='gray.500'
            w={['240px']}
            borderRadius='30px'
            mx='10px'
            ml={[3,6,9,0]}
            py={['15px']}
            px='30px'
            >
                <Text
                fontWeight='bold'
                textAlign='center'
                
                
                >
                    EXPLORE FEATURES
                </Text>
            </Box>
            </Flex>
            <Image
            display={['none','none','none','block']}
            transform='translateX(100px)'
             src='images/banner10.png'/>
          </Flex>
    
        </Box>
    )
}

export default Section1
