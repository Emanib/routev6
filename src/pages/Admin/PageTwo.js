import {Link,useNavigate} from 'react-router-dom'
const Admin1 = () =>
{
    
    const navigate = useNavigate();
    
    return (
        <div>

        <h1> page two</h1>
<button onClick = {()=> {navigate("/Admin",{state:"123"})}}> go back </button>   
        </div>
    );
}
 
export default Admin1;