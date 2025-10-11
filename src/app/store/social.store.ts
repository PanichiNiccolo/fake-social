import {patchState, signalStore, withMethods, withState} from '@ngrx/signals';
import {initialSocialSlice} from './social.slice';
import {addComment, toggleLike} from './social.updater';

export const SocialStore = signalStore(
  {
    providedIn: 'root'
  },
  withState(initialSocialSlice),
  withMethods((store) => ({
    toggleLike: (id: string) => patchState(store, toggleLike(id)),
    addComment: (id: string, commentText: string) => patchState(store, addComment(id, commentText)),
  })),
);
