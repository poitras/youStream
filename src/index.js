import React from 'react';
import ReactDOM from 'react-dom';
                      // ./ mean in the current directory go components ...
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCAFOyZ3z4eBAg35LfOuDWGM2SvBSdBvyM'

// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

// import App from './components/app';
// import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));

// Create new component that will produce html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  ) 
}

// React take this component and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));