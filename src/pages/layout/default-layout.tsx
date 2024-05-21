import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Navbar from './navbar';

export const DefaultLayout = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          minHeight: 800,
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
