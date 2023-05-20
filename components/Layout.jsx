import React from 'react';
import Head from "next/head";
import Navbar from './Navbar';
import Footer from './Footer';
import dynamic from 'next/dynamic';

const Layout = ({ children }) => {
  return (
    <div>
       <div className="layout">
        <Head>
          <title>Mr Blackyem Store</title>
        </Head>
        <header>
          <Navbar/>
        </header>
          <main className="main-container">
            {children}
          </main>
          <footer>
            <Footer/>
          </footer>
       </div>
    </div>
  )
}

export default dynamic (() => Promise.resolve(Layout), {ssr: false})
