import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getAllBank } from "../service/home";


function Home() {

  const [banks, setbanks] = useState([]);

  useEffect(()=>{
    getAllBank().then(data=> setbanks(data));
   },[])

    return (
      <div className="container p-4">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th  className="primary">Descripción</th>
              <th>Nombre</th>
              <th>Año</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>{
            banks.map(item=>(
              <tr key={item.bankName}>
              <td>{item.bankName}</td>
              <td>{item.description}</td>
              <td>{item.age}</td>
              <td> <img src={item.url} className="cardImg" alt="Imagen"/></td>
            </tr>
            ))
            }
          </tbody>
        </Table>
        </div>
      );
}

export default Home;