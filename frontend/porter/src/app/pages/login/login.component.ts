import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/models/login-model';
import { LoginService } from 'src/app/services/login.service';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private router: Router){
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  login(){
    let loginModel = {username: this.loginForm.controls['username'].value, password: this.loginForm.controls['password'].value} as ILogin;
    this.loginService.login(loginModel).toPromise()
      .then(x => { 
        const helper = new JwtHelperService();

        if(x){
          const decodedToken = helper.decodeToken(x.token);
          console.log(decodedToken);
          localStorage.setItem("userRole", decodedToken.role);
          localStorage.setItem("userName", decodedToken.user); 
          this.router.navigate(['/home']); 
        }
      })
      .catch(x => console.log("Add text box: " + x));
  }
}
