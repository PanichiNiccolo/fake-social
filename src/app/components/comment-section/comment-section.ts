import { Component } from '@angular/core';
import {PostModel} from '../../models/post.model';
import {POSTS} from '../../data/posts';
import {Comment} from '../comment/comment';

@Component({
  selector: 'app-comment-section',
  imports: [
    Comment
  ],
  templateUrl: './comment-section.html',
  styleUrl: './comment-section.css'
})
export class CommentSection {

  data: PostModel[] = POSTS;
  singlePost: PostModel = POSTS[0];
}
