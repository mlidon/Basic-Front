import { Routes } from "@angular/router";
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { LoginComponent } from "./login/login.component";
import { DashboardLayoutComponent } from "./dashboard-layout/dashboard-layout.component";

export const routes:Routes =[
   { path: '', component:HomeLayoutComponent},
   { path: 'login', component:LoginComponent },
   { 
      path: 'dashboard', component:DashboardLayoutComponent

   }
];