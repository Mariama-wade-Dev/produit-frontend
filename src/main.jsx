// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router } from 'react-router-dom'; // Tu l'appelles Router ici
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <Provider store={store}>
      {/* Remplace <BrowserRouter> par <Router> */}
      <Router> 
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
)