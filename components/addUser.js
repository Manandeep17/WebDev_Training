import {  useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function AddUser() {
    const navigate=useNavigate();
    const[user,setUser]=useState({id:'',name:'',email:''})
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const resp=await axios.post('http://localhost:3000/users',user);
        // console.log(resp);
        if(resp.status==201){
            alert('User created')
            navigate('/list')
        }else{
            alert('Error while creating user')
        }
    }
    return ( 
        <div>
            <h2>User Registeration</h2>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter id"
            onChange={(e)=>setUser({...user,id:e.target.value})}/><br/><br/>
            <input type="text" placeholder="Enter name"
            onChange={(e)=>setUser({...user,name:e.target.value})}/><br/><br/>
            <input type="email" placeholder="Enter email"
            onChange={(e)=>setUser({...user,email:e.target.value})}/><br/><br/>
            <button type="submit">Add user</button>
            </form>
            
        </div>
     );
}

export default AddUser;