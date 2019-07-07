import { User } from '../models/user';
import { defaultUsers } from '../models/user-data';

export class UserHelpers {
    static initUserDb(): User[] {
        const users = localStorage.getItem('userDb');
        return users ? JSON.parse(users) : defaultUsers;
    }

    static syncUserDb(users: User[]): void {
        localStorage.setItem('userDb', JSON.stringify(users));
    }
}
