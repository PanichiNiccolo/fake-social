import {Component, input} from '@angular/core';
import {PostModel} from '../../models/post.model';
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

  post = input.required<PostModel>();
}
