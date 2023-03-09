import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginHandlerService } from 'src/app/core/services/login-handler.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Output() login = new EventEmitter<boolean>();
  public username: string = "";
  public password: string = "";
  public errormessage: string = "";
  public form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private LoginHandler: LoginHandlerService, private router: Router) { }

  public submit() {
    if (this.form.valid) {
      let name: string = this.form.value.name;
      let password: string = this.form.value.password;
      this.LoginHandler.login(name, password)
        .subscribe((user: any) => {
          this.LoginHandler.user_id = user.id;
          this.login.emit(true);
          this.redirect();
        }, error => {
          this.errormessage = error;
        });
    }
  }

  public redirect() {
    this.router.navigate(['']);
  }

}
