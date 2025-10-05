import Home from "./Pages/Home/Home";
import NewUser from "./Pages/NewUser/NewUser";
import Products from "./Pages/Products/Products";
import Users from "./Pages/Users/Users";

let Routes = [
  { path: '/', element: <Home/> },
  { path: '/NewUser', element: <NewUser/> },
  { path: '/Products', element: <Products/> },
  { path: '/Users', element: <Users/> },
]

export default Routes;
