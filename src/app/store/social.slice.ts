import {PostModel} from '../models/post.model';
import {POSTS} from '../data/posts';

export interface SocialSlice {
  readonly likeIt: boolean;
  readonly commented: boolean;
  readonly posts: PostModel[];
}

export const initialSocialSlice: SocialSlice = {
  likeIt: false,
  commented: false,
  posts: POSTS, //TODO: rimuovere questa inizializzazione, i dati devo essere recuperati tramite chiamata API (simulata)
}
