import {Component, inject, input} from '@angular/core';
import {MatIconButton} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {PostModel} from '../../models/post.model';
import {SocialStore} from '../../store/social.store';

@Component({
  selector: 'app-interactive-section',
  imports: [
    MatIconButton,
    MatIconModule
  ],
  templateUrl: './interactive-section.html',
  styleUrl: './interactive-section.css'
})
export class InteractiveSection {

  readonly store = inject(SocialStore);

  post = input.required<PostModel>();

  onLikeClick(): void {
    this.store.toggleLike(this.post().id);
  }

}
