import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { User } from './user.model';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public loginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
 private user: User;
  constructor(private router: Router,
              private authService: AuthService
  ) { }

  ngOnInit() {
  }
  public login() {
    this.authService.authorize(this.loginForm.value)
      .subscribe((user) => {
        this.user = user;
        localStorage.setItem('nickname', this.user.nickname);
        this.router.navigate(['/chat'])
    });
  }

}
