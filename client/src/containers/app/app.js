import React, { Component } from 'react';
import { Header, ContentContainer, Footer } from '../../components/layout';
import Router from '../../components/router';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <ContentContainer>
          <Router />
        </ContentContainer>
        <Footer />
      </div>
    );
  }
}

export default App;
