import { routerReducer } from '@ngrx/router-store';
import { newsListReducer } from './list-news';
import { authReducer } from './auth';
import { contactReducer } from './contact';

export function reducers() {
  return {
    router: routerReducer,
    newsList: newsListReducer,
    auth: authReducer,
    contact: contactReducer,
  };
}
