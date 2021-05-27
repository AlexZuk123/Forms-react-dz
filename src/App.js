import React, {Component} from 'react';
import './App.css';

class Form extends Component{
  nameRef = React.createRef();
  lastNameRef = React.createRef();
  emailRef=React.createRef();
  render(){
    const handlerSubmit = event => {
      event.preventDefault();
      let str = this.nameRef.current.value + " ";
      str += this.lastNameRef.current.value + " ";
      str += this.emailRef.current.value;
      alert(str);
    };
    return(
      <form onSubmit={handlerSubmit}>
        <div className="formElement">
          <input type="text" placeholder="Nick-name" ref={this.nameRef} required/>
        </div>
        <div className="formElement">
          <input type="password" placeholder="Password" ref={this.lastNameRef} required/>
        </div>
        <div className="formElement">
          <input type="text" placeholder="email" ref={this.emailRef} required/>
        </div>
        <div className="formElement">
          <input type="submit" value="Send"/>
        </div>
      </form>
    );
  }
}

export default class App extends Component{
  render(){
    return(
      <>
      <Form/>
      </>
    );
  }
}
