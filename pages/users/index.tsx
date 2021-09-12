import React from 'react'
import { GetStaticProps } from "next";
import { getAllUsers } from '../../api/api';
import UsersCompIndex from '../../components/users/ui';
import { IUserModel } from '../../Interface/Interface';



export default function UsersPage({ users }: { users: IUserModel[] }) {
    return (
        <div>
            <UsersCompIndex users={users} />
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users"
    const users = await getAllUsers(apiUrl)
    return {
        props: { users },
        revalidate: 60
    }
}
