import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import Navigation from './Navigation';

export default function Layout({children}) {
  return (
    <div className="container mx-auto">
      <header>
        <Navigation>
        </Navigation>
      </header>
      <div className="py-3"></div>
      <main>
        <section>
          {children}
        </section>
      </main>
    </div>
  )
}
