import { User } from '../models/user';
import { defaultUsers } from '../models/user-data';

export class UserHelpers {
    static initUserDb(): User[] {
        // TODO add handling for local storage
        return defaultUsers;
    }
}
