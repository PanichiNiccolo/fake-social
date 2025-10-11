import { Component } from '@angular/core';
import {POSTS} from '../../data/posts';
import {PostModel} from '../../models/post.model';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.html',
  styleUrl: './post.css'
})
export class Post {

  data: PostModel[] = POSTS;
  singlePost: PostModel = POSTS[0];
}
