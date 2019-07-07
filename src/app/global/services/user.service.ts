import { Injectable } from '@angular/core';

import { User } from '../models/user';
import { UserHelpers } from '../helpers/user-helpers';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public loggedIn = false;
  public user: User;
  public userDb: User[];

  constructor() {
    const localUser = localStorage.getItem('user');
    if (localUser) {
      this.setUser(JSON.parse(localUser));
    }

    this.userDb = UserHelpers.initUserDb();
  }

  public setUser(user: User) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
    this.loggedIn = true;
  }

  public addUser(user: User) {
    this.userDb.push(user);
    UserHelpers.syncUserDb(this.userDb);
  }

  public logout() {
    this.user = null;
    this.loggedIn = null;
    localStorage.clear();
  }
}
