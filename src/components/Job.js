import { LinkBox, LinkOverlay, Box, Text, Tag, Icon, Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import { FiArrowUpRight } from 'react-icons/fi';

function Job(props) {
    const { info } = props;

    const skillTags = info.skills.map( (skill) => <Tag p={1} m={0.5}>{skill}</Tag> );

    return (
        <LinkBox
        m='1rem'
        borderWidth='0.1px'
        rounded='md'
        >
            <Box p={4} display={{ md: 'flex' }}>
                <Box flexShrink={0}>
                    <Text> {info.dates[0]} {info.dates[1]} - {info.dates[2]} {info.dates[3]} </Text>
                </Box>
                <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                    <LinkOverlay href=''>
                        {info.position} &#x2022; {info.company}
                        {' '}
                        <Icon as={FiArrowUpRight}/>
                    </LinkOverlay>
                    <Text>
                        {info.description}
                    </Text>
                    <ul>{skillTags}</ul>
                </Box>
            </Box>
        </LinkBox>
    );
};

export default Job;