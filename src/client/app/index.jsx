
import React from 'react';
import ReactDOM from 'react-dom';
// import Provider from './components/Provider';

import {
    HashRouter,
    Router,
    Route,
    IndexRoute,
    Navigation
} from 'react-router-dom';

import { createBrowserHistory } from 'history'
const history = createBrowserHistory();



import './components/Psychotest/styles.css';

import NavBar from './components/NavBar';


import App from './components/App';


// the new lp-website
import Company from './components/Pages/Company';
import Contact from './components/Pages/Contact';
import News from './components/Pages/News';
import Services from './components/Pages/Services';




// import Archive from './components/Pages/Archive';
import Computerworld from './components/Pages/Computerworld';
import SeminarStartup from './components/Pages/SeminarStartup';
import SeminarProgramming from './components/Pages/SeminarProgramming';
import SeminarPhilosophy from './components/Pages/SeminarPhilosophy';
import SeminarsInfo from './components/Pages/SeminarsInfo';
import Portal from './components/Pages/Portal';

import { Provider } from 'react-redux';
import { createStore } from 'redux';


import NewsStream from './components/Pages/NewsStream';




// import reducer from './reducers';

var ReactGA = require('react-ga');
ReactGA.initialize('UA-104455713-2');


function logPageView() {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}


history.listen(( location, action) => {
    logPageView();
})




let initialState: State = {
	"language": ['de', 'en'],
	"actual_language": 'de'
}



const reducer = (state = initialState, action) => {
  console.log ("state ist " + state);

  switch(action.type) {
    case "LANGUAGE_NOVA":
        return [
        ...state,
          {
          actual_language: action.payload,
          }
        ]

    case "LANGUAGE_SELECTED":
        return Object.assign({}, state, {
           actual_language: action.payload,
        })

    case "BOOK_SELECTED":
        return Object.assign({}, state, {
           actual_book: action.payload,
        })


    case "ESSAY_SELECTED":
        return Object.assign({}, state, {
           actual_essay: action.payload,
        })

    case "CHAPTER_SELECTED":
        return Object.assign({}, state, {
           actual_chapter: action.payload,
        })


    case "AUDIO_SELECTED":
        return Object.assign({}, state, {
           actual_audio: action.payload,
        })

    case "LECTURE_SELECTED":
        return Object.assign({}, state, {
           actual_lecture: action.payload,
        })


    case "VIDEO_SELECTED":
        return Object.assign({}, state, {
           actual_video: action.payload,
        })



    case "ACTIVE_ANIMATOR":
        return Object.assign({}, state, {
           active_animator: action.payload,
        })

    case "CHECK_ANIMATOR":
        if (state.active_animator) 
            {
            state.active_animator.stop();
            state.active_animator = {};  
            return Object.assign({}, state, {
                active_animator: null,
                })

            }
        else return state;


  default:
    return state;
  }
}



let store = createStore(reducer);


window.store = store;



// import JShell from './components/JShell';

import Titelei from './components/Titelei';
import DynamicTitlingBackground from './components/DynamicTitlingBackground'


ReactDOM.render((
      <Provider store={store}>
        <HashRouter history = {history}  >
            <div>
                <Route path="/" render={()=><App/>}/>
                <Route path="/company" render={()=><Company/>}/>
                <Route path="/contact" render={()=><Contact/>}/>
                <Route path="/news" render={()=><News/>}/>
                <Route path="/services" render={()=><Services/>}/>

                <Route path="/StartupYourself" render={()=><SeminarStartup/>}/>
                <Route path="/DigitalThinking" render={()=><SeminarProgramming/>}/>
                <Route path="/DigitalPhilosophy" render={()=><SeminarPhilosophy/>}/>
                <Route path="/SeminarsInfo" render={()=><SeminarsInfo/>}/>
                <Route path="/Portal" render={()=><Portal/>}/>


                <Route path="/NewsStream" render={()=><NewsStream />}/>


                <Route path="/intro" render={()=><News/>}/>
                <Route path="/schedule" render={()=><Schedule/>}/>
                <Route path="/objectives" render={()=><Objectives/>}/>
                <Route path="/about" render={()=><About/>}/>
                <Route path="/NIT" render={()=><NIT/>}/>
                <Route path="/Burckhardt" render={()=><Burckhardt/>}/>
                <Route path="/motivation" render={()=><Motivation/>}/>
                <Route path="/signup" render={()=><Login/>}/>



                <Route path="/computerworld" render={()=><Computerworld/>}/>


            </div>
        </HashRouter >
      </Provider>
    ), document.getElementById('root'));