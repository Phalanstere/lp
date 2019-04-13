import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import Button from 'react-button';


import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/github';
import 'brace/theme/chrome';
import 'brace/theme/ambiance';

import './styles.css';

import Comment from '../../components/Comment';
import cm from '../../components/Comment/test.json';





function onChange(newValue) {
  console.log('change',newValue);
}


class JSEditor extends Component {

 constructor(props) {
    super(props);
    var self = this;

    this.editorText = '// input your code here';
    this.consoleText = '';


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
                self.updateMessage(text, "warn");
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
        editor: '//Comment',
        focus: true
    }

 }




componentDidMount() {
    this.consoleText = '';

}


 proxy(context, method, message) { 
  return function() {
    method.apply(context, [message].concat(Array.prototype.slice.apply(arguments)))
  }
}

updateMessage(text, type) {

    let s = '';

    switch(type) {
        case "log":
            s += '<div class = "ace_log">' + text + '</div>';
        break;

        case "error":
           s += '<div class = "ace_error">' + text + '</div>';
        break;

       case "info":
           s += '<div class = "ace_info">' + text + '</div>';
        break;

       case "warn":
           s += '<div class = "ace_warning">' + text + '</div>';
        break;

        default:

        break;
    }

    
    this.consoleText += s;
    // this.refs.console.innerHTML = this.consoleText;

    this.setState({
		msg: this.consoleText,
        editor: this.editorText
	});

}


evaluationMessage(text) {
 let s = '';
 s += '<div class = "ace_error">' + text + '</div>';

 this.consoleText = s;

 this.setState({
		msg: this.consoleText,
	});   
}


onFocus() {
    this.setState({
        focus: true
	});
}

onBlur() {
    this.setState({
        focus: false
	});
}



linkEditor(obj) {
    this.editor = obj;
}


onChange(text) {
    // if (this.editor) 
    // this.editor.setShowPrintMargin(false);  // Das funktioniert nicht

    this.editorText = text;
}


eval() {
    this.consoleText = '';

    try {
        eval(this.editorText); 
    } catch (e) {
        this.evaluationMessage(e, "error");
        // console.log(e);
    }

}


  render() {

    let buttonStyle = {
        background: 'gainsboro',
        marginTop: 20,
        fontFamily: 'monospace',
        border: 'solid 1px black'
    }


    let ace = {};

    if (this.state.focus === true) {
        ace = <AceEditor
                mode="javascript"
                theme="github"
                name="MyEditor"
                onBeforeLoad = {(editor) => {
                   this.linkEditor(editor);     
                }}

                
                onFocus={ this.onFocus.bind(this) }
                onBlur={ this.onBlur.bind(this) }

                onLoad={(editor) => {
                    editor.getSession().setUseWorker(true);
                    editor.focus();
                    editor.setShowPrintMargin(false);
                }}
                fontSize={16}
                width='100%'
                height='100%'
                value= { this.editorText }
                defaultValue={this.editorText}
                onChange={this.onChange.bind(this)}
                editorProps={{$blockScrolling: Infinity, enableBasicAutocompletion: true, enableLiveAutocompletion: true, enableSnippets: true}}
            />
    }
    else
        {
        ace = <AceEditor
            mode="javascript"
            theme="chrome"
            name="MyEditor"
            onBeforeLoad = {(editor) => {
                this.linkEditor(editor);     
            }}
            
            onFocus={ this.onFocus.bind(this) }
            onBlur={ this.onBlur.bind(this) }


            onLoad={(editor) => {
                editor.getSession().setUseWorker(true)
            }}
            fontSize={16}
            width='100%'
            height='100%'
            value= { this.editorText }
            defaultValue={this.editorText}
            onChange={this.onChange.bind(this)}
            editorProps={{$blockScrolling: Infinity}}
          />    
        }



    return (
        
        <div className = 'AcePage'> 
            <div className = 'AceContainer'>
                { ace }

                <Button onClick =   { this.eval.bind(this) } style = {buttonStyle} >Run Code</Button>

                <div className = 'MyConsole'>
                    <div  ref='console' className = 'InnerConsole' >
                        {renderHTML(this.consoleText)}
                    </div>
                </div>
                <div>
                  <Comment readOnly = {false} />
                </div>    
            </div>
        </div>
    );
  }
}

export default JSEditor;