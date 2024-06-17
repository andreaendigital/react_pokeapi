import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

export default function Navegacion() {
  const setActiveClass = ({ isActive }) => (isActive ? "activo" : 'inactivo');
  return (
    <div>
      <Navbar bg="warning" variant="warning">
        <Container>
          <Navbar.Brand href="/home" ><img className='imagenNav' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt=""></img></Navbar.Brand>
          <div className='d-flex justify-content-end'>
            <Nav className="me-auto ">
              <NavLink to="/" className={(setActiveClass)}  ><p className='me-3 fs-3'>Home</p></NavLink>
              <NavLink to="/pokemones" className={setActiveClass} ><p className='fs-3 '>Pokédex</p></NavLink>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </div>
  )
}