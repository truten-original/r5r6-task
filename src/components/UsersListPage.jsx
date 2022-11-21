import { NavLink, useRouteMatch } from 'react-router-dom'

const UsersListPage = () => {
  // const { path } = useRouteMatch()
  return (
    <div>
      <h1>User List Page</h1>
      <ul>
        {new Array(5).fill('').map((_, index) => (
          <li key={'user_list_component_' + index}>
            <NavLink to={index + '/profile'}>User {index}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UsersListPage
