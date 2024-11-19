import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { HomeComponent } from '../../fetures/home/home.component';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [HomeComponent,RouterOutlet],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss'
})
export class HomeLayoutComponent {

}
