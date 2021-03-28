import { APP_SECTIONS_PATHS } from 'constants/routes';
import SearcherView from 'views/SearcherView/index';

export const menuRoutes= [
    {
      path: APP_SECTIONS_PATHS.ROOT,
      component: SearcherView,
      exact: true,
      meta: {},
    },
]