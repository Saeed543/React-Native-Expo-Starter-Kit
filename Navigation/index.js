import React from 'react';
import { useAuthentication } from '../hooks/loginhook';
import UserStack from './User';
import AuthStack from './Auth';

export default function RootNavigation() {
    const { user } = useAuthentication();

    return user ? <UserStack /> : <AuthStack />;
}