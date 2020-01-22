import { Component } from '@angular/core';
import { AuthService } from './../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    constructor(private auth: AuthService) { }

    login() {
        this.auth.login();
    }
}
