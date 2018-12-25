import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHomesList } from '../actions/apiActions';
import Navbar from './Navbar';
import ListView from './ListView';
import MapView from './MapView';
import '../styles/App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchHomesList(1,41.385063,2.173404);
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='MainView'>
          <ListView />
          <MapView />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  fetchHomesList: page => dispatch(fetchHomesList(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
