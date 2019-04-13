import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import renderHTML from 'react-render-html';
import Button from 'react-button';


import './codemirror.css';

import 'codemirror/mode/javascript/javascript';





class JShell extends Component {

 constructor(props) {
   super(props);

   let self = this;

   this.mode = 'javascript';
   this.consoleText = '//MESSAGES';


    let console = (function(oldCons){
        return {
            log: function(text){
                oldCons.log(text);

                self.updateMessage(text, "log");
                // Your code
            },
            info: function (text) {
                oldCons.info(text);
                // Your code
                self.updateMessage(text, "info");
            },
            warn: function (text) {
                oldCons.warn(text);
                // Your code
                alert("WARNING");
            },
            error: function (text) {
                oldCons.error(text);
                // Your code
                self.updateMessage(text, "error");
            }
        };
    }(window.console));

    window.console = console;
    this.console = console;



    this.state = {
        code: "// Code",
        msg: '// CONSOLE MESSAGES'
    }

 }



updateMessage(text, type) {

    let s = '';

    switch(type) {
        case "log":
            s += '<div class = "_log">' + text + '</div>';
        break;

        case "error":
           s += '<div class = "_error">' + text + '</div>';
        break;

       case "info":
           alert("INFO");
           s += '<div class = "_info">' + text + '</div>';
        break;
        default:

        break;
    }

    
    this.consoleText += s;
    // this.refs.console.innerHTML = this.consoleText;

    this.setState({
		msg: this.consoleText,
	});

}


updateCode(newCode) {
	this.setState({
		code: newCode,
	});

}


componentDidMount() {
    console.log("JSHELL getriggert");
}


 proxy(context, method, message) { 
  return function() {
    method.apply(context, [message].concat(Array.prototype.slice.apply(arguments)))
  }
}




eval() {
    // eval( this.state.code) ;

    try {
        eval(this.state.code); 
    } catch (e) {
        // alert("Hier gibt es einen Irrtum " + e.message);
        this.updateMessage(e.message, "error");

    }

}


  render() {
	let options = {
		lineNumbers: true,
        mode: this.mode
	};


    let buttonStyle = {
        background: 'lightyellow',
        marginTop: 60,
        marginLeft: '20%',
    }

    return (
        
        <div>

        <CodeMirror value={this.state.code} onChange={this.updateCode.bind(this)} options={options} />
        <Button onClick =   { this.eval.bind(this) } style = {buttonStyle} >Run Code</Button>

            <div className = 'MyConsole'>
                <div  ref='console' className = 'InnerConsole' >
                    {renderHTML(this.consoleText)}
                </div>
            </div>    

        </div>
    );
  }
}

export default JShell;