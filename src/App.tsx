import * as React from 'react';
/* tslint:disable */

interface IAppState {
  num1: number;
  num2: string;
  action: string;
  result: number;
  display: string;
  count: number;
}



class App extends React.Component <{}, IAppState> {
  public state = {num1: 0, num2: "", result: 0, count: 1, action: "", display: ""}

  public render() {
    
    return (
      <div id = "calc">
        <p id="display">
          {this.state.display}<br/>
        </p>

          <button onClick={this.clrHandler} id="clr" >Clear</button>
          <button onClick={this.opHandler} value="+" id="operator">+</button> 
          <br/>
          <button onClick={this.numHandler} value="7" >7</button>
          <button onClick={this.numHandler} value="8" >8</button>
          <button onClick={this.numHandler} value="9" >9</button>
          <button onClick={this.opHandler} value="-" id="operator">-</button>
          <br/>
          <button onClick={this.numHandler} value="4" >4</button>
          <button onClick={this.numHandler} value="5" >5</button>
          <button onClick={this.numHandler} value="6" >6</button>
          <button onClick={this.opHandler} value="*" id="operator">x</button>
          <br/> 
          <button onClick={this.numHandler} value="1">1</button>
          <button onClick={this.numHandler} value="2" >2</button>
          <button onClick={this.numHandler} value="3" >3</button>
          <button onClick={this.opHandler} value="/" id="operator">/</button>
          <br/>
          <button onClick={this.numHandler} value="0" id="zero">0</button>
          <button onClick={this.numHandler} value="9" >.</button>
          <button onClick={this.resHandler} value="res" id="operator">=</button>
          <br/> 
          <br/><br/>
          
          <div id="test">
            display: {this.state.display}<br/>
            num1: {this.state.num1}<br/>
            num2: {this.state.num2}<br/>
          </div>

      </div>
    );  
  }


  public numHandler = (event: any) => {

    if (this.state.count === 1)
    {
      this.setState ({
      
      display: this.state.display + event.target.value, 
      num1: parseInt((this.state.display + event.target.value), 0),
      });
    }

    if (this.state.count === 2)
    {
      this.setState ({
      display: this.state.display + event.target.value, 
      num2: this.state.num2 + event.target.value
      });
    }

  };

  public opHandler = (event: any) => { 
    this.setState( {
      count: this.state.count + 1,
      action: event.target.value,
      display: this.state.display + " " + event.target.value + " ",
      
    } );
  };

  public resHandler = () => { 
    switch(this.state.action) {
      case "+":
        this.setState( { display: this.state.display + " = " +(this.state.num1 + parseInt(this.state.num2, 0)) });
        break;   

      case "-":
      this.setState( { display: this.state.display + " = " +(this.state.num1 - parseInt(this.state.num2, 0)) });
        break;

      case "*":
      this.setState( { display: this.state.display + " = " +(this.state.num1 * parseInt(this.state.num2, 0)) });
        break;

      case "/":
      this.setState( { display: this.state.display + " = " +(this.state.num1 / parseInt(this.state.num2, 0)) });
        break;
    }

    if (this.state.num2 === "")
      {
        this.setState( { display: this.state.num1 + " = " +this.state.display })
      }

    this.setState ({
      num1: 0,
      num2: "",
      count: 0
    });
  };

  public clrHandler = () => {
    this.setState ({
      display: " ",
      num1: 0,
      num2: "",
      count: 1
    });
  };
}

export default App;