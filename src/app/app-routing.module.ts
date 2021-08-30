import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdataComponent } from 'src/app/register/userdata/userdata.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: '', component: HomepageComponent },
  { path: 'userdata', component: UserdataComponent },
  { path: 'findall', component: AllUsersComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }