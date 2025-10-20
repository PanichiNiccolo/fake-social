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

  urlImage = input.required<string>();
}
