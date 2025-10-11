import {Component, input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-avatar',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './avatar.html',
  styleUrl: './avatar.css'
})
export class Avatar {

  private readonly DEFAULT_PX_SIZE: number = 64;

  pxSize = input<number>(this.DEFAULT_PX_SIZE);
  urlImage = input.required<string>();

}
