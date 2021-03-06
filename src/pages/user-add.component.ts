import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { UserInfo } from '../models/user';
import { Dic } from '../models/dic';
import { UserService } from '../services/user.service';

@Component({
    selector: 'user-add',
    templateUrl: './user-add.html'
})
export class UserAddPage implements OnInit {
    dicSex: Array<Dic>;
    @Input() user: UserInfo;
    @Output() onClose: EventEmitter<any> = new EventEmitter<any>();
    constructor(private userService: UserService) {
        this.user = new UserInfo();
        if (this.user) {
            this.user.birthday = new Date();
        }
    }

    ngOnInit(): void {
        this.getDicSex();
    }

    adduser(): void {
        if (this.user) {
            if (!this.user.userId || !this.user.userName) {
                console.log('数据校验失败');
                return;
            }

            if (this.userService.exist(this.user.userId)) {
                console.log('用户已存在');
                return;
            }

            this.userService.addUser(this.user).subscribe(res => {
                if (res == true) {
                    console.log('user added...');
                    this.onClose.emit(null);
                }
            });
        }
    }

    getDicSex(): void {
        this.userService.getDicSex().subscribe(res => {
            this.dicSex = res;
        });
    }
}