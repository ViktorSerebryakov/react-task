import homePage from '../containers/home';
import chartsPage from '../containers/charts';

const routes = [
  {
    exact: true,
    path: '/',
    title: 'Главная',
    component: homePage
  },
  {
    exact: true,
    path: '/charts',
    title: 'Графики',
    component: chartsPage
  },
];

export default routes;
