import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserTasks } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-tasks',
  templateUrl: './user-tasks.component.html',
  styleUrls: ['./user-tasks.component.scss'],
})
export class UserTasksComponent implements OnInit {
  public userId: string = '';
  public tasks: UserTasks = {};
  public name: string = '';

  constructor(private _userService: UserService, private _router: Router) {
    const nav = this._router.getCurrentNavigation();
    if (nav && nav.extras.state) this.userId = nav.extras.state['id'];
  }

  ngOnInit(): void {
    if (!this.userId)
      this.goBack();
    else
      this.getUserTasks();
  }

  getUserTasks() {
    this._userService.getUserTasks(this.userId).subscribe((response) => {
      this.tasks = response;
    });
  }

  changeName(event: any) {
    this.name = event.target.value;
  }

  addTask() {
    if (this.name && this.userId)
      this._userService
        .createUserTask(this.userId, this.name)
        .subscribe((response) => {
          if (response.id) this.getUserTasks();
        });
    else alert('Preencha o nome da task');
    this.name = '';
  }

  getProducts() {
    this._router.navigate(['/products']);
  }

  goBack() {
    this._router.navigate(['/'])
  }
}
