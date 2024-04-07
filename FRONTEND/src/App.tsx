import { useEffect, useState } from 'react'
import './App.css'
import Request from './components/request';
import Response from './components/response';
import { addProducts, getAllProducts } from './services/product.service';
import { addUsers, getAllUsers } from './services/user.service';
import { addRelationSpecail, deleteSpecialPriceUser, getAlllSpecialPriceUser } from './services/specialproducts.service';
import Methods from './components/methods';

function App() {
  const [showRequest, setShowRequest] = useState(false);
  const [showResponse] = useState(true);
  const [products, setProducts] = useState({});
  const [users, setUsers] = useState({});
  const [specialPrices, setUSpecialPrices] = useState({});
  const [req, setReq] = useState({});
  const [res, setRes] = useState({});
  const [uri, setUri] = useState('/products');



  const generateProducts = () => {
    getAllProducts()
      .then((res) => {
        console.log("Esta es la respuesta para traer los productos", res.data);
        setProducts(res.data);

        const exisitngProducts = res.data;
        //luego de tner todos los productos genero un producto pero tiene que ser disitnto a los productos ya registrados
        let newProduct = {
          stock: Math.floor(Math.random() * 51),
          unit_price: Math.round(Math.random() * 9000),
          special_price: Math.round((Math.random() * 9000) / 2),
          brand: "Brand " + Math.ceil(Math.random() * 20),
          name: `Product ${Math.ceil(Math.random() * 30)}`
        }

        // @ts-ignore
        const isDuplicate = exisitngProducts.some(productExist => productExist.name === newProduct.name);


        if (!isDuplicate) {
          addProducts(newProduct)
            .then((res) => {
              console.log(res.data);
              setReq(newProduct);
              setShowRequest(true);
            }).catch((err) => console.log(err));
        }

      }).catch((err) => console.log(err));
  }

  const generateUsers = () => {
    getAllUsers()
      .then((res) => {
        console.log("Users en funcion generateUsers: ", res.data);
        setUsers(res.data);
        const existingUser = res.data;

        let newUser = {
          name: `User_${Math.ceil(Math.random() * 30)}`
        }

        // @ts-ignore
        const isDuplicate = existingUser.some(userExist => userExist.name === newUser.name);

        if (!isDuplicate) {
          addUsers(newUser).then((res) => {
            console.log(res.data);
            setReq(newUser);
            setShowRequest(true);

          })
            .catch((error) => console.log(error));
        }
      }).catch((error) => console.log(error));
  }

  // @ts-ignore
  function calculateRandom(object) {
    // Obtener la longitud del objeto `users`
    const length = Object.keys(object).length;

    // Calcular un número aleatorio entre 1 y 20 basado en la longitud del objeto `users`
    const randomNumber = Math.ceil(Math.random() * length);

    // Devolver el número aleatorio calculado
    return randomNumber;
  }

  const generateRelationSpecialPrice = () => {
    getAllUsers()
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      }).catch((err) => console.log(err));

    getAllProducts()
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      }).catch((e) => console.log(e));

    const randomIndexUser = calculateRandom(users);
    const randomIndexProduct = calculateRandom(products);

    const requestBodySpecial = {
      // @ts-ignore
      user_id: users[randomIndexUser]._id,
      // @ts-ignore
      product_name: products[randomIndexProduct].name,
    }


    // @ts-ignore
    addRelationSpecail(users[randomIndexUser]._id, products[randomIndexProduct].name)
      .then((res) => {
        console.log(res.data);
        setReq(requestBodySpecial);
        setShowRequest(true);
      }).catch((error) => console.log(error));

  }

  const handleChangueGetMethod = () => {
    if (uri === '/products') {
      getAllProducts().then((res) => {
        console.log(res.data);
        setRes(res.data);
        setShowRequest(false);
      }).catch((err) => console.log(err));
    }
    if (uri === '/users') {
      getAllUsers().then((res) => {
        console.log(res.data);
        setRes(res.data);
        setShowRequest(false);
      }).catch((err) => console.log(err));
    }
    if (uri === '/specialPrices') {
      getAlllSpecialPriceUser()
        .then((res) => {
          console.log("Respuesta productos especiacles y suss relaciones: ", res.data);
          setRes(res.data);
          setShowRequest(false);
        }).catch((err) => console.log(err));
    }
  }

  const handleChanguePostMethod = () => {
    if (uri === '/products') {
      generateProducts();
    }
    if (uri === '/users') {
      generateUsers();
    }
    if (uri === '/specialPrices') {
      generateRelationSpecialPrice();
    }
  }

  const handleChangueDeleteMethod = () => {
    if (uri === '/deleteRelationSpecial') {
      getAlllSpecialPriceUser()
        .then((res) => {
          console.log("Traer todas las relaciones especiales: ", res.data);
          setUSpecialPrices(res.data);
        }).catch((err) => console.log(err));



      const randomIndexSpecialUsers = calculateRandom(specialPrices);

      // @ts-ignore
      deleteSpecialPriceUser(specialPrices[randomIndexSpecialUsers]._id)
        .then((res) => {
          console.log(res);
          setRes(res.data);
        }).catch((err) => console.log(err));
    }
  }

  useEffect(() => {
    // eslint-disable-next-line
    handleChangueGetMethod();
  }, []);

  return (
    <>
      <h1>PAGO FIABLE Documentation API</h1>
      <Methods />
      <h2>Try it now!</h2>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon3">https://vercel-backend-ery29jnib-user-2020.vercel.app/api/v1</span>
        <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" value={uri} onChange={(e) => setUri(e.target.value)} />
        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Peticiones</button>
        <ul className="dropdown-menu dropdown-menu-end">
          <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); handleChangueGetMethod() }} style={{ color: 'green' }}>Get</a></li>
          <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); handleChanguePostMethod() }} style={{ color: 'orange' }}>Post</a></li>
          <li><a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); handleChangueDeleteMethod() }} style={{ color: 'red' }}>Delete</a></li>
          {/* <li><hr className="dropdown-divider"/></li> */}
          {/* <li><a className="dropdown-item" href="#">Separated link</a></li> */}
        </ul>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
        {showRequest && <Request requestBody={req} />}
        {showResponse && <Response responseBody={res} />}
      </div>
    </>
  )
}

export default App
