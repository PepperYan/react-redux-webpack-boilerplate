import React from 'react';
import {Route, IndexRoute} from 'react-router'

import App from '../containers/App';
import NewComponent from '../containers/newcomponent'
import PageTwo from '../containers/page2'


export default (
  <Route path="/" component={App}>
    <IndexRoute component={NewComponent} />
    <Route path="pagetwo" component={PageTwo}/>

  </Route>
);
