import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'shared-header',
    imports: [ MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
    @Output() OpenSideNav= new EventEmitter<boolean>;
    isOpen:boolean=false;


    constructor(){}

    ngOnInit(): void {
    }

    ToggleSideNav(){
        this.isOpen = !this.isOpen;
        this.OpenSideNav.emit(this.isOpen)
    }
}
