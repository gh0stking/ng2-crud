import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { UserInfo } from '../models/user';

@Injectable()
export class UserService {
    static USERS: Array<UserInfo> = [
        { userId: "0001", userName: "zhangsan", sex: "1", birthday: new Date() },
        { userId: "0002", userName: "lisi", sex: "0", birthday: new Date() },
        { userId: "0003", userName: "wangwu", sex: "1", birthday: new Date() },
        { userId: "0004", userName: "zhaoliu", sex: "0", birthday: new Date() }
    ];

    getUsers(): Observable<UserInfo[]> {
        return Observable.of(UserService.USERS);
    }

    addUser(user: UserInfo): Observable<boolean> {
        return Observable.of(true).do(res => {
            UserService.USERS.push(user);
        });
    }

    delUser(userId: string): Observable<boolean> {
        return Observable.of(true).do(res => {
            let index = UserService.USERS.findIndex(a => a.userId == userId);
            UserService.USERS.splice(index, 1);
        })
    }

    modifyUser(user: UserInfo): Observable<boolean> {
        return Observable.of(true).do(res => {
            UserService.USERS.forEach((u, i) => {
                if (user.userId == u.userId) {
                    UserService.USERS[i].userName = user.userName;
                    UserService.USERS[i].sex = user.sex;
                    UserService.USERS[i].birthday = user.birthday;
                    return;
                }
            });
        })
    }

    exist(userId: string): boolean {
        return UserService.USERS.find(a => a.userId == userId) == null;
    }
}