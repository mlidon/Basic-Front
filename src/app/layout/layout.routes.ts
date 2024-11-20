import { Routes } from "@angular/router";
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { LoginComponent } from "./login/login.component";
import { DashboardLayoutComponent } from "./dashboard-layout/dashboard-layout.component";
import { HomeComponent } from "../fetures/home/home.component";

export const routes:Routes =[
   { path: '', component:HomeLayoutComponent,   
      children:[
         {path:'home',component:HomeComponent}
      ]
   },
   { path: 'login', component:LoginComponent },
   { 
      path: 'dashboard', component:DashboardLayoutComponent

   }
];



// loadChildren: () => import('./../fetures/home/home.routes').then(m=>m.routes)