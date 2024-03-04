import {Outlet, Link} from "react-router-dom";

const Layout = () => {
  return(
    <>
      <nav>
        <ul>
          <li>
            <Link class="navi" to="/src/App.js">Home</Link>
          </li>
          <li>
            <Link class="navi" to="/About">About Me</Link>
          </li>
          <li>
            <Link class="navi" to="/Videos">Videos (Under Construction)</Link>
          </li>
          <li>
            <Link class="navi" to="/ToDoList">To Do List</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default Layout;
