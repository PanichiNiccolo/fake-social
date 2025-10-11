import {Component, computed, inject, input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SocialStore} from '../../store/social.store';
import {PostModel} from '../../models/post.model';

@Component({
  selector: 'app-comment-updater',
  imports: [
    FormsModule
  ],
  templateUrl: './comment-updater.html',
  styleUrl: './comment-updater.css'
})
export class CommentUpdater {

  readonly store = inject(SocialStore);

  post = input.required<PostModel>();

  protected onSubmit(templateForm: any): void {

    const textMessage: string = templateForm.value.comment;
    this.store.addComment(this.post().id, textMessage);

    templateForm.reset();
  }

}
