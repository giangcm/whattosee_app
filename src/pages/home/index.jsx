import React from 'react';
import { CiDesktop } from 'react-icons/ci';

import './header.css';

import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import UserProfile from './profile';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Nav
      variant="underline"
      style={{
        padding: 20,
        justifyContent: 'space-between',
        backgroundColor: '#3a2f4d',
      }}
      activeKey="/"
      onSelect={(selectedKey) => navigate(selectedKey)}
    >
      <Nav.Item>
        <Nav.Link href="/">What to see?</Nav.Link>
      </Nav.Item>
      <Nav
        style={{
          alignItems: 'center',
          gap: 20,
        }}
        activeKey={'/home'}
      >
        <Nav.Item>
          <Nav.Link href="/home" eventKey="/home">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/category">
            <CiDesktop /> Category
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <UserProfile />
        </Nav.Item>
      </Nav>
    </Nav>
    // <>
    //   <Nav
    //     expand="xl"
    //     bg="danger"
    //     variant="dark"
    //     onSelect={(item) => {
    //       console.log(item);
    //     }}
    //   >
    //     <Col md>
    //       <Nav.Item
    //         style={{
    //           paddingLeft: 20,
    //         }}
    //       >
    //         <Nav.Link href="/home"> What to see ?</Nav.Link>
    //       </Nav.Item>
    //     </Col>
    //     <Col md>
    //       <Navbar.Collapse
    //         id="responsive-navbar-nav"
    //         className="justify-content-end"
    //         style={{
    //           paddingRight: 20,
    //         }}
    //       >
    //         <ReactBootStrap.Nav className="mr-auto">
    //           {
    //             //what i see
    //           }
    //           <Link to="/home">
    //             <ReactBootStrap.Nav.Link>
    //               Hva skal jeg se
    //             </ReactBootStrap.Nav.Link>
    //           </Link>
    //           <Link to="/category">
    //             <ReactBootStrap.Nav.Link>
    //               Bla gjennom sjangere
    //             </ReactBootStrap.Nav.Link>
    //           </Link>
    //         </ReactBootStrap.Nav>
    //         <ReactBootStrap.Nav>
    //           <UserProfile />
    //           {/* <Link to="/features">
    //             <a onClick={Logout}>Logout</a>
    //           </Link> */}
    //         </ReactBootStrap.Nav>
    //       </Navbar.Collapse>
    //     </Col>
    //   </Nav>
    //   <Content />
    // </>
  );
};

export default Home;
