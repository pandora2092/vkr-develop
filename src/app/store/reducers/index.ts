import { routerReducer } from '@ngrx/router-store';
import { cardListReducer } from './list-card';
import { authReducer } from './auth';
import { contactReducer } from './contact';
import { newsListReducer } from './news';
import { logsListReducer } from './logs';

export function reducers() {
  return {
    router: routerReducer,
    cardList: cardListReducer,
    newsList: newsListReducer,
    logsList: logsListReducer,
    auth: authReducer,
    contact: contactReducer,
  };
}
