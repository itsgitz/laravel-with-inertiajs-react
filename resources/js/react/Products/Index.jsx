import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import Layout from '../Components/Layout';

export default function Index({}) {
  return (
    <Layout>
      <Head title="Home Products" />
      <div className="bg-red-100">
        Hello from Home Products!
      </div>
    </Layout>
  )
}
