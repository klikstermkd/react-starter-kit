import App from './components/App';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

export default ({ getState, dispatch }) => (
  {
    path: '/',
    component: App,
    indexRoute: { 
      component: Page1
    },
    childRoutes: [
      { 
        path: '/page-1', 
        component: Page1
      },
      { 
        path: '/page-2', 
        component: Page2,
      },
      
      // If there is a non-matching route,
      // redirect to index
      {
        path: '/*',
        onEnter(nextState, replace) {
          replace('/');
        }
      }
    ]
  }
);