import { NavLink, Outlet, Redirect } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom'
import EditUserPage from './EditUserPage'
import UserPage from './UserPage'
import UsersListPage from './UsersListPage'

const UsersLayout = () => {
  // const { path } = useRouteMatch()
  // console.log(path)

  return (
    <div>
      <h1>Users Layout</h1>
      {/* <Switch>
        <Route path={'/:userId/profile'} component={UserPage} />
        <Route path={ '/:userId/edit'} component={EditUserPage} />
        <Route path={path} exact component={UsersListPage} />
        <Redirect from={path + '/:userId'} to={path + '/:userId/profile'} />
      </Switch> */}
      <ul>
        <li>
          <NavLink to="/">Home page</NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  )
}

export default UsersLayout
