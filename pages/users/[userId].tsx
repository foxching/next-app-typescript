import React from 'react'
import { GetStaticProps, GetStaticPaths } from "next";
import { getAllUsers, getUser } from '../../api/api';
import { IUserModel } from '../../Interface/Interface';
import UserDetail from '../../components/users/ui/UserDetail';


export default function UserPage({ user }: { user: IUserModel }) {
    return (
        <>
            <UserDetail user={user} />
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const userId = context.params?.userId;

    const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`
    const user = await getUser(apiUrl)
    return {
        props: { user },
        revalidate: 60
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users"
    const users: IUserModel[] = await getAllUsers(apiUrl)
    return {
        fallback: "blocking",
        paths: users.map((user) => ({
            params: { userId: user.id.toString() },
        })),
    };
}
