import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import Layout from '../Components/Layout';

export default function Show({}) {
  return (
    <Layout>
      <Head title="Show Product" />
      <div className="bg-blue-100">
        Show product!
      </div>
    </Layout>
  )
}
