import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';
import { User }               from 'src/app/interfaces/user';
import { UserService }        from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  public hide: boolean = true;
  public userParams: User = { email: '', password: '', name: '' };
  public showLoading: boolean = false;

  constructor(
    private _userService: UserService,
    private _router: Router,
  ) {}

  ngOnInit(): void {}

  changeName(event: any) {
    this.userParams.name = event.target.value;
  }

  changeEmail(event: any) {
    this.userParams.email = event.target.value;
  }

  changePassword(event: any) {
    this.userParams.password = event.target.value;
  }

  SignIn() {
    this.showLoading = true;
    if (this.userParams && this.userParams.email && this.userParams.password) {
      this._userService.createUser(this.userParams).subscribe((response) => {
        if (response.id)
          this._router.navigate(['/user-tasks'], {state: {id: response.id}});
        else
          alert('Usuário não encontrado');
      }, () => this.showLoading = false);
    }
  }
}
