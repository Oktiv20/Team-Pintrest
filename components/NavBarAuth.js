import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { signOut } from '../utils/auth';
import Search from './search';

export default function NavBarAuth({ searchInput, setSearchInput }) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>Pintrest</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link passHref href="/pin/new">
              <Nav.Link>Create Pin</Nav.Link>
            </Link>
            <Link passHref href="/userPin">
              <Nav.Link>User&apos;s Pin</Nav.Link>
            </Link>
            <Link passHref href="/profile">
              <Nav.Link>Profile</Nav.Link>
            </Link>
            <Search searchInput={searchInput} setSearchInput={setSearchInput} />
            <Button variant="light" onClick={signOut}>Sign Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

NavBarAuth.propTypes = {
  searchInput: PropTypes.string,
  setSearchInput: PropTypes.func,
};

NavBarAuth.defaultProps = {
  searchInput: '',
  setSearchInput: '',
};
