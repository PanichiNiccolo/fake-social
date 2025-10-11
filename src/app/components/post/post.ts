import {Component, input} from '@angular/core';
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

  index = input.required<number>();
}
