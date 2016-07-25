import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import Video from './Video.jsx';
import ContentBlock from './ContentBlock.jsx';
import SealContent from './SealContent.jsx';
import Header from './Header.jsx';
import Contact from './Contact.jsx';

export default class Home extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){

 }

  render() {
    return (
        <div className="container" id="white-section">
          <Header />
          <Video />
          <ContentBlock />

        <hr className="style-two" />
          <SealContent />
        <hr className="style-two" />
      
        <Contact />
        </div>

    )
  }
}
