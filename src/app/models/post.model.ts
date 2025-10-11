import {CommentModel} from './comment.model';

export interface PostModel {
  readonly id: string;
  readonly user: string;
  readonly avatarUrl: string;
  readonly publishTime: string;
  readonly text: string;
  readonly likes: number;
  readonly isLiked: boolean;
  readonly isCommented: boolean;
  readonly comments: CommentModel[];
}
