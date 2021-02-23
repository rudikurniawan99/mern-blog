import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Home, Login, Register } from "../../pages"

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default Routes
