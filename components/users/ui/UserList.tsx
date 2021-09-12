import React from 'react'
import { Wrap, WrapItem, Box, Heading, Center, useColorModeValue, } from "@chakra-ui/react"
import { IUserModel } from '../../../Interface/Interface'
import Link from 'next/link'

export default function UserList({ users }: { users: IUserModel[] }) {
    const background = useColorModeValue('alphaWhite.200', 'gray.700')
    return (
        <>
            <Heading mb="20px">All Users</Heading>
            <Wrap align="center" spacing="30px" w="100%" >
                {users.map(user => (
                    <Box key={user.id} cursor="pointer">
                        <Link href={`/users/${user.id}`}>
                            <WrapItem  >
                                <Center
                                    w="200px"
                                    h="150px"
                                    bg={background}
                                    boxShadow={'lg'}
                                    rounded={'base'}
                                    _hover={{
                                        opacity: 0.5
                                    }}
                                >
                                    {user.name}
                                </Center>
                            </WrapItem>
                        </Link>
                    </Box>
                ))}
            </Wrap>

        </>
    )
}
