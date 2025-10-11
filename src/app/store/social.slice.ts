import {PostModel} from '../models/post.model';
import {POSTS} from '../data/posts';

export interface SocialSlice {
  readonly posts: PostModel[];
}

export const initialSocialSlice: SocialSlice = {
  posts: POSTS, //TODO: rimuovere questa inizializzazione, i dati devo essere recuperati tramite chiamata API (simulata)
}
