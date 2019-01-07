import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import store from '../../store/DataStore';
import Header from '../Header';
import Column from '../Column';

class App extends Component {
  render() {
    const {
      langData,
      docData,
      confData,
    } = store.getData;
    return (
      <div className="container">
        <div className="row">
          <Header/>
        </div>
        <div className="row">
          <Column title="Language" data={langData} dataKey='langData'/>
          <Column title="Doctype" data={docData} dataKey='docData'/>
          <Column title="Confidentiality" data={confData} dataKey='confData'/>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
