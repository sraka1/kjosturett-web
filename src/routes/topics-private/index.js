import React from 'react';
import PartySingle from './PartySingle';
import Layout from '../../components/Layout';
import parties from '../../../data/build/parties.json';
import { pleasantUrl } from '../../utils';

export default ({ params, url, query }) => {
  const { party, token } = query;

  if (!party) throw Error('Not found');


  const partyFull = parties.filter(partyQuery => partyQuery.url === party)[0];

  let categories = [];
  try {
    categories = require(`../../../data/build/${partyFull.url}.json`);
  } catch (e) {
    console.error(e);
  }

  return {
    chunks: ['topics-answers'],
    title: `${partyFull.name} - Voli prav`,
    description: `Odgovori - strnjena programska izhodišča ${partyFull.name} za volitve 2022.`,
    path: url,
    component: (
      <Layout
        showHeader={false}
      >
        <PartySingle party={partyFull} categories={categories} token={token} />
      </Layout>
    )
  };
};
