import React, { Component } from 'react';
import './App.css';
import Navigation from './common/header.component';
import Main from './common/main.component';
import Footer from './common/footer.component';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <Main {...this.props}/>
        </div>
        <Footer />
      </div>
    );
  }
}

App.defaultProps = {
  api: 'http://ec2-52-27-199-57.us-west-2.compute.amazonaws.com:7475'
}

export default App;
