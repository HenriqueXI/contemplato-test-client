import { NgModule } from '@angular/core';
import { BrowserModule }                Sfrom '@angular/platform-browser';
import { AppRoutingModule }             from './app-routing.module';
import { AppComponent }                 from './app.component';
import { BrowserAnimationsModule }      from '@angular/platform-browser/animations';
import { MatFormFieldModule }           from '@angular/material/form-field';
import { MatInputModule }               from '@angular/material/input';
import { MatRippleModule }              from '@angular/material/core';
import { MatIconModule }                from '@angular/material/icon';
import { UserService }                  from './services/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatListModule }                from '@angular/material/list';
import { MatProgressSpinnerModule }     from '@angular/material/progress-spinner';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatIconModule,
    HttpClientModule,
    MatListModule,
    MatProgressSpinnerModule
  ],
  providers: [UserService, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
