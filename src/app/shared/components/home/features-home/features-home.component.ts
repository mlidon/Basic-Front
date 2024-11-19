import { Component } from '@angular/core';
import { CardSkillComponent } from '../../general/card-skill/card-skill.component';
import { CardSkills } from '../../../../Models/helper-models';

@Component({
  selector: 'shared-features-home',
  standalone: true,
  imports: [CardSkillComponent],
  templateUrl: './features-home.component.html',
  styleUrl: './features-home.component.scss'
})
export class FeaturesHomeComponent {

  cardSkillsArray:CardSkills[]=[
    {title:'Angular',description:'',urlImage:'https://yt3.googleusercontent.com/y4J_Fs5ksRlxx6_LzT1VKxVqH_T8Vyn_RN_YYgLJhuMzBS5qxTgm7NlEcMkQd3hgCpfWtYcEUg=s900-c-k-c0x00ffffff-no-rj'},
    {title:'Material',description:'',urlImage:'https://s3-ap-south-1.amazonaws.com/trt-blog-ghost/2020/09/TRT--6-.png'},
    {title:'.Net Core',description:'',urlImage:'https://cdn-images-1.medium.com/v2/resize:fit:1200/1*zc1BKfAHkpvrZlHPbUvuYA.png'},
    {title:'SQL Server',description:'',urlImage:'https://www.geekandjob.com/uploads/wiki/43b8c92d2a8fcd2a95ae6bf30c18494dae92467a.png'},
    {title:'Blender',description:'',urlImage:'https://ih1.redbubble.net/image.3214520871.6502/st,small,507x507-pad,600x600,f8f8f8.u2.jpg'},
    {title:'Unity',description:'',urlImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2NKdJHVcAZ2F0peokH3Qsbgq6gmvrIPlXdq69-ki_B8ZVOV_MQL6GmYMnIo5j3um17vM&usqp=CAU'},
  ]

}
