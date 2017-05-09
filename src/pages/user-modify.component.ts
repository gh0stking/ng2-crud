import { Component, Input, Output, EventEmitter } from '@angular/core';

import { UserInfo } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
    selector: 'user-modify',
    templateUrl: './user-modify.html'
})
export class UserModifyPage {
    @Input() user: UserInfo;
    @Output() onClose: EventEmitter<any> = new EventEmitter<any>();
    constructor(private userService: UserService) { }

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
}