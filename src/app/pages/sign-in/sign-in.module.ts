import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { SignInRoutingModule }      from './sign-in-routing.module';
import { SignInComponent }          from './sign-in.component';
import { MatFormFieldModule }       from '@angular/material/form-field';
import { MatIconModule }            from '@angular/material/icon';
import { MatInputModule }           from '@angular/material/input';
import { MatRippleModule }          from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    SignInRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
})
export class SignInModule {}
