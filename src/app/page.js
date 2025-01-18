'use client';

import { Header } from './shared/components/Header';

import Link from "next/link";


const Home = () => {

  localStorage.removeItem('auth_token'); // Remove from local storage if present
  localStorage.removeItem('url');

  return (
    <div>
      <Header />
      <br />
      <h2>Welcome to Nextjs Home</h2>
      <br />
      <Link href="/users" className="button button--login">Go to Users</Link>


      {/* <Link href="/dashboard">Go to Dashboard</Link> */}
      {/* <button onClick={() => localStorage.setItem('url', '/users')}>Users</button> */}
      {/* <Link href="/users">Users</Link> */}
    </div>)
};

export default Home;
