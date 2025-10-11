import {patchState, signalStore, withHooks, withMethods, withState} from '@ngrx/signals';
import {initialSocialSlice} from './social.slice';
import {addComment, toggleLike} from './social.updater';
import {of, take} from 'rxjs';
import {POSTS} from '../data/posts';

export const SocialStore = signalStore(
  {
    providedIn: 'root'
  },
  withState(initialSocialSlice),
  withMethods((store) => ({
    toggleLike: (id: string) => patchState(store, toggleLike(id)),
    addComment: (id: string, commentText: string) => patchState(store, addComment(id, commentText)),
  })),
  withHooks({
    onInit: (store) => {
      of(POSTS)
        .pipe(take(1))
        .subscribe(posts => patchState(store, {posts}));
    },
  })
);
