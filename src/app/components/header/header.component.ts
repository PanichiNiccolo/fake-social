import { Component } from '@angular/core';
import {Post} from '../../models/post.model';
import {POSTS} from '../../data/posts';
import {NgOptimizedImage} from '@angular/common';
import {AvatarComponent} from '../avatar/avatar.component';

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage,
    AvatarComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  data: Post[] = POSTS;
  singlePost: Post = POSTS[1];
}
