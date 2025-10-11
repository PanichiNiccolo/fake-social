import {PartialStateUpdater} from '@ngrx/signals';
import {SocialSlice} from './social.slice';
import {CommentModel} from '../models/comment.model';

export function toggleLike(id: string): PartialStateUpdater<SocialSlice> {
  return state => ({
    posts: state.posts
      .map(post => {
        if (post.id === id) {
          const isLiked: boolean = !post.isLiked;
          const likes: number = post.likes + (isLiked ? 1 : -1);

          return {
            ...post,
            isLiked,
            likes,
          };
        } else {
          return post;
        }
      }),
  });
}

export function addComment(id: string, commentText: string): PartialStateUpdater<SocialSlice> {
  return state => ({
    posts: state.posts
      .map(post => {
        if (post.id === id) {
          const newComment: CommentModel = {
            id: crypto.randomUUID(),
            user: "TU",
            text: commentText,
          };

          const comments: CommentModel[] = [...post.comments, newComment];
          const isCommented: boolean = true;

          return {
            ...post,
            isCommented,
            comments
          };

        } else {
          return post;
        }
      }),
  });
}
