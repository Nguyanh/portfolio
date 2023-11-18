import { VStack, Heading, Text } from '@chakra-ui/react';

function Title(props) {
    const { info } = props;
    return (
        <VStack align='left' spacing='0.2rem'>
            <Heading size='2xl'>{info.name}</Heading>
            <Text fontSize='xl'>{info.currRole}</Text>
            <Text fontSize='md'>{info.description}</Text>
        </VStack>
    );
};

export default Title;