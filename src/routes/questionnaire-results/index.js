import React from 'react';
import KosningaProf from './KosningaProf';
import Layout from '../../components/Layout';
import questions from '../../../data/poll/questions.json';
import answers from '../../../data/poll/answers.json';

export default ({ url }) => ({
  chunks: ['prof'],
  title: `Vprašalnik -  Voli prav`,
  description:
    'Kako se vaša stališča ujemajo s stališči političnih strank? Izpolnite vprašalnik in preverite rezultate.',
  path: url,
  ogImage: 'https://voliprav.si/og_prof.png',
  component: (
    <Layout page="kosningaprof" title="Vprašalnik">
      <KosningaProf answers={answers} questions={questions} />
    </Layout>
  ),
});
