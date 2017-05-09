import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

import { UserService } from '../services/user.service';
import { UserInfo } from '../models/user';
import { UserAddPage } from './user-add.component';
import { UserModifyPage } from './user-modify.component';

@Component({
    selector: 'user',
    templateUrl: './user.html'
})
export class UserPage implements OnInit {
    users: Array<UserInfo>;
    currentUser: UserInfo;
    @ViewChild("addUserModal") addUserModal: ModalDirective;
    @ViewChild("modifyUserModal") modifyUserModal: ModalDirective;

    constructor(
        private userService: UserService
    ) { }

    ngOnInit(): void {
        this.getUsers();
    }

    getUsers(): void {
        this.userService.getUsers().subscribe(res => {
            this.users = res;
        });
    }

    closeAddUserModal(): void {
        this.addUserModal.hide();
        this.getUsers();
    }

    closeModifyUserModal(): void {
        this.modifyUserModal.hide()
        this.getUsers();
    }

    addUser(): void {
        this.currentUser = new UserInfo();
        this.addUserModal.show();
    }

    modifyUser(user: UserInfo): void {
        this.currentUser = user;
        this.modifyUserModal.show();
    }

    delUser(user: UserInfo): void {
        this.userService.delUser(user.userId).subscribe(res => {
            this.getUsers();
        });
    }

}