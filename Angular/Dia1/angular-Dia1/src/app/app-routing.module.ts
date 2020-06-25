import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';


const routes: Routes = [
  {path:"home",component:HomePageComponent},
  {path:"login",component:LoginPageComponent},
  {path:"register",component:RegisterPageComponent},
  {path:"contact",component:ContactPageComponent},
  {path:"contact",component:NavBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
