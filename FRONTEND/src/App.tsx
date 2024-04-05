import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Request from './components/request';
import Response from './components/response';
import { getAllProducts } from './services/product.service';
import { getAllUsers } from './services/user.service';

function App() {
  const [showRequest, setShowRequest] = useState(false);
  const [showResponse, setShowResponse] = useState(true);
  const [req, setReq]= useState({});
  const [res, setRes]= useState({});
  const [uri, setUri] = useState('/products');

  const handleChangueGetMethod = () => {
    if (uri === '/products') {
      getAllProducts().then((res) => {
        console.log(res.data);
        setRes(res.data);
      }).catch((err) => console.log(err));
    }
    if (uri === '/users') {
      getAllUsers().then((res) => {
        console.log(res.data);
        setRes(res.data);
      }).catch((err) => console.log(err));
    }
  }

  const handleChanguePostMethod = () => {

  }

  const handleChangueDeleteMethod = () => {

  }

  useEffect(() => {
    // eslint-disable-next-line
    handleChangueGetMethod();
  }, []);

  return (
    <>
      <h1>PAGO FIABLE Documentation API</h1>
      <h2>Try it now!</h2>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon3">http://localhost:5000/api/v1</span>
        <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" value={uri} onChange={(e)=>setUri(e.target.value)}/>
        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Peticiones</button>
        <ul className="dropdown-menu dropdown-menu-end">
          <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); handleChangueGetMethod() }} style={{ color: 'green' }}>Get</a></li>
          <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); handleChanguePostMethod() }} style={{ color: 'orange' }}>Post</a></li>
          <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); handleChangueDeleteMethod() }} style={{ color: 'red' }}>Delete</a></li>
          {/* <li><hr className="dropdown-divider"/></li> */}
          {/* <li><a className="dropdown-item" href="#">Separated link</a></li> */}
        </ul>
      </div>
      {showRequest && <Request requestBody={"req"} />}
      {showResponse && <Response responseBody={res} />}
    </>
  )
}

export default App
