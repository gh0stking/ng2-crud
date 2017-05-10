import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { UserInfo } from '../models/user';
import { Dic } from '../models/dic';
import { UserService } from '../services/user.service';

@Component({
    selector: 'user-modify',
    templateUrl: './user-modify.html'
})
export class UserModifyPage implements OnInit {
    dicSex: Array<Dic>;
    @Input() user: UserInfo;
    @Output() onClose: EventEmitter<any> = new EventEmitter<any>();
    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.getDicSex();
    }

    modifyuser(): void {
        if (this.user) {
            this.userService.modifyUser(this.user).subscribe(res => {
                if (res == true) {
                    console.log('user modified');
                    this.onClose.emit();
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