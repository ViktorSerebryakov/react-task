import homePage from '../containers/home';
import gridPage from '../containers/grid';

const routes = [
  {
    exact: true,
    path: '/',
    title: 'Главная',
    component: homePage
  },
  {
    exact: true,
    path: '/grid',
    title: 'Таблица',
    component: gridPage
  },
];

export default routes;
