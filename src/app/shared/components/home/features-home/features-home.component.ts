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
    { title:'Angular',
      description:'Angular se considera ahora como un framework maduro pero en constante evolución, que se adapta a las necesidades modernas del desarrollo web, mejorando tanto la experiencia del desarrollador como el rendimiento de las aplicaciones',
      urlImage:'https://yt3.googleusercontent.com/y4J_Fs5ksRlxx6_LzT1VKxVqH_T8Vyn_RN_YYgLJhuMzBS5qxTgm7NlEcMkQd3hgCpfWtYcEUg=s900-c-k-c0x00ffffff-no-rj'},
    { title:'Material',
      description:'Angular Material es un sistema de diseño robusto, oficial y completamente integrado con Angular, que proporciona componentes de alta calidad para crear interfaces de usuario modernas y profesionales.',
      urlImage:'https://s3-ap-south-1.amazonaws.com/trt-blog-ghost/2020/09/TRT--6-.png'},
    {title:'.Net Core',
      description:'Punto Net Core es un framework moderno, de alto rendimiento y versátil que ofrece a los desarrolladores una amplia gama de herramientas y capacidades para crear aplicaciones web y servicios robustos y escalables.',
      urlImage:'https://cdn-images-1.medium.com/v2/resize:fit:1200/1*zc1BKfAHkpvrZlHPbUvuYA.png'},
    {title:'SQL Server',
      description:'Microsoft SQL Server es una opción robusta y confiable para la gestión de bases de datos, ideal para empresas que requieren un manejo eficiente y seguro de sus datos.',
      urlImage:'https://www.geekandjob.com/uploads/wiki/43b8c92d2a8fcd2a95ae6bf30c18494dae92467a.png'},
    {title:'Blender',
      description:'Blender es una herramienta potente y versátil para la creación 3D, adecuada tanto para aficionados como para profesionales en diversas áreas del diseño digital.',
      urlImage:'https://ih1.redbubble.net/image.3214520871.6502/st,small,507x507-pad,600x600,f8f8f8.u2.jpg'},
    {title:'Unity',
      description:'Unity es una opción valiosa para desarrolladores de videojuegos debido a su versatilidad, facilidad de uso y capacidad para crear juegos atractivos en múltiples plataformas.',
      urlImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2NKdJHVcAZ2F0peokH3Qsbgq6gmvrIPlXdq69-ki_B8ZVOV_MQL6GmYMnIo5j3um17vM&usqp=CAU'},
  ]

}
