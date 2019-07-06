import { User, UserRoles } from './user';

export const defaultUsers: User[] = [
    {
        first_name: 'Test',
        last_name: 'Admin',
        role: UserRoles.ADMIN,
        email: 'admin@jsc.com',
        password: 'Password1'
    },
    {
        first_name: 'Test',
        last_name: 'User',
        role: UserRoles.STANDARD_USER,
        email: 'user@jsc.com',
        password: 'Password2'
    },
];
