import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-comment-updater',
  imports: [
    FormsModule
  ],
  templateUrl: './comment-updater.html',
  styleUrl: './comment-updater.css'
})
export class CommentUpdater {

  protected onSubmit(): void {
    console.log('Pippo');
  }

}
