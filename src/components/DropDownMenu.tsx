import React from 'react';
import {Box, } from '@chakra-ui/react'
interface DropDownMenuItf{
    isOpen:boolean
}

function DropDownMenu({isOpen}:DropDownMenuItf) {
    return (
        <Box
        pos='absolute'
        zIndex='1'
        textColor='white'
        display={[`${isOpen?'block':'none'}`,`${isOpen?'block':'none'}`,`${isOpen?'block':'none'}`,'none']}
        transition='all 0.5s ease'
        animation='menuanimation 0.2s linear'
        top={['65px','70px']}
        bgColor='purple.500'
        w='full'
        fontSize='lg'
        fontWeight='semibold'
        >
         <Box
         px='3'
         py='1'
         borderBottom='1px solid'
         borderColor='gray.400'
         
         >Home</Box> 
         <Box
         
         px='3'
         py='1'
         borderBottom='1px solid'
         borderColor='gray.400'
         
         >Feature</Box> 
         <Box
         px='3'
         py='1'
         borderBottom='1px solid'
         borderColor='gray.400'
         
         >Pricing</Box> 
         <Box
         px='3'
         py='1'
         borderBottom='1px solid'
         borderColor='gray.400'
         >Pages</Box>
         <Box
        px='3'
        py='1'
        borderBottom='1px solid'
        borderColor='gray.400'
        
         > Blog</Box>
         <Box
         px='3'
         py='1'
       pb='1'
       
         >Contact</Box>
        </Box>
    )
}

export default DropDownMenu
