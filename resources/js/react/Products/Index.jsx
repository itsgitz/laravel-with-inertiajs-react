import React from 'react';
import { Head, Link } from '@inertiajs/inertia-react';

export default function Index({}) {
  return (
    <>
      <Head title="Main Products" />
      <div className="bg-red-100">
        Hello from main products!
      </div>
      <div>
        <Link href="/show">Show</Link>
      </div>
    </>
  )
}
