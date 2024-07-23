import { useState } from "react";

function FormInput(props){
    const {adddata} = props;
    const [input, setInput] = useState({id : '', name : '', email : ''});
    const handleClick = ()=>{
           adddata({id : input.id, name:input.name, email:input.email })
    }
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setInput({
            ...input, [name]:value
        })
    }

    return (
        <div>
            <h3>User Input</h3>
            <label>Enter ID</label><br></br>
            <input type = "number" name = 'id' onChange={handleChange}></input><br></br>

            <label>Enter Name</label><br></br>
            <input type = "text" name = 'name' onChange={handleChange}></input><br></br>

            <label>Enter email</label><br></br>
            <input type = "email"  name = 'email' onChange={handleChange}></input><br></br>
            <br></br>
            <button onClick={handleClick}>Add User</button><br></br>
        </div>
    )
}

export default FormInput;