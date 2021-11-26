import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {hydrate, render} from 'react-dom'

const $root = document.getElementById('root')

// using react snap 
if($root.hasChildNodes()) {
  hydrate(<App />, $root)
}else{
  render(<App />, $root)
}




// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )
