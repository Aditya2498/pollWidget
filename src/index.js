// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import r2wc from "@r2wc/react-to-web-component"



const PollWidget = r2wc(App,{
  props:{
    polls:"json"
  }
});
customElements.define("poll-widget", PollWidget)




