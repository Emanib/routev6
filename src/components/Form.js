import { useState } from 'react';
import {useNavigate} from 'react-router'
const Form = () =>
{
    const [userData, setUserData] = useState({ userName: "", role: " " });
    const navigate = useNavigate()
    const handleChangeUser = (e) =>
    {
        e.preventDefault();
        setUserData((prev) =>
        {
            
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })

    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        
        if (userData.role === "Talent")
        {
            navigate("/Talent")
        }
      
       
       
    }
    return(
        <div>
            <form style = {{display:"flex",flexDirection:"column",alignItems:"center",gap:"5px"}}>
                <label> user Name </label>
                <input type="text" name="userName" onChange={handleChangeUser} />
                 <label> Role </label>
                <input type="text" name="role" onChange={handleChangeUser} />
                {console.log(userData)}
                <button onClick={handleSubmit}> submit </button>
                { userData.role==="employee" ||userData.role === "Admin" ? <div>not access</div> :<div>allow talent</div> }

            </form>

         </div>

    )
}
export default Form; 