import { Icon, HStack } from '@chakra-ui/react';
import { BsFillEnvelopeFill, BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';

function Contact() {
    return (
        <HStack spacing='1rem'>
            <Icon as={BsFillEnvelopeFill} />
            <Icon as={BsLinkedin} />
            <Icon as={BsGithub} />
            <Icon as={BsInstagram} />
        </HStack>
    );
};

export default Contact;