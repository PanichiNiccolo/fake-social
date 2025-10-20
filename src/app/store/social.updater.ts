import {PartialStateUpdater} from '@ngrx/signals';
import {SocialSlice} from './social.slice';
import {CommentModel} from '../models/comment.model';

export function toggleLike(id: string): PartialStateUpdater<SocialSlice> {
  return state => ({
    posts: state.posts
      .map(post => {
        if (post.id !== id) {
          return post;
        }

        return {
          ...post,
          isLiked: !post.isLiked,
          likes: post.likes + (post.isLiked ? 1 : -1)
        };
      }),
  });
}

export function addComment(id: string, commentText: string): PartialStateUpdater<SocialSlice> {
  return state => ({
    posts: state.posts
      .map(post => {
        if (post.id !== id) {
          return post;
        }

        const newComment: CommentModel = {
          id: crypto.randomUUID(),
          user: "TU",
          text: commentText,
        };

        return {
          ...post,
          isCommented: true,
          comments: [...post.comments, newComment],
        };
      }),
  });
}
