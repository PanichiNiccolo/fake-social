import { Component } from '@angular/core';
import {PostModel} from '../../models/post.model';
import {POSTS} from '../../data/posts';
import {Comment} from '../comment/comment';
import {CommentUpdater} from '../comment-updater/comment-updater';

@Component({
  selector: 'app-comment-section',
  imports: [
    Comment,
    CommentUpdater
  ],
  templateUrl: './comment-section.html',
  styleUrl: './comment-section.css'
})
export class CommentSection {

  data: PostModel[] = POSTS;
  singlePost: PostModel = POSTS[0];
}
