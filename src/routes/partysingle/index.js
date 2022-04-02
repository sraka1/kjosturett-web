import React from 'react';
import PartySingle from './PartySingle';
import Layout from '../../components/Layout';
import parties from '../../../data/build/parties.json';
import { pleasantUrl } from '../../utils';

export default ({ params, url }) => {
  const party = parties.filter(party => party.url === params.party)[0];

  if (!party) throw Error('Not found');

  let categories = [];
  try {
    categories = require(`../../../data/build/${party.url}.json`);
  } catch (e) {
    console.error(e);
  }

  return {
    chunks: ['partysingle'],
    title: `${party.name} - Voli prav`,
    description: `Strnjena programska izhodišča ${party.name} za volitve 2022.`,
    path: url,
    component: (
      <Layout
        title={party.name}
        color={party.color}
        textColor={party.textColor}
        altTitle={
          <a href={party.website} target="_blank" style={
            party.textColor
              ? {
                  color: party.textColor,
                }
              : undefined
          }>
            {pleasantUrl(party.website)}
          </a>
        }
        altTitleTwo={
          (party.websiteTwo && <a href={party.websiteTwo} target="_blank" style={
            party.textColor
              ? {
                  color: party.textColor,
                }
              : undefined
          }>
            {pleasantUrl(party.websiteTwo)}
          </a>)
        }
      >
        <PartySingle party={party} categories={categories} />
      </Layout>
    )
  };
};
