import React from 'react';
import PreviousElections from './PreviousElections';
import Layout from '../../components/Layout';

export default ({ url }) => ({
  chunks: ['previous-elections'],
  title: 'Prejšnje Volitve - Voliprav',
  description: 'Arhiv povezav na rezultate prejšnjih volitev.',
  path: url,
  component: (
    <Layout page="prejsnje-volitve" title="Prejšnje volitve">
      <PreviousElections />
    </Layout>
  ),
});
