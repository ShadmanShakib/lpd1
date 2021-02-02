import React from 'react'
import '../css/section2.css'
import {Box, Text, Flex,Image , SimpleGrid} from '@chakra-ui/react'

const CircleImage=(props:any)=>{
    return(
       
            <Box>
        <Box
        p='4'
        w='24'
        rounded='full'
        pos='relative'
        >
            <Box
            w=''
          border='3px solid '
            pos='absolute'
            bgColor='transparent'
            rounded='full'
            top='0'
            bottom='0'
            right='0'
            left='0'
            className='circle'
            
            >
                
            </Box>
        <Image  src={props.src}></Image>
        
        </Box>
        <Box
        
        fontSize={['lg']}
        fontWeight='semibold'
        textColor='white'
        textAlign='center'
        mt='2'
         >{props.text}</Box>
        </Box>
       
    )

}

function Section2() {
    return (
        <Box
        bgColor='purple.800'
        textColor='white'
        overflowX='hidden' 
        py='32'

        >
            <Text textAlign='center'> Trusted By:</Text>
          <Flex >
          
            <Image 
           display={['none','none','none','block']}
             src='images/recharge.png'/>
           
            <Box >
                {/* Texts */}
            <Box ml={[3,6,9]}>
            <Box
            textColor='#ff8a00'
            fontWeight='bold'
            fontSize='xl'
            >Apps that will recharge your business</Box>
           
            <Text
            fontWeight='bold'
            textColor='white'
            fontSize={['3xl','5xl']}
            > Ready to transfrom  your business</Text>
            <Text
            fontSize={['lg']}
            mb='10'
            >

                In the process of making a app, the satisfaction of users is the most important thing to our goal</Text>
                </Box>
            <Flex justify='center'>
                  <SimpleGrid columns={[2,2,4,4]}
                  spacing={[10]}
                  >
            <CircleImage text='Producivity' src='images/1a.png'/>
            <CircleImage text='Optimization' src='images/2a.png'/>
            <CircleImage text='Safety' src='images/3a.png'/>
            <CircleImage text='Sustainability' src='images/4a.png'/>
            <CircleImage text='Compliance' src='images/5a.png'/>
            <CircleImage text='Integrations'  src='images/6a.png'/>
            <CircleImage text='Expandability'   src='images/7a.png'/>
            <CircleImage  text='Multilingual' src='images/8a.png'/>
            </SimpleGrid>
            </Flex>
            </Box>
              </Flex>
              
        </Box>
    )
}

export default Section2
