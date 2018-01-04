import React, { Component } from 'react'
import Home from './home/home.jsx'
import { BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
class Index extends Component {
  render () {
    return (
     <Router>
       <div>
         <Route exact path="/" component={Home}></Route>
       </div>
     </Router>
    )
  }
}

export default Index