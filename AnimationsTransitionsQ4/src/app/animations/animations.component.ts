import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrl: './animations.component.css',
  animations:[
    trigger('fadeIn',[
      transition(':enter',[
style({ opacity: 0 }),
animate('1s ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AnimationsComponent {

}
