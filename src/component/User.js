import { Link, Route, Switch, NavLink } from "../react-router-dom"
import RouterContext from "../react-router-dom/RouterContext"
import UserDetail from "./UserDetail"
import UserList from "./UserList"
import UserAdd from "./UserAdd"



export default function User() {



  return (
    <div>
      <ul>
        <li>
          <NavLink to="/user/detail" >user/detail</NavLink>

        </li>
        <li>
          <NavLink to="/user/list" >user/list</NavLink>
        </li>
        <li>
          <NavLink to="/user/add" >user/add</NavLink>
        </li>
      </ul>
      <Switch>

        <Route exact path="/user/detail" component={UserDetail} />
        <Route path="/user/list" component={UserList} />
        <Route path="/user/add" component={UserAdd} />
      </Switch>
    </div>
  )

  return (
    <RouterContext.Consumer>
      {(value) => {


        return <div>User</div>

      }}
    </RouterContext.Consumer>
  )

}