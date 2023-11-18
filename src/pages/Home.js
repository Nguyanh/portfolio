import Title from '../components/Title';
import Contact from '../components/Contact';
import Job from '../components/Job';
import { VStack, Text, Box, Show, Link } from '@chakra-ui/react';

function Home(props) {
    // Thu Nguyen
    var thu = {
        name: 'Thu Nguyen',
        currRole: 'Computer Science at UC Berkeley',
        description: 'PLACEHOLDER'
    }

    // NRO
    var nro = {
        company: 'NRO',
        dates: ['June', '2023', 'Aug', '2023'],
        position: 'Systems Engineering Intern',
        description: 'PLACEHOLDER',
        skills: ['AWS']
    };

    //  Berkeley AI
    var ai = {
        company: 'UC Berkeley',
        dates: ['Jan', '2022', 'Dec', '2022'],
        position: 'Teaching Assistant',
        description: 'PLACEHOLDER',
        skills: ['Python', 'NumPy']
    };

    // Portfolio Website
    var portfolio = {
        name: 'Portfolio Website',
        description: 'PLACEHOLDER',
        skills: ['React', 'Chakra UI', 'HTML/CSS', 'JavaScript', 'Figma']
    };

    // Pintos
    var pintos = {
        name: 'Pintos Operating System',
        description: 'PLACEHOLDER',
        skills: ['C']
    };

    // Secure File Sharing System
    var fileSharing = {
        name: 'Secure File Sharing System',
        description: 'PLACEHOLDER',
        skills: ['Golang']
    }

    // SnackMatch
    var snackMatch = {
        name: 'SnackMatch',
        description: 'PLACEHOLDER',
        skills: ['React', 'Chakra UI', 'HTML/CSS', 'JavaScript', 'Figma']
    }

    // The Escape
    var theEscape = {
        name: 'The Escape',
        description: 'PLACEHOLDER',
        skills: ['Java']
    }

    return (
        <Box
            as='full'
            mt='10%'
            mb='10%'
            ml='10%'
            mr='10%'
            display={{ md: 'flex' }}
        >
            <VStack
                align='left'
                spacing='5rem'
                pos='fixed'
                h='100%'
                mr='60%'
            >
                <Title info={thu} />
                <Show above='lg'>
                    <Text>HI</Text>
                </Show>
                <Contact/>
            </VStack>
            <VStack ml='40%'>
                <Text>
                    Description
                </Text>
                <Box>
                    <Text>
                        Experience
                    </Text>
                    <Job info={nro}/>
                    <Job info={ai}/>
                    <Link mt='2rem'>View full resume &rarr;</Link>
                </Box>

                <Text>"The quick brown fox jumps over the lazy dog" is an English-language pangram—a
                    sentence that contains all of the letters of the English alphabet. Owing to
                    its existence, Chakra was created."The quick brown fox jumps over the lazy dog" is an English-language pangram—a
                    sentence that contains all of the letters of the English alphabet. Owing to
                    its existence, Chakra was created."The quick brown fox jumps over the lazy dog" is an English-language pangram—a
                    sentence that contains all of the letters of the English alphabet. Owing to
                    its existence, Chakra was created."The quick brown fox jumps over the lazy dog" is an English-language pangram—a
                    sentence that contains all of the letters of the English alphabet. Owing to
                    its existence, Chakra was created."The quick brown fox jumps over the lazy dog" is an English-language pangram—a
                    sentence that contains all of the letters of the English alphabet.
                </Text> 
            </VStack>
        </Box>
    );
};

export default Home;