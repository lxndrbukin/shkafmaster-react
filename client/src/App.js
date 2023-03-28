import React from 'react';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <Homepage />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}
