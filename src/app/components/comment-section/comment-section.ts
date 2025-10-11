import {Component, computed, inject, input} from '@angular/core';
import {PostModel} from '../../models/post.model';
import {Comment} from '../comment/comment';
import {CommentUpdater} from '../comment-updater/comment-updater';
import {SocialStore} from '../../store/social.store';

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

  readonly store = inject(SocialStore);

  index = input.required<number>();

  post = computed(() => this.store.getPostByIndex(this.index()));
}
