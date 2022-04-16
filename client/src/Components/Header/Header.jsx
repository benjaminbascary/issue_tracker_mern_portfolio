import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className='header'>
      <div className='title-logo'>
        <img src="./png/bug.png" alt="logo"></img>
        <p>Issue Tracker</p>
      </div>
      <Button className="add-button">
        <Link style={{ textDecoration: 'none', color: "black" }} to='/AddIssue'>Add new issue</Link>
      </Button>
    </div>
  )
};

export default Header;