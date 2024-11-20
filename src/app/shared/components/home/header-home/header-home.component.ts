import { Component, Inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatMenuModule} from '@angular/material/menu';
import { MenuHeader } from '../../../../Models/helper-models';
import { LayoutModule } from '@angular/cdk/layout';


@Component({
    selector: 'shared-header-home',
    imports: [RouterLink,MatToolbarModule,MatIconModule,MatButtonModule,MatMenuModule,LayoutModule],
    templateUrl: './header-home.component.html',
    styleUrl: './header-home.component.scss'
})

export class HeaderHomeComponent implements OnInit {
  isMobile?: boolean;
  itemsMenu?: MenuHeader[]=[
    {title:'Home',link:'home',fragment:'main',icon:'home'},
    {title:'Skills',link:'home',fragment:'skills',icon:'share'},
    {title:'About Me',link:'home',fragment:'aboutme',icon:'mood'},
    {title:'Books',link:'home',fragment:'books',icon:'book_2'},
    {title:'Contact',link:'home',fragment:'contact',icon:'person_add'},
    {title:'login',link:'login',fragment:'',icon:'login'},
  ];
  
  constructor(@Inject(BreakpointObserver)private breakpointObserver : BreakpointObserver){}

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe({
      next:(result=>{
        this.isMobile = result.matches;
      })
    })
  }

}
