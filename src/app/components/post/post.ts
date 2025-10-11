import {Component, input} from '@angular/core';
import {Header} from '../header/header';
import {CommentSection} from '../comment-section/comment-section';
import {PostModel} from '../../models/post.model';

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

  post = input.required<PostModel>();
}
