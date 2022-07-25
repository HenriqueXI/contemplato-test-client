import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent }    from './pages/products/products.component';
import { SignInComponent }      from './pages/sign-in/sign-in.component';
import { UserTasksComponent }   from './pages/user-tasks/user-tasks.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/login/login.module').then((mod) => mod.LoginModule),
  },
  {
    path: 'sign-in',
    loadChildren: () =>
      import('./pages/sign-in/sign-in.module').then((mod) => mod.SignInModule),
    component: SignInComponent,
  },
  {
    path: 'user-tasks',
    loadChildren: () =>
      import('./pages/user-tasks/user-tasks.module').then(
        (mod) => mod.UserTasksModule
      ),
    component: UserTasksComponent,
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./pages/products/products.module').then(
        (mod) => mod.ProductsModule
      ),
    component: ProductsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
