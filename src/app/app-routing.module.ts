import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginsComponent } from './components/logins/logins.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [

  {path:'register', component:RegistrationComponent},
  {path:'login', component:LoginsComponent},

  {path:'dashboard', component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
