import {useState} from 'react'
import { ChakraProvider ,Box} from '@chakra-ui/react'
import Header from './components/Header'
import Footer from './components/Footer'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Section6 from './components/Section6';


function App() {
  const [isOpen,setIsOpen]=useState(false)
  const handleOpen=()=>{
    setIsOpen(!isOpen)
  }

  const handleClick=()=>{
    if(isOpen){

      setIsOpen(false)
    }
  }
  return (
    <ChakraProvider>
    <Box pos='relative'  >
   <Header isOpen={isOpen}  handleOpen={handleOpen}  />
   <Section1 handleClick={handleClick}/>
   <Section2/>
   <Section3/>
   <Section4/>
   <Section5/>
   <Section6/> 
   <Footer/>

    </Box>
    </ChakraProvider>
  );
}

export default App;
