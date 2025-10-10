import {signalStore, withState} from '@ngrx/signals';
import {initialSocialSlice} from './social.slice';

export const SocialStore = signalStore(
  {
    providedIn: 'root'
  },
  withState(initialSocialSlice),
);
