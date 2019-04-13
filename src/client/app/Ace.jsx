import React from 'react';
import ReactDOM from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/clouds';

function onChange(newValue) {
  console.log('change',newValue);
}





ReactDOM.render(
  <AceEditor
    mode="javascript"
    theme="clouds"
    onChange={onChange}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{$blockScrolling: true}}
  />,
  document.getElementById('root')
);