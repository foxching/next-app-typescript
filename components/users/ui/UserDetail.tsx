import {
    Box,
    Center,
    Flex,
    Text,
    Stack,
    List,
    ListItem,
    ListIcon,
    useColorModeValue,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { IUserModel } from '../../../Interface/Interface';

export default function UserDetail({ user }: { user: IUserModel }) {
    return (
        <Flex align="center" justifyContent="center" w="100%" p={2}>
            <Center py={6}>
                <Box
                    maxW={'400px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    overflow={'hidden'}>
                    <Stack
                        textAlign={'center'}
                        p={6}
                        color={useColorModeValue('gray.800', 'white')}
                        align={'center'}>
                        <Text
                            fontSize={'sm'}
                            fontWeight={500}
                            bg={useColorModeValue('green.50', 'green.900')}
                            p={2}
                            px={3}
                            color={'green.500'}
                            rounded={'full'}>
                            Id:{user.id}
                        </Text>
                        <Stack direction={'row'} align={'center'} justify={'center'}>
                            <Text fontSize={'6xl'} fontWeight={800}>
                                {user.name}
                            </Text>
                        </Stack>
                    </Stack>

                    <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                        <List spacing={3}>
                            <ListItem>
                                <ListIcon as={CheckIcon} color="green.400" />
                                Email : {user.email}
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckIcon} color="green.400" />
                                Phone No. {user.phone}
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckIcon} color="green.400" />
                                City : {user.address.city}
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckIcon} color="green.400" />
                                Website :{user.website}
                            </ListItem>
                        </List>
                    </Box>
                </Box>
            </Center>
        </Flex>
    );
}