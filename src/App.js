import './App.css';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
export default class App extends Component {
  apiKey= process.env.REACT_APP_API_URL
  static propTypes = {

  }
  state=
  {
    progress: 0,
  }
  setProgress=(prog)=>
  {
    this.setState({progress:prog});
  }
  render() {
    
    
    return (
      <div> 
      <Router>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        />
          <Routes>
          <Route exact path="/" element={   <News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize={20} country="in" category="general"/> } />
          <Route exact path="/business" element={ <News apiKey={this.apiKey} setProgress={this.setProgress} key="business" pageSize={20} country="in" category="business"/> } />
          <Route exact path="/entertainment" element={ <News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" pageSize={20} country="in" category="entertainment"/> } />
          <Route exact path="/health" element={ <News apiKey={this.apiKey} setProgress={this.setProgress} key="health" pageSize={20} country="in" category="health"/> } />
          <Route exact path="/science" element={ <News apiKey={this.apiKey} setProgress={this.setProgress} key="science" pageSize={20} country="in" category="science"/> } />
          <Route exact path="/sports" element={ <News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" pageSize={20} country="in" category="sports"/> } />
          <Route exact path="/technology" element={ <News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" pageSize={20} country="in" category="technology"/> } />
          </Routes>
      </Router>
      </div>
    )
  }
}