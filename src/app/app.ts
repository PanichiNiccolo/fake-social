import {Component, inject, signal} from '@angular/core';
import {SocialStore} from './store/social.store';
import {Header} from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly store = inject(SocialStore);
}
