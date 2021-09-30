import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomePage from "./components/HomePage"
import MobileNumber from "./components/MobileNumber"
import OtpPage from "./components/OtpPage"

const App = () => {
  return (
    <Router>
      <div style={{ backgroundColor: "grey" }}>
        <Switch>
          <Route path='/' exact component={MobileNumber} />
          <Route path='/otp' component={OtpPage} />
          <Route path='/home' component={HomePage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
