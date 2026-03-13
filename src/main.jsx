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
import { BrowserRouter } from 'react-router-dom' // On importe le moteur de navigation
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    {/* Le Provider doit envelopper toute l'application pour que Redux fonctionne */}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)


