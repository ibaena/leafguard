import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class SealContent extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){

 }

  render() {
    return (
      <div className="row">
          <div className="col-lg-12 col-sm-12 col-xs-12 col-md-12" id="seals-title">
            <span id="seals-text">As Seen on TV</span>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="seals">
              <img src="http://placehold.it/300x150" className="sealImgs img-responsive "/>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="seals">
              <img src="http://placehold.it/300x150" className="sealImgs img-responsive "/>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="seals">
              <img src="http://placehold.it/300x150" className="sealImgs img-responsive "/>
            </div>
          </div>

      </div>
    )
  }
}
