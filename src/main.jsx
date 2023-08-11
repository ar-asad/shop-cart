import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes'
import { Provider } from 'react-redux'
import store from './app/store'
import App from './App'

// const style = {
//   // fontFamily: 'Cookie, cursive'
//   // font-family: 'Cookie', cursive;
//   fontFamily: 'Poppins, sans-serif'
// };

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
      <Provider store={store}>
        <RouterProvider router={router}>
          <App></App>
        </RouterProvider>
      </Provider>
      {/* <Toaster /> */}
    </div>
  </React.StrictMode>,
)
