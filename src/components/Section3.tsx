import React from 'react';
import {Box, Text, Flex,Image, SimpleGrid} from '@chakra-ui/react'

const Card=(props:any)=>{
    return(
        <Box
        bgColor='rgb(49,55,125)'
        borderRadius='20px'
        pt='30px'
        px='18px'
        pb='40px'
        w={['240px']}
        textColor='white'
        textAlign='center'
        >
            <Flex
            flexDirection={['column']}
            >
                <Image src={props.src}/>
                <Text
                textAlign='center'
                fontWeight='semibold'
                fontSize='xl'
                py='4'
                >{props.text1}</Text>
                <Text>{props.text2}</Text>
                <Box
                border='1px solid'
                borderRadius='30px'
                mt='3'
                py='15px'
                transition='all 0.5s all'
                _hover={{bgGradient:'linear(-65deg, #c165dd,#1153fc)'
                        ,boxShadow:'0 17px 24px 0 rgb(18,83,252,.51)',
                        borderColor:'transparent'
                 }}
                >
                    <Text
                   fontWeight='semibold'
                    >
                        Get Started 
                    </Text>
                </Box>
            </Flex>
        </Box>
    )
}

function Section3() {
    return (
        <Box bgImage='url(images/client-bg.jpg)' pb={[32]}>
            <Flex textAlign='center' py='20' textColor='white' flexDirection='column' justify='center'>
           
            <Text>Describe Your App</Text>
            <Text
            fontSize={['3xl']}
            fontWeight='bold'
            >Let's See How It Work</Text>
            <Text>It's easier than you think. Follow the simple easy steps</Text>
        
            </Flex>
            <Flex justify='center'>
            <SimpleGrid columns={[1,2,2,4]} spacing='10'>
            <Card 
            text1='Download' 
            src='images/how4.png'
            text2='Start using the service immediately after downloading it form our website just in two clicks.'
            />
            <Card 
            text1='Integrate' 
            src='images/how5.png'
            text2='Start using the service immediately after downloading it form our website just in two clicks.'
            />
                <Card 
            text1='Communicate' 
            src='images/how6.png'
            text2='Start using the service immediately after downloading it form our website just in two clicks.'
            />
                <Card 
            text1='Get Results' 
            src='images/how7.png'
            text2='Start using the service immediately after downloading it form our website just in two clicks.'
            />
            </SimpleGrid>
            </Flex>
        </Box>
    )
}

export default Section3
