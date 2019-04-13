
import { combineReducers } from 'redux';

// Testfile
import languages from './languages';

console.log ('LANGUAGES');
console.log (languages);

const allReducers = combineReducers({ 
    language: languages
})


export default allReducers;