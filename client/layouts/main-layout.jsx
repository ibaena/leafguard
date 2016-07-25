import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import Footer from '../leafguard/Footer.jsx';
export const MainLayout = ({content}) => (

  <div id="body">
    <header>
    </header>

    <main>
      {content}
    </main>

    <footer>
      <Footer />
    </footer>


  </div>
)
