import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { RegistrationService } from './registration-service/registration.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {
  public regForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    nickname: new FormControl()
  })
  constructor(private registrationService: RegistrationService) { }

  ngOnInit() {
  }

  public reg(regForm) {
    console.log(this.regForm.value);
    console.log(regForm.value);
    this.registrationService.registration(this.regForm.value)
      .subscribe(response => {

        // console.log(this.regForm.value);
      })

  }

}
