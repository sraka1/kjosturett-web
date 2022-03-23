import React from 'react';
import About from './About';
import Layout from '../../components/Layout';

export default ({ url }) => ({
  chunks: ['about'],
  title: 'O nas - Voli prav',
  path: url,
  component: (
    <Layout page="o-nas" title="O nas">
      <About />
    </Layout>
  )
});
