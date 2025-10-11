import { Component } from '@angular/core';
import {PostModel} from '../../models/post.model';
import {POSTS} from '../../data/posts';
import {CommentModel} from '../../models/comment.model';

@Component({
  selector: 'app-comment',
  imports: [],
  templateUrl: './comment.html',
  styleUrl: './comment.css'
})
export class Comment {

  data: PostModel[] = POSTS;
  singleComment: CommentModel = POSTS[1].comments[0];

}
