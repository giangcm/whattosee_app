import React from 'react';
import { CiDesktop } from 'react-icons/ci';

import './header.css';

import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import UserProfile from './profile';

const Navbar = () => {
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
        <Nav.Link
          style={{
            fontSize: 30,
          }}
          href="/"
        >
          What to see?
        </Nav.Link>
      </Nav.Item>
      <Nav
        className="nav-right"
        style={{
          alignItems: 'center',
          gap: 20,
        }}
        activeKey={'/home'}
      >
        <Nav.Item>
          <Nav.Link href="/home" eventKey="/home">
            <CiDesktop /> Hva skal jeg se?
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/category">Bla gjennom sjangere</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <UserProfile />
        </Nav.Item>
      </Nav>
    </Nav>
  );
};

export default Navbar;
