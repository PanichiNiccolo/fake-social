import {PostModel} from '../models/post.model';

export interface SocialSlice {
  readonly posts: PostModel[];
}

export const initialSocialSlice: SocialSlice = {
  posts: [],
}
