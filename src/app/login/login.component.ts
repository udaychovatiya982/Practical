import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CallerService } from '../Service/caller.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild("loginForm") public loginFormForm: NgForm | undefined;
  public isLogin: boolean = false
  constructor(
    private caller: CallerService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  public async onLogin(loginForm: NgForm) {
    let InputObj = {
      email: loginForm.form.value.email,
      password: loginForm.form.value.password
    }
    console.log(InputObj);
    this.isLogin = true
    this.router.navigate(["addmusic"]);
    this.loginFormForm?.reset()
    this.caller.login(InputObj).subscribe((res: any) => {
      console.log(res);
    })

  }
}
