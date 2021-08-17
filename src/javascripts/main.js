// Required by Webpack - do not touch
//require.context('../', true, /\.(html|json|txt|dat)$/i)
//require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// TODO
import React from 'react'
import ReactDOM from 'react-dom'
import { Home } from './components/Home'
import { BasketItem } from './components/BasketItemFormik'
import { Register } from './components/Register'
import { Login } from './components/Login'
import { SignOut } from './components/SignOut'
import { BasketItemDelete } from './components/BasketItemDelete'

import 'bootstrap';
import { BasketItemForm } from './components/BasketItemForm'
import { BasketForm } from './components/BasketForm'


if (document.getElementById('main')) {
  ReactDOM.render(<Home/>, document.getElementById('main'))
} 
else if (document.getElementById('itemform')) {
  ReactDOM.render(<BasketItemForm/>, document.getElementById('itemform'))
} 
else if (document.getElementById('delete')) {
  ReactDOM.render(<BasketItemDelete/>, document.getElementById('delete'))
} 
else if (document.getElementById('basketform')) {
  ReactDOM.render(<BasketForm/>, document.getElementById('basketform'))
} 
else if (document.getElementById('registerForm')) {
  ReactDOM.render(<Register/>, document.getElementById('registerForm'))
} 
else if (document.getElementById('loginForm')) {
  ReactDOM.render(<Login/>, document.getElementById('loginForm'))
} 
