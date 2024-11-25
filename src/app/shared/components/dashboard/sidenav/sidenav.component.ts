import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
    selector: 'shared-sidenav',
    imports: [MatSidenavModule,MatButtonModule,MatToolbarModule,MatIcon,MatMenuModule],
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.scss'
})
export class SidenavComponent implements OnInit{
    @ViewChild('sideNav')  sideNav!: MatSidenav;
    public close: boolean = false;
    showFiller = true;
   
    constructor(){}

    ngOnInit(): void {
   
    }

    controlSideNav(event:any){
        if(event){
            this.sideNav.toggle()
        }
    }

    // controlMenu(w: number){

    //     if (w <= 991) {
    //       if(this.sideNav.opened == true){
    //         //this.sideNav.close();
    //         this.sideNav.close();
    //         this.close = true;
    //       }
    //     }else{
    //       if(this.sideNav.opened != true){
    //         this.sideNav.open();
    //         this.close = false;
    //       }
    //     }
    //   }
}
