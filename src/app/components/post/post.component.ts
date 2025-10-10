import { Component } from '@angular/core';
import {POSTS} from '../../data/posts';
import {Post} from '../../models/post.model';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  data: Post[] = POSTS;
  singlePost: Post = POSTS[0];
}
