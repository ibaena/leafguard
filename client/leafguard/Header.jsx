import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class Header extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){

 }

  render() {
    return (
      <div className="container">
        <div className="page-header">
          <div className="row">
          <div className="col-lg-6 col-sm-6 col-xs-6 heading">
            <h1>Example page header</h1>
          </div>

          <div className="col-lg-6 col-sm-6 col-xs-6 heading">
            <h1>Example page header</h1>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
