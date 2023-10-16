'use client'
// import '@fontsource/architects-daughter';
import {
  Flex,
  Image,
  Stack,
  Text,
  Heading,
  Link,
} from '@chakra-ui/react';

// import { ExternalLinkIcon } from '@chakra-ui/icons';
// import makingcode from '../assets/crew-4Hg8LH9Hoxc-unsplash.jpg'
// import forestpath from '../assets/mitchell-hartley-UiRwwOz3sNs-unsplash.jpg'
// import nowhere from '../assets/cdd20-4UlxniRxlHc-unsplash.jpg'
import doinggreat from '../assets/jon-tyson-OZz8TK8T8MM-unsplash.jpg'

export default function Hero() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} bgColor='black'>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
        <Heading
  bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='6xl'
  fontWeight='extrabold'
>
  302 Redirect 
</Heading>
<Text
  bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='4xl'
  fontWeight='extrabold'
>
  Don't worry! <br></br>You're doing great. <br></br>The site you're looking for is under development. 
</Text>
<Link href='https://gingerkiwi.blog' 
    color='white' 
    fontSize='2xl'
    fontWeight='extrabold'>
  Visit The Ginger Kiwi Blog: <br></br>Exploring Technology, Accessibility, and Design
</Link>
<Text
color='white' 
fontSize='1xl'
fontWeight='bold'
fontStyle={'italic'}
>There's likely a post about the site you're looking for.</Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'HEY DEV: ADD ALT!!! AFTER CHOOSING IMAGE!!'}
          objectFit={'cover'}
          src={
            doinggreat
          }
        />
      </Flex>
    </Stack>
  )
}