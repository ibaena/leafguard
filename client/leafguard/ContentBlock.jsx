import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class ContentBlock extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){

 }

  render() {
    return (
    <div id="content-block">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <div className="left-pic">
            <a href="#">
              <img src="http://placehold.it/250x250" className="img-responsive"/>
            </a>
          </div>
        </div>
        <div className="col-lg-9 col-sm-12 col-xs-12">
            <div className="content-body">
              <h4 className="content-heading">What is Lorem Ipsum?</h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Why do we use it?
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </div>
          </div>
      </div>

      <br />

      <div className="row">
        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
            <div className="content-body">
              <h4 className="content-heading">What is Lorem Ipsum?</h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Why do we use it?
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </div>
          </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className="right-pic">
                <a href="#">
                  <img src="http://placehold.it/250x250" className="img-responsive"/>
                </a>
              </div>
            </div>
          </div>

      <br />

        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="pull-left">
              <a href="#">
                <img src="http://placehold.it/350x150" className="img-responsive"/>
              </a>
            </div>
          </div>
            <div className="col-lg-8 col-md-9 col-sm-12 col-xs-12">
              <div className="content-body">
                <h4 className="content-heading">What is Lorem Ipsum?</h4>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </div>
          </div>
        </div>

        <br />

          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12">
                <div className="content-body">
                  <h4 className="content-heading">What is Lorem Ipsum?</h4>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
            </div>
          </div>

    </div>
    )
  }
}
