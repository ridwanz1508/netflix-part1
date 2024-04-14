import React from 'react';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Intro1 from './Components/Intro1';
import Intro2 from './Components/Intro2';
import Intro3 from './Components/Intro3';
import Intro4 from './Components/Intro4';
import Form from './Components/Form';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <div className="page-header">
        <Navbar />
        <Header />
      </div>
      <div className="limit"></div>
      <div className="page-intro1">
        <Intro1 />
      </div>
      <div className="limit"></div>
      <div className="page-intro2">
        <Intro2 />
      </div>
      <div className="limit"></div>
      <div className="page-intro3">
        <Intro3 />
      </div>
      <div className="limit"></div>
      <div className="page-intro4">
        <Intro4 />
      </div>
      <div className="limit"></div>
      <div className="page-form">
        <Form />
      </div>
      <div className="limit"></div>
      <div className="page-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
