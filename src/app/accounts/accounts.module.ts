import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { PasswordrecoveryComponent } from './components/passwordrecovery/passwordrecovery.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, SignupComponent, ChangepasswordComponent, PasswordrecoveryComponent]
})
export class AccountsModule { }