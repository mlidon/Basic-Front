import { Component } from '@angular/core';
import { HomeComponent } from '../../fetures/home/home.component';
import { HeaderHomeComponent } from "../../shared/components/home/header-home/header-home.component";

@Component({
    selector: 'app-home-layout',
    imports: [HomeComponent, HeaderHomeComponent],
    templateUrl: './home-layout.component.html',
    styleUrl: './home-layout.component.scss'
})
export class HomeLayoutComponent {

}
