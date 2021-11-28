import {Link} from 'react-router-dom'
const Home = () =>
{
    return (
        <div>
        <nav>
         <Link to="/talent"> talent</Link>
      {" | "}
          <Link to="/employee">empolyee</Link>
          {" | "}
         <Link to="/Admin">Admin</Link>
              </nav>
            Home 
        </div>

     );
}
 
export default Home;