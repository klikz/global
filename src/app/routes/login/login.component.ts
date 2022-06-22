import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import {BackendapiService} from 'src/app/services/backendapi.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // email: any
  // password: any
  form: UntypedFormGroup
  submitted: boolean = false
  errMessage: string
  errorEvent: boolean = false

  value3: string;

  constructor(public auth: BackendapiService) { }

  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      username: new UntypedFormControl("", [Validators.required]),
      password: new UntypedFormControl("", [Validators.required, Validators.minLength(6)])
    })
  }

  async submit(){

    if(this.form.invalid){
      return
    }
    
    const user = {
      email: this.form.value.username,
      password: this.form.value.password,
    }
    console.log(user)
    let result = await this.auth.Auth(user)
    // this.cookieService.set('test', 'Hello World');
    // const allCookies: {} = this.cookieService.getAll();
    console.log(result)
    if (result.error) {
      this.errorEvent = true
      this.errMessage = result.error
      return
    }

    localStorage.setItem('role', result.role);
    localStorage.setItem('token', result.token);
    localStorage.setItem('email', result.email);
    window.location.href = "/"
    // location.reload()


   }

}
