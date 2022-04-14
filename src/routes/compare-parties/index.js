import React from 'react';
import { match } from '../../process-replies';
import CompareParties from './CompareParties';
import Layout from '../../components/Layout';
import questions from '../../../data/poll/questions.json';
import parties from '../../../data/build/replies-parties.json';

parties.sort(function(a, b) {
  if (a.letter > b.letter) return 1;
  if (a.letter < b.letter) return -1;
  return 0;
});

const partyDeflections = {
  DOM: 'Domovinska liga',
  DeSUS: 'DeSUS',
  GS: 'Gibanje Svoboda',
  L: 'Levica',
  LBP: 'Lista Borisa Popoviča',
  LL: 'Ljudska lista',
  LMŠ: 'Lista Marjana Šarca',
  ND: 'Naša Dežela',
  'NP-DD': 'Naša Pruhodnost in Dobra država',
  NSi: 'Nova Slovenija',
  P: 'Piratska Stranka',
  PoS: 'Povežimo Slovenijo',
  R: 'Resni.ca',
  SAB: 'Stranka Alenke Bratušek',
  SD: 'Socialni Demokrati',
  SDS: 'Slovenska demokratska stranka',
  SNS: 'Slovenska nacionalna stranka',
  VESNA: 'VESNA - zelena stranka',
  ZLS: 'Za ljudstvo Slovenije',
  ZOS: 'Zavezništvo osvobodimo Slovenijo'
};

const partyDeflectionsB = {
  DOM: 'Domovinska liga',
  DeSUS: 'DeSUS',
  GS: 'Gibanje Svoboda',
  L: 'Levica',
  LBP: 'Lista Borisa Popoviča',
  LL: 'Ljudska lista',
  LMŠ: 'Lista Marjana Šarca',
  ND: 'Naša Dežela',
  'NP-DD': 'Naša Pruhodnost in Dobra država',
  NSi: 'Nova Slovenija',
  P: 'Piratska Stranka',
  PoS: 'Povežimo Slovenijo',
  R: 'Resni.ca',
  SAB: 'Stranka Alenke Bratušek',
  SD: 'Socialni Demokrati',
  SDS: 'Slovenska demokratska stranka',
  SNS: 'Slovenska nacionalna stranka',
  VESNA: 'VESNA - zelena stranka',
  ZLS: 'Za ljudstvo Slovenije',
  ZOS: 'Zavezništvo osvobodimo Slovenijo'
};

const valueMap = {
  1: -1,
  2: -0.8,
  3: 0,
  4: 0.8,
  5: 1,
  6: null
};

export default ({ url, params }) => {
  let { letters } = params;

  if (!letters) letters = '';

  console.log('letters', letters);

  letters = letters.split(':').filter(letter => !!partyDeflections[letter]);

  console.log('letters', letters);

  console.log('parties', parties);

  //Begin calculations
  let filterParties = letters.map(
    letter => parties.filter(party => party.letter === letter)[0]
  );

  console.log('filterParties', filterParties);

  const replies = filterParties.map(party => party.reply.split(''));

  console.log('replies', replies);

  const minReplies = [];
  const maxReplies = [];
  const replyDistance = [];
  for (let i = 0; i <= questions.length - 1; i++) {
    let max;
    let min;
    replies.forEach(reply => {
      let part = valueMap[reply[i]];

      if (max < part || (!max && max !== 0)) max = part;
      if (min > part || (!min && min !== 0)) min = part;
    });

    minReplies.push(min);
    maxReplies.push(max);

    replyDistance.push(Math.abs(min - max));
  }

  const score = match(minReplies, maxReplies);
  const percentage = `${score.toFixed(0)}%`;

  let title = 'Primerjaj - Voli prav';
  let description =
    'Tukaj lahko primerjate stališča različnih političnih strank. Katera koalicija je najbolj verjetna? Poigrajte s različnimi kombinacijami.';

  if (letters.length > 0) {
    const currentParties = parties.filter(party =>
      letters.includes(party.letter)
    );

    if (letters.length === 1) {
      title = `Primerjajte ${
        partyDeflectionsB[currentParties[0].letter]
      } z drugimi strankami`;
      description = `Kako se vaša stališča skladajo s stranko ${currentParties[0].name}?`;
    } else if (letters.length === 2) {
      title = `${currentParties
        .map(p => p.name)
        .join(' in ')} sta ${percentage} skladni`;
      description = `Podrobneje si oglejte primerjavo skupaj z drugimi strankami na voliprav.si`;
    } else {
      let stjorn = currentParties
        .map(p => partyDeflections[p.letter])
        .join(', ');
      let pos = stjorn.lastIndexOf(', ');
      stjorn = `${stjorn.substring(0, pos)} in${stjorn.substring(pos + 1)}`;
      title = `Koalicija ${letters.join('-')} je ${percentage} skladna - Voli prav`;
      description = `Oglejte si podrobnejšo primerjavo strank ${stjorn} na voliprav.si.`;
    }
  }

  return {
    chunks: ['compare-parties'],
    title,
    description,
    path: url,
    component: (
      <Layout page="compare-parties" title="Primerjaj">
        <CompareParties
          parties={parties}
          questions={questions}
          filterParties={filterParties}
          score={score}
          replies={replies}
          replyDistance={replyDistance}
          url={url}
        />
      </Layout>
    )
  };
};
