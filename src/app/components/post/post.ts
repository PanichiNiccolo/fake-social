import { Component } from '@angular/core';
import {POSTS} from '../../data/posts';
import {Post} from '../../models/post.model';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.html',
  styleUrl: './post.css'
})
export class PostComponent {

  data: Post[] = POSTS;
  singlePost: Post = POSTS[0];
}
