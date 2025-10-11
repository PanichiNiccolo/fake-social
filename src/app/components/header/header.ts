import {Component} from '@angular/core';
import {PostModel} from '../../models/post.model';
import {POSTS} from '../../data/posts';
import {Avatar} from '../avatar/avatar';

@Component({
  selector: 'app-header',
  imports: [
    Avatar
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  data: PostModel[] = POSTS;
  singlePost: PostModel = POSTS[1];
}
