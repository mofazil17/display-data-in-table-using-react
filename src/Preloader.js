import React from 'react';
import './preloader.css';
import logo from './logo.svg';

export default function Preloader() {
  return (
    <div className="preloader">
      <div className="logo">
        <img src={logo} class="svg" alt="Google Developer Student Clubs logo"/>
      </div>
      <div className="loading">
        <div className="circle blue"></div>
        <div className="circle yellow"></div>
        <div className="circle green"></div>
        <div className="circle red"></div>
      </div>
    </div>
  );
}