import {Component, input} from '@angular/core';
import {CommentModel} from '../../models/comment.model';

@Component({
  selector: 'app-comment',
  imports: [],
  templateUrl: './comment.html',
  styleUrl: './comment.css'
})
export class Comment {

  comment = input.required<CommentModel>();
}
