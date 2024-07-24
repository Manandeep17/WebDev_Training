import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

function ShowUser() {
  const navigate=useNavigate();
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    const resp = await fetch("http://localhost:3000/users");
    const json = await resp.json();
    setUsers(json);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const deleteData = async (id) => {
    const resp = await axios.delete("http://localhost:3000/users/" + id);
    alert("User deleted successfully");
    fetchData();
  };
  
  const editData=(id)=>{
navigate(`/edit/${id}`);
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>

              <button onClick={() => deleteData(item.id)}>X</button>
              <button onClick={() => editData(item.id)}>Edit</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowUser;
