import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, ContentState, EditorState, RichUtils} from 'draft-js';
import {convertFromRaw, convertToRaw} from 'draft-js';

import Button from 'react-button';

import './styles.css';

class Comment extends React.Component {
  constructor(props) {
    super(props);



    this.state = {
        visible: false,
        visibleToolbar: false,
        editorState: EditorState.createEmpty(),
        // editorState: EditorState.createWithContent(ContentState.createFromText('Hello, this is a construction')),
        // editorState: EditorState.createWithContent(JSON.stringify(this.props.data) ),
        toolbarX: 100,
        toolbarY: 100,
      };
      
    this.onChange = (editorState) => this.setState({editorState});

    this._onToolbar.bind(this);
  }



    componentDidMount() {

    if (this.props.data) 
      {
      const contentState = convertFromRaw(this.props.data);
      this.setState( { 
            visible:  true,
            editorState: EditorState.createWithContent( contentState )
            } );         
      } 
    }




    getMousePos(e) {

      this.setState( { 
            toolbarX:  e.nativeEvent.clientX,
            toolbarY:  e.nativeEvent.clientY,
            } ); 
    }


    ToggleVisibility(e) {
 

      if (this.state.visible === false) {
            this.setState( { visible: true} ); 
      }  else {
            this.setState( { 
              visible: false,
              visibleToolbar: false,
              readOnly: true
            } ); 
      }
    }


    _onToolbar(e) {
      this.getMousePos(e);   


      if (this.state.visibleToolbar === false) {
            this.setState( { visibleToolbar: true} ); 
      } 
    }


    _onSubmit() {
        console.log( 'hole den Content' );

        const rawDraftContentState = JSON.stringify( convertToRaw(this.state.editorState.getCurrentContent()) );
        console.log ( rawDraftContentState );

    }

  _onBold(e) {
    this.setState( { visible: true} ); 

    this.onChange(RichUtils.toggleInlineStyle(
      this.state.editorState,
      'BOLD'
    ));
  }


  _onUnderline() {
    this.onChange(RichUtils.toggleInlineStyle(
      this.state.editorState,
      'UNDERLINE'
    ));
  }


  _onStikeThrough() {
    this.onChange(RichUtils.toggleInlineStyle(
      this.state.editorState,
     'STRIKETHROUGH' 
     ));
  }



  _onItalic() {
    this.onChange(RichUtils.toggleInlineStyle(
      this.state.editorState,
      'ITALIC'
    ));
  }

  render() {

  let editor = null;
  let toolbar = null;

  let toolbarStyle = { 
                     left: this.state.toolbarX - 60,
                     top: this.state.toolbarY - 90
                     }

  
  if (this.state.visibleToolbar === true)
  (
    toolbar = (
      <div className =  '_NoteToolbar' style = { toolbarStyle } >
        <Button onClick={ this._onBold.bind(this) }><b>B</b></Button>
        <Button onClick={ this._onItalic.bind(this) }><i>I</i></Button>
        <Button onClick={ this._onUnderline.bind(this) }><span className= 'underline'>U</span></Button>
        <Button onClick={ this._onStikeThrough.bind(this) }><span className='strikethrough'>S</span></Button>
        <Button onClick={ this._onSubmit.bind(this) }>Submit Comment</Button>
      </div>
    )
  ) 







  if (this.state.visible === true) 
        editor = (

                    <div className = '_ExternalComment'>                 
                    <span onClick={ this.ToggleVisibility.bind(this) } className = '_CommentPlaceholder'><img width = {24} height = {24} src = './app/components/Comment/comment.png' /></span>   
                          <div className = '_Comment' onDoubleClick={ this._onToolbar.bind(this) } >
                            <Editor 
                            editorState={this.state.editorState} onChange={this.onChange}  readOnly = {this.props.readOnly} />
                          </div>
                    </div>

        )      
  else
        {
        editor = (
                  <div>
                  <span onClick={ this.ToggleVisibility.bind(this) } className = '_CommentPlaceholder'><img width = {24} height = {24} src = './app/components/Comment/comment.png' /></span>
                  </div>
        )    
    }


    return (
        <div>
            <div> 
                { editor }
            </div>
            { toolbar }
        </div>
    );
  }
}


export default Comment;