import {Component, inject, signal} from '@angular/core';
import {SocialStore} from './store/social.store';
import {HeaderComponent} from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly store = inject(SocialStore);
}
