import {Component} from '@angular/core';
import {Post} from '../../models/post.model';
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

  data: Post[] = POSTS;
  singlePost: Post = POSTS[1];
}
