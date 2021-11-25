import {useState} from 'react'
const Form = () =>
{
    const [userData, setUserData] = useState({ userName: "", role: " " });
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
    return(
        <div>
            <form style = {{display:"flex",flexDirection:"column",alignItems:"center",gap:"5px"}}>
                <label> user Name </label>
                <input type="text" name="userName" onChange={handleChangeUser} />
                 <label> Role </label>
                <input type="text" name="role" onChange={handleChangeUser} />
                {console.log(userData)}
                <button> submit </button>

            </form>

         </div>

    )
}
export default Form; 