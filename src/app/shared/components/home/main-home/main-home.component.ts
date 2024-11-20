import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'shared-main-home',
    imports: [CommonModule, MatButtonModule],
    templateUrl: './main-home.component.html',
    styleUrl: './main-home.component.scss'
})
export class MainHomeComponent {
  title:string="Haz que tu negocio sea más productivo";
  description:string="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique accusantium veritatis error atque sed aut ratione officia!";
  labelButton:string="Empieza ahora";
}
