import React from 'react';
import Malefni from './Malefni';
import Layout from '../../components/Layout';

export default () => ({
  chunks: ['malefni'],
  title: 'Programske tematike - Voli prav',
  component: (
    <Layout page="tematike">
      <Malefni />
    </Layout>
  ),
});
