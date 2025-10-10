import { Component } from '@angular/core';
import {Post} from '../../models/post.model';
import {POSTS} from '../../data/posts';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  data: Post[] = POSTS;
  singlePost: Post = POSTS[0];
}
