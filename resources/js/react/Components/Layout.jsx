import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import Navigation from './Navigation';

export default function Layout({children}) {
  return (
    <div>
      <header>
        <Navigation>
        </Navigation>
      </header>

      <div className="py-3"></div>

      <div className="container mx-auto">
        <main>
          <section>
            {children}
          </section>
        </main>
      </div>
    </div>
  )
}
