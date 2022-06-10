import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function Layout({children}) {
  return (
    <main>
      <header>
        <Link className='bg-yellow-100 p-3' href="/">Products</Link>
        <Link className="bg-yellow-100 p-3" href="/show">Show</Link>
      </header>
      {children}
    </main>
  )
}
