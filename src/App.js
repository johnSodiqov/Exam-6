
import './App.css';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  const [search, setSearch] = useState("")

  const navigate = useNavigate();
  function searchByName(query) {
    setSearch(query)
    navigate("/search", { state: query })
  }

  function runn() {
    navigate('/card', { state: 'salom' })
  }
  return (
    <div className="App">
      <div className='container-fluid'>

        <div className="input">
          <div className="burger">
            <div className="burger_item"></div>
            <div className="burger_item"></div>
            <div className="burger_item"></div>
          </div>
          <input type="text" autoFocus="autofocus" placeholder="Search" onInput={(val) => searchByName(val)} />
          <div className="cart-icon">
            <AiOutlineShoppingCart className='fs-2' onClick={() => runn()} />
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default App;
