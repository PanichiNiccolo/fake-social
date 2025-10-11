import {Component, input} from '@angular/core';
import {Avatar} from '../avatar/avatar';
import {PostModel} from '../../models/post.model';
import {InteractiveSection} from '../interactive-section/interactive-section';

@Component({
  selector: 'app-header',
  imports: [
    Avatar,
    InteractiveSection
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  post = input.required<PostModel>();
}
