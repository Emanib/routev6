import { useLocation } from "react-router";
const Admin = () =>
{
    const location = useLocation()
    return (
        <div>
   page one, location is : {location.state}
    </div>
    );
}
 
export default Admin;