/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Image,
} from 'react-bootstrap';
// import { getUserPins } from '../api/userpinsData';

export default function NavBarAuth() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container className="left-header">
        <Nav.Link passhref="true" href="/">
          <Image
            src="../images/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link passHref href="/">
              <Nav.Link className="nav-text, home-button">Home</Nav.Link>
            </Link>
            <Link passHref href="/pin/new">
              <Nav.Link className="nav-text, create-button">Create</Nav.Link>
            </Link>
            {/* <Link passHref href="/userPin">
              <Nav.Link className="nav-text, userPin-button">User&apos;s Pins</Nav.Link>
            </Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Container className="search-bar">
        <input className="search-input" type="text" placeholder="Search" />
        <button type="submit" className="enter-button">Go</button>
      </Container>
      <Container className="right-header">
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link passHref href="">
              <Nav.Link className="nav-text, notifications">Notifications</Nav.Link>
            </Link>
            <Link passHref href="">
              <Nav.Link className="nav-text, messages">Messages</Nav.Link>
            </Link>
            <Link passHref href="/profile">
              <Nav.Link className="nav-text">Profile</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
