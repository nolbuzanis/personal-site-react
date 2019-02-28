import React from 'react';
import ContactList from './ContactList';
import PortfolioGrid from './PortfolioGrid';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <div className='header'>
          <div className='header-content'>
            <h1>Nolan Buzanis</h1>
            <span>Engineer | Entrepreneur</span>
            <ContactList />
          </div>
          <a className='down-button' href='/'>
            <svg
              enableBackground='new 0 0 32 32'
              height='32px'
              id='Слой_1'
              version='1.1'
              viewBox='0 0 32 32'
              width='32px'
              xmlSpace='preserve'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
            >
              <path
                id='Expand_More'
                d='M24.285,11.284L16,19.571l-8.285-8.288c-0.395-0.395-1.034-0.395-1.429,0  c-0.394,0.395-0.394,1.035,0,1.43l8.999,9.002l0,0l0,0c0.394,0.395,1.034,0.395,1.428,0l8.999-9.002  c0.394-0.395,0.394-1.036,0-1.431C25.319,10.889,24.679,10.889,24.285,11.284z'
                fill='#121313'
              />
            </svg>
          </a>
        </div>
        <PortfolioGrid />
      </div>
    );
  }
}

export default App;
