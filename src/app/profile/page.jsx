"use client"
import authClient from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React from 'react';
import { UpdateUserModal } from '../components/UpdateUserModal';

const Profilepage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
    console.log(user)
    return (
        <div>
            <Card className="border mx-auto w-125 flex flex-col items-center py-10 mt-5">

                <Avatar className="w-24 h-24 rounded-2xl mb-4">
                <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <h1 className="text-4xl font-bold">{user?.name}</h1>
                <p className="text-gray-500">{user?.email}</p>
                <UpdateUserModal></UpdateUserModal>
            </Card>
        </div>
    );
};

export default Profilepage;