import React from 'react';
import {Box, Flex, Text,Image, SimpleGrid} from '@chakra-ui/react'

const Card=(props:any)=>{
return(
    <Box
    bgColor='#31377d'
    borderRadius='20px'
    p='30px'
    pos='relative'
    textAlign='center'
    w={['80']}
    
    >
        <Box
        bgColor='rgb(32,35,66)'
        borderTopRightRadius='25px'
        borderBottomRightRadius='25px'
        pos='absolute'
        height='50px'
        left='-25px'
        lineHeight='50px'
        textAlign='center'
        top='55px'
        width='160px'
        transform='rotate(90deg)'
        textColor='white'
        >
           <Text>{props.plan}</Text> 
        </Box>
        <Flex 
        flexDirection='column'
        justify='center'
        align='center'
        >
        <Image
        w={['170px']}
        h={['155px']}
        src={props.src}/>

        <Text
        fontWeight='bold'
        fontSize={['xl', '3xl']}
        textColor='white'
        >${props.price}</Text>
        <Text>Per month</Text>
        <Text
        py={['1']}
        >Days of Free Trial</Text>
            <Text
        py={['1']}
        >Cloud Storage</Text>
            <Text
        py={['1']}
        >Regular Updates</Text>
            <Text
        py={['1']}
        >eCommerce Ingetration</Text>
            <Text
        py={['1']}
        >Interface Customization</Text>
           <Box
           w='full'
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


function Section4() {
    return (
        <Box
        py={['10','20','24','32']}
        textAlign='center'
        textColor='white'
        bgImage='url(images/pricing-bg.jpg)'>
            <Text>Choose a plan that's right for you
            </Text>
            <Text
            fontSize='4xl'
            fontWeight='bold'
            >
                Simple Pricing Plans
            </Text>
            <Text
            mb='10'
            >
                We have plans, from fee to paid, that scale with
                your needs. Subscribe to a plan that fils the size of your business.
            </Text>
            <Flex justify='center'>
            <SimpleGrid  spacing='10' columns={[1,1,2,3]}>
            <Card plan='Basic' price='29' src='images/pricing5.png'/>
            <Card plan='Standard' price='50' src='images/pricing6.png'/>
            <Card plan='Premium' price='29' src='images/pricing7.png'/>
            </SimpleGrid>
            </Flex>
        </Box>


    )
}

export default Section4
