import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './servise/auth.service';
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
      .subscribe((user: User) => {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
        this.router.navigate(['/chat'])
    });
  }

}
