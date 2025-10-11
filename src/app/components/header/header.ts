import {Component, computed, inject, input} from '@angular/core';
import {Avatar} from '../avatar/avatar';
import {PostModel} from '../../models/post.model';
import {SocialStore} from '../../store/social.store';

@Component({
  selector: 'app-header',
  imports: [
    Avatar
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  readonly store = inject(SocialStore);

  index = input.required<number>();

  post = computed(() => this.store.getPostByIndex(this.index()));
}
