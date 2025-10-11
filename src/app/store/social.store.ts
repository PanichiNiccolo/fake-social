import {signalStore, withComputed, withMethods, withState} from '@ngrx/signals';
import {initialSocialSlice} from './social.slice';
import {computed, signal} from '@angular/core';
import {CommentModel} from '../models/comment.model';
import {PostModel} from '../models/post.model';

export const SocialStore = signalStore(
  {
    providedIn: 'root'
  },
  withState(initialSocialSlice),
  withComputed((store) => {

    const postList = computed(() => store.posts());

    return {
      postList,
    }
  }),
  withMethods((store) => ({
    getPostByIndex: (index: number)=> store.posts()[index] ?? null,
    addComment: (postId: string, messageText: string) => {

      const newComment: CommentModel = { id: crypto.randomUUID(), user: 'TU', text: messageText };

      return {
        ...store,
        posts: store.posts().map((post) => {
          if (postId === post.id) {
            return {
              ...post,
              comments: [...post.comments, newComment],
            };
          } else {
            return post;
          }
        }),
      };
    },
  })),
);
