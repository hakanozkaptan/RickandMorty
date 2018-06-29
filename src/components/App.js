import React, { Component } from 'react';
import Header from './Partials/HeaderView';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { APP_LOAD } from '../constants/actionTypes';
import DetailsView from './Details/DetailsView';
import Home from './Home/HomeView';

const mapDispatchToProps = dispatch => ({
  onLoad: (payload) =>
    dispatch({ type: APP_LOAD, payload }),
});

class App extends Component {

  componentWillMount() {
    this.props.onLoad();
  }

  render() {
    return (
      <div>
        <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/character/:id" component={DetailsView} />
          </Switch>
      </div>
    );
  }
}

export default connect(() => ({}), mapDispatchToProps)(App);
