import React from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <body>
    <div className="weather-channel__container">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  </body>
  );
}

export default App;
