import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

const EditUserPage = () => {
  const { userId } = useParams()
  return (
    <>
      <h1>edit User page</h1>
      <ul>
        <li>
          <NavLink to={'/users/' + userId}>user page</NavLink>
        </li>
        <li>
          <NavLink to={'/users/' + (+userId + 1)}>next user</NavLink>
        </li>
        <li>
          <NavLink to="/users">userList</NavLink>
        </li>
      </ul>
    </>
  )
}

export default EditUserPage
