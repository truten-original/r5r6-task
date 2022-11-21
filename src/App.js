import { Navigate, NavLink, Outlet, useRoutes } from 'react-router-dom';
import './App.css';
import EditUserPage from './components/EditUserPage';
import HomePage from './components/HomePage';
import UserPage from './components/UserPage';
import UsersLayout from './components/UsersLayout';
import UsersListPage from './components/UsersListPage';

function App() {

  const routes = useRoutes([
    {path: '/', element: <HomePage/>},
    {path: 'users', element:<UsersLayout/>, children: [{
      index: true, element:<UsersListPage/>
    },
      {path: ':userId', element: <Outlet/>, children: [
        {path: 'profile', element: <UserPage/>},
        {path: 'edit', element: <EditUserPage/>},
        { index: true, element: <Navigate to='./profile'/>},
        {path: '*', element: <Navigate to="../profile"/>}
      ]}
    ]}
  ]) 
  return (
    <div>
      <h1>App</h1>
      <ul><li><NavLink to='/users'>Users list page</NavLink></li></ul>
     
     {/* <Switch>
     <Route path='/users' component={UsersLayout}/>
      <Route path='/' component={HomePage}/>
      <Redirect to='/'/>
     </Switch> */}
     {routes}
    </div>
  );
}

export default App;
