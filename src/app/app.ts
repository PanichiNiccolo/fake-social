import {Component, inject} from '@angular/core';
import {SocialStore} from './store/social.store';
import {Post} from './components/post/post';

@Component({
  selector: 'app-root',
  imports: [Post],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly store = inject(SocialStore);
}
