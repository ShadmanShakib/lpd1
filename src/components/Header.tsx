import React, {} from 'react';
import DropDownMenu from './DropDownMenu'
import {Box,  Flex} from '@chakra-ui/react'
import '../css/header.css'

const MenuItemFun=(props:any)=>{
    return(
        <Box
        fontWeight='semibold'
        transition='all 0.2s ease'
      _hover={{transform:'scale(1.1)'}}
            pos='relative'
          display={['none','none','none','block']}
            >{props.item}</Box>
    )
}

//mobile menu button when isOpen===false
const mobileMenuOpen=<Box pos="relative">
               <Box
height='3px'
w='25px'
bgColor='purple.500'
cursor='pointer'
pos='absolute'
transition='all 0.3s ease'

top={[-2]}
></Box> 
<Box
height='3px'
w='25px'
bgColor='purple.500'
cursor='pointer'
pos='absolute'
transition='all 0.3s ease'
lineHeight='28px'
top={[0]}

></Box>
<Box
height='3px'
w='25px'
bgColor='purple.500'
cursor='pointer'
pos='absolute'
transition='all 0.3s ease'
lineHeight='28px'
top={[2]}

></Box>      
    
</Box>
//isOpen===true
const mobileMenuClose=
<Box  pos='relative'>
<Box
height='3px'
w='25px'
bgColor='purple.500'
cursor='pointer'
pos='absolute'
transition='all 0.3s ease'

top={[-2]}
transform='rotate(45deg) translate(3px,9px)'
></Box> 
<Box
height='3px'
w='25px'
bgColor='purple.500'
cursor='pointer'
pos='absolute'
transition='all 0.3s ease'
lineHeight='28px'
top={[2]}

transform='rotate(-45deg) translate(3px,-9px) '
></Box> 
</Box>

function Header({isOpen, handleOpen}:any) {
    
 
    return (
       <Box zIndex={isOpen?'2':'1'} pos='fixed' w='100vw'>
     <Box
     pos='fixed'
    zIndex='2'
    top='0'
    left='0'
    right='0'
    textColor='purple.500'
    shadow='md'
    bgAttachment='scroll'
    bgColor='white'
    maxW='100vw'
    overflowX='hidden'
    py={[4]}
      >
            <Flex
            align='center'
            justify={['space-around']}
        
            >
            <Box
            textColor='blue.600'
            fontSize={['xl','2xl']}
            transition='all 0.3s ease'
            _hover={{transform:'scale(1.2)'}}

            > Shadman Shakib</Box>

           <MenuItemFun item="Home"/>
           <MenuItemFun item="Feature"/>
           <MenuItemFun item="Pricing"/>
           <MenuItemFun item="Pages"/>
           <MenuItemFun item="Blog"/>
           <MenuItemFun item="Contact"/>

           {/* Mobile Menu button */}
           <Box display={['block','block','block','none']} onClick={handleOpen}>
           {isOpen?mobileMenuClose:mobileMenuOpen}
         
           </Box>
          
      
            </Flex>


        </Box> 
        <DropDownMenu isOpen={isOpen}/> 
        </Box>
     


        
    )
}

export default Header
