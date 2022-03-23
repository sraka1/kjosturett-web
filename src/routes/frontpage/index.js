import React from 'react';
import Frontpage from './Frontpage';
import Layout from '../../components/Layout';

export default ({ url }) => ({
  chunks: ['frontpage'],
  title: 'Voli prav - Volitve 2022',
  description: 'Politične stranke v volitvah v DZ 2022.',
  path: url,
  component: (
    <Layout page="parties">
      <Frontpage />
    </Layout>
  )
});
