import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CardSkills } from '../../../../Models/helper-models';

@Component({
    selector: 'shared-card-skill',
    imports: [MatCardModule],
    templateUrl: './card-skill.component.html',
    styleUrl: './card-skill.component.scss'
})
export class CardSkillComponent {

  @Input() dataCardSkills?:CardSkills;

}
