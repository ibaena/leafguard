import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class Video extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){

 }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12 col-sm-12">
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/NpEaa2P7qZI" frameBorder="0" allowFullScreen></iframe>
        </div>
      </div>
    )
  }
}
