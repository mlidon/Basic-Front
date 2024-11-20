import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './layout/login/login.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';

export const routes: Routes = [
   {path:'',component:HomeLayoutComponent},
   {path:'login',component:LoginComponent},
   {path:'dashboard',component:DashboardLayoutComponent},
   {path:'**',redirectTo:''}
   
];
