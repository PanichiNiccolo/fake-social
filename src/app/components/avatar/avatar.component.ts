import {Component, input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-avatar',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css'
})
export class AvatarComponent {

  private readonly DEFAULT_PX_SIZE: number = 64;

  pxSize = input<number>(this.DEFAULT_PX_SIZE);
  urlImage = input.required<string>();

}
