import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Email } from 'meteor/email'


export default class Contact extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){

 }

 sendMessage(event){
   event.preventDefault();
   //console.log(this.refs.name.value, this.refs.phone.value, this.refs.email.value);
   let contactName = String(this.refs.name.value);
   let contactPhone = String(this.refs.phone.value);
   let contactEmail = String(this.refs.email.value);
   Bert.alert( 'Thank you we will be in touch shortly!', 'success', 'fixed-top', 'fa-smile-o' );
 }

  render() {
    return (
      <div className="row">
        <div className="col-lg-6 col-lg-offset-3">
          <h2 id="contact-title">Sign Up For Your Free Estimate</h2>
        <form className="form-horizontal" onSubmit={this.sendMessage.bind(this)}>
          <div className="form-group">
            <label htmlFor="inputEmail" className="col-sm-2 control-label">Name:</label>
            <div className="col-sm-10 col-lg-8">
              <input type="text" className="form-control" id="inputName" placeholder="Name" ref="name" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword" className="col-sm-2 control-label">Phone:</label>
              <div className="col-sm-10 col-lg-8">
                <input type="phone" className="form-control" id="inputPhone" placeholder="Phone" ref="phone"/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputEmail" className="col-sm-2 control-label">Email:</label>
                <div className="col-sm-10 col-lg-8">
                  <input type="email" className="form-control" id="inputEmail" placeholder="Email" ref="email"/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-8">
                    <button type="submit" className="btn btn-default btn-lg btn-block">Sign Up Now!</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-7 col-lg-offset-2">
              <p id="disclaimer" className="text-muted">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
              </p>
            </div>
        </div>
    )
  }
}
