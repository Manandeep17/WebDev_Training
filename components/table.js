import { useState } from "react";
import FormInput from "./formInput";

import List from "./list";

function Table() {

    const [list, setTable] = useState([])

    const [selected, setSelected] = useState(null);
    const adddata = (obj) => {
        setTable([...list, obj]);
    }

    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                </thead>
                <tbody>{
                    list.map(item => (
                        <tr key={item.id} onClick={() => setSelected(item)}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>

            <FormInput adddata={adddata} /><br></br>
          {selected && <List data={selected}/>}
          

        </div>
    )

}

export default Table;