import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DealsComponent } from './deals/deals.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DomesticComponent } from './packages/domestic/domestic.component';
import { PackagesComponent } from './packages/packages.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {​​​​path: 'packages', component: PackagesComponent,
  children: [
        {​​​​path: 'domestic', component:DomesticComponent}​​​​
  ]}​​​​,
  {path: 'deals', component:DealsComponent},
  {path: 'about', component:AboutComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: '',redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
