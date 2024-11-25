import { Component, ViewChild } from '@angular/core';
import { SidenavComponent } from '../../shared/components/dashboard/sidenav/sidenav.component';

@Component({
    selector: 'app-dashboard-layout',
    imports: [SidenavComponent],
    templateUrl: './dashboard-layout.component.html',
    styleUrl: './dashboard-layout.component.scss'
})
export class DashboardLayoutComponent {
   
}
