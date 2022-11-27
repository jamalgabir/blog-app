import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SinglePost from "./pages/SinglePost";
import Write from "./pages/Write";
import "./app.css";
const Layout = () =>{
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/write",
        element: <Write/>
      },
      {
        path:"/post/:id",
        element: <SinglePost/>
      },
    ]
  },
  {
    path:"/login",
    element: <Login/>
  },
  {
    path:"/register",
    element: <Register/>
  },
  
])

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}



export default App;
