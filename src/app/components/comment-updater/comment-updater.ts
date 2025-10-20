import {Component, inject, input} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {SocialStore} from '../../store/social.store';
import {PostModel} from '../../models/post.model';

@Component({
  selector: 'app-comment-updater',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './comment-updater.html',
  styleUrl: './comment-updater.css'
})
export class CommentUpdater {

  readonly store = inject(SocialStore);
  private readonly fb = inject(FormBuilder);

  post = input.required<PostModel>();

  protected form = this.fb.nonNullable.group({
    comment: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
  });

  protected onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    const textMessage: string = this.form.value.comment!;
    this.store.addComment(this.post().id, textMessage);

    this.form.reset();
  }

}
