import {render} from 'react-dom';
import {hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import configureStore from './store/configure-store';
import Root from './containers/root';

const store = configureStore();


const history = syncHistoryWithStore(hashHistory, store);

render(
  <Root store={store} history={history} />,
  document.querySelector('#app')
);
