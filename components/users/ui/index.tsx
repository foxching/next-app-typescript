import { Container } from '@chakra-ui/react'
import UserList from './UserList'
import { IUserModel } from '../../../Interface/Interface'


export default function UsersCompIndex({ users }: { users: IUserModel[] }) {

    return (
        <>
            <Container maxW="container.lg" marginTop="40px">
                <UserList users={users} />
            </Container>
        </>
    )
}
