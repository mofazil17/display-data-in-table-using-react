import React from 'react';
import './style.css';
import logo from './logo.svg';

export default function Preloader() {
  return (
    <div clasSName="preloader">
      <div clasSName="logo">
        <img src={logo} class="svg" alt="Google Developer Student Clubs logo" width='300px'/>
      </div>
      <div clasSName="loading">
        <img src="https://cdn.jsdelivr.net/gh/mofazil17/display-data-in-table-using-react@master/src/Spinner-3.gif" alt="hello"/>
      </div>
    </div>
  );
}