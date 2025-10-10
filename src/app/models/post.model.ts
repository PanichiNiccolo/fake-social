import {Comment} from './comment.model';

export interface Post {
  readonly id: string;
  readonly user: string;
  readonly avatarUrl: string;
  readonly publishTime: string; //TODO: gestire meglio
  readonly text: string;
  readonly likes: number;
  readonly comments: Comment[];
}
