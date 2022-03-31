import React from 'react';
import KosningaProf from '../../questionnaire-results/KosningaProf';
import questions from '../../../../data/poll/questions.json';
import answers from '../../../../data/poll/answers.json';
import Layout from '../../../components/Layout';

export default ({ url }) => ({
  chunks: ['embed-questionnaire'],
  title: `Vprašalnik Voli prav`,
  description:
    'Kako se vaša stališča primerjajo s stališči političnih strank? Izpolnite vprašalnik in primerjajte.',
  path: url,
  ogImage: 'https://assets.voliprav.si/og_prof.png',
  component: (
    <Layout isEmbed>
      <KosningaProf
        isEmbedded
        title="Vprašalnik Voli prav"
        answers={answers}
        questions={questions}
      />
    </Layout>
  ),
});
