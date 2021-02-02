import React from 'react';
import {Box, Flex, Text, Image, SimpleGrid} from '@chakra-ui/react'
import {ReactComponent as FacebookSVG} from '../icons/facebook.svg'
import {ReactComponent as InstagramSVG} from '../icons/instagram.svg'
import {ReactComponent as TwitterSVG} from '../icons/Twitter.svg'
import {ReactComponent as PinterestSVG} from '../icons/pinterest.svg'
import {ReactComponent as LinkedinSVG} from '../icons/linkedin.svg'
function Footer() {
    return (
        <Box
        bgImage='url(images/footer-bg.jpg)'
        >
            <Image src='images/footer-shape.png'/>
            <Text
             textAlign='center'
             textColor='white'
             fontSize={['4xl']} 
             bgGradient='linear(-65deg, #c165dd,#1153fc)'
             bgClip='text'
             mb='3'
             >Shadman Shakib</Text>
         <Flex justify='center'
         pb={[10]}
         >
            
             <SimpleGrid columns={[5]} 
             spacingX={[10]}
             justifyItems='center '>
             <FacebookSVG height='20px' width='20px' fill='white' />
             <InstagramSVG height='20px' width='20px' fill='white'/>
             <TwitterSVG   height='20px' width='20px'fill='white' />
             <PinterestSVG  height='20px' width='20px'fill='white' />
             <LinkedinSVG   height='20px' width='20px' fill='white'/> 
             </SimpleGrid>
        </Flex>   
        </Box>
    )
}

export default Footer
