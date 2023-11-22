'use client'
import '@fontsource/lakki-reddy';
import {
  Flex,
  Image,
  Stack,
  Text,
  Heading,
  Link,
} from '@chakra-ui/react';

// import { ExternalLinkIcon } from '@chakra-ui/icons';
import comingsoon from '../assets/SheepHero_RoundFrameOrange600.png'

export default function Hero() {
  return (
    <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }} bgColor='white'>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
      {/* <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            
            </Stack> */}
      {/* <Flex flex={1}>
        <Image
          alt={'HEY DEV: ADD ALT!!! AFTER CHOOSING IMAGE!!'}
          objectFit={'cover'}
          src={
            comingsoon
          }
        />
      </Flex> */}
        <Stack spacing={6} w={'full'} maxW={'lg'}>
        <Heading
  bgGradient='linear(to-l, #e11d48, #c2410c)'
  bgClip='text'
  fontSize='6xl'
  fontWeight='extrabold'
>
  I'm So Excited! 
</Heading>
<Image
          alt={'HEY DEV: ADD ALT!!! AFTER CHOOSING IMAGE!!'}
          objectFit={'cover'}
          src={
            comingsoon
          }
        />
<Text
  bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='4xl'
  fontWeight='extrabold'
>
  Did You Hear That A New Version of Yarn Help! <br></br>is Coming Soon!
</Text>
<Text
color='#6b21a8' 
fontSize='xl'
fontWeight='bold'
// fontStyle={'italic'}
>
The new version is going to have a blog! <br></br>It's being built with Astro, Tailwind, and SQLite.</Text>
<Link href='https://yarnhelp.app' 
    color='#6b21a8' 
    fontSize='xl'
    fontWeight='extrabold'>
   The current version is at https:/yarnhelp.app <br></br>
</Link>


         
        </Stack>
      </Flex>
      
    </Stack>
  )
}