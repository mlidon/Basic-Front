import { Component } from '@angular/core';
import { MainHomeComponent } from "../../shared/components/home/main-home/main-home.component";
import { HeaderHomeComponent } from '../../shared/components/home/header-home/header-home.component';
import { RouterModule,RouterOutlet} from '@angular/router';
import { FeaturesHomeComponent } from '../../shared/components/home/features-home/features-home.component';


@Component({
  selector: 'features-home',
  standalone: true,
  imports: [ 
    RouterModule,
    MainHomeComponent,
    HeaderHomeComponent,
    FeaturesHomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
