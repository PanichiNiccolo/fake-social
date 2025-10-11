import {CommentModel} from './comment.model';

export interface PostModel {
  readonly id: string;
  readonly user: string;
  readonly avatarUrl: string;
  readonly publishTime: string; //TODO: gestire meglio
  readonly text: string;
  readonly likes: number;
  readonly comments: CommentModel[];
}
