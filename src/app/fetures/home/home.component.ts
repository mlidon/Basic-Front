import { Component, OnInit } from '@angular/core';
import { MainHomeComponent } from "../../shared/components/home/main-home/main-home.component";
import { HeaderHomeComponent } from '../../shared/components/home/header-home/header-home.component';
import { RouterModule,ActivatedRoute} from '@angular/router';
import { FeaturesHomeComponent } from '../../shared/components/home/features-home/features-home.component';
import { ContactComponent } from "../../shared/components/home/contact/contact.component";


@Component({
    selector: 'features-home',
    imports: [
    RouterModule,
    MainHomeComponent,
    FeaturesHomeComponent,
    ContactComponent
],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

    constructor(private route:ActivatedRoute){}
    ngOnInit(): void {
        this.route.fragment.subscribe(fragment=>{
            if(fragment){
                const element = document.querySelector('#'+ fragment );
                if(element){
                    element.scrollIntoView();
                }
            }
        })
    }
}
