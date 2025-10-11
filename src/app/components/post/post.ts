import { Component } from '@angular/core';
import {POSTS} from '../../data/posts';
import {PostModel} from '../../models/post.model';
import {Header} from '../header/header';
import {CommentSection} from '../comment-section/comment-section';

@Component({
  selector: 'app-post',
  imports: [
    Header,
    CommentSection
  ],
  templateUrl: './post.html',
  styleUrl: './post.css'
})
export class Post {

  data: PostModel[] = POSTS;
  singlePost: PostModel = POSTS[0];
}
