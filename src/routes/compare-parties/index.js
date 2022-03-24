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
  DeSUS: 'DeSUS',
  DD: 'Dobre Države',
  GS: 'Gibanje Svoboda',
  K: 'Konkretno',
  L: 'Levica',
  LMŠ: 'Lista Marjana Šarca',
  ND: 'Naša Dežela',
  NSi: 'Nova Slovenija',
  P: 'Piratska Stranka',
  PS: 'Povežimo Slovenijo'
};

const partyDeflectionsB = {
  DeSUS: 'DeSUS',
  DD: 'Dobre Države',
  GS: 'Gibanje Svoboda',
  K: 'Konkretno',
  L: 'Levica',
  LMŠ: 'Lista Marjana Šarca',
  ND: 'Naša Dežela',
  NSi: 'Nova Slovenija',
  P: 'Piratska Stranka',
  PS: 'Povežimo Slovenijo'
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

  letters = letters.split(':').filter(letter => !!partyDeflections[letter]);

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
      title = `Berðu ${
        partyDeflectionsB[currentParties[0].letter]
      } saman við aðra flokka`;
      description = `Hversu samstíga eru ${currentParties[0].name} og aðrir flokkar? Þú getu skoðað málið betur hérna.`;
    } else if (letters.length === 2) {
      title = `${currentParties
        .map(p => p.name)
        .join(' og ')} eru ${percentage} samstíga`;
      description = `Skoðaðu málið betur ásamt fleiri möguleikum á kjósturétt.is.`;
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
