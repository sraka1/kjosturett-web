import React, { PureComponent } from 'react';
import cx from 'classnames';
import { Collapse } from 'react-collapse';
import Img from 'react-image';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './styles.scss';
import Select from 'react-select';
import Link from '../../Link';
import transparent from './transparent.png';
import { getAssetUrl, candidateImage } from '../../utils';

import SelectStyles from '../../../node_modules/react-select/dist/react-select.css';

const constituencies = {
  'reykjavik-sudur': 'Reykjavíkurkjördæmi suður',
  'reykjavik-nordur': 'Reykjavíkurkjördæmi norður',
  nordvesturkjordaemi: 'Norðvesturkjördæmi',
  nordausturkjordaemi: 'Norðausturkjördæmi',
  sudurkjordaemi: 'Suðurkjördæmi',
  sudvesturkjordaemi: 'Suðvesturkjördæmi',
};

const scoreToFloatingPoint = (score, scalar = 1) =>
  Math.max(1, Math.ceil(score / scalar)) / 100;

function pluralize(count, singular, plural, zero = '') {
  if (count === 0 && zero) {
    return zero;
  }
  return count > 1 ? plural : singular;
}

class KosningaprofResults extends PureComponent {
  state = {
    open: {},
    kjordaemiFilter: '',
    topFilter: 5,
    candidateCount: 12,
  };
  toggle(party) {
    this.setState(({ open }) => ({
      open: {
        ...open,
        [party]: !open[party],
      },
    }));
  }

  renderLink(href, title, extraProps) {
    const { isEmbedded } = this.props;
    return (
      <Link href={(isEmbedded ? '/embed' : '') + href} {...extraProps}>
        {title}
      </Link>
    );
  }

  renderIntro() {
    if (this.props.isEmbedded) {
      return (
        <div>
          <p className={s.lead}>Rezultati volitvenega vprašalnika</p>
          <p style={{ textAlign: 'center' }}>
            Več o političnih stališčih in kandidatih strank lahko izveste na{' '}
            <strong>
              <a href="https://beta.voliprav.si/" target="_blank">
                www.voliprav.si
              </a>
            </strong>
          </p>
        </div>
      );
    }

    const { ogImage, url } = this.props;

    return (
      <div>
        <p className={s.lead}>
          Preglejte rezultate vprašalnika <strong>Voli prav</strong>. Podrobneje si ogledajte {this.renderLink('/tematike/zaposlitve', 'posamezne tematike')}, ki
          se vam zdijo zlasti pomembne.
        </p>

        <p className={s.buttons}>
          {this.renderLink('/vprasalnik', 'Reši ponovno', {
            className: s.takeTest,
          })}
        </p>

        {ogImage && <img src={ogImage} className={s.resultImage} />}

        <p className={s.buttons}>
          <Link
            className={s.shareButton}
            style={{ background: '#4760a5' }}
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              url
            )}`}
            target="_blank"
          >
            Deli na Facebooku
          </Link>
          <Link
            className={s.shareButton}
            style={{ background: '#1da0f2', marginLeft: '15px' }}
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              'Mínar niðurstöður úr kosningaprófi Voli prav: '
            )}&url=${encodeURIComponent(url)}&hashtags=kosningar`}
            target="_blank"
          >
            Deli na Twitterju
          </Link>
        </p>
      </div>
    );
  }

  render() {
    const { isEmbedded, questions, answers, parties } = this.props;
    const { kjordaemiFilter, topFilter, candidateCount } = this.state;
    const answeredQuestions = questions.filter(
      ({ myAnswer }) => myAnswer && myAnswer !== 6
    );
    const candidates = this.props.candidates
      .filter(c => {
        if (
          kjordaemiFilter !== '' &&
          kjordaemiFilter.indexOf(c.constituency) === -1
        ) {
          return false;
        }

        if (c.seat > topFilter) {
          return false;
        }

        return true;
      })
      .slice(0, candidateCount);

    const partyScoreScalar = parties.length ? parties[0].score / 100 : 1;
    return (
      <div className={s.root}>
        {this.renderIntro()}

        <h3 className={s.partiesHeader}>Politične stranke</h3>
        <p className={s.nonLead}>
          Stranke so razvrščene glede na njihova stališča v vprašalniku v primerjavi z vašimi. <strong>Kliknite na posamezno stranko</strong> za primerjavo svojih odgovorov z njihovimi.{' '}
        </p>

        {answeredQuestions.length / questions.length < 0.5 && (
          <p className={s.nonLead}>
            Odgovorili ste le na {answeredQuestions.length}{' '}
            {pluralize(answeredQuestions.length, 'vprašanji', 'vprašanj')}, kar pomeni, da vam rezultati ne morajo podati popolne slike. Því
            Odgovorite na več vprašanj, da pridobite bolj natančno oceno.
          </p>
        )}

        {isEmbedded && (
          <p className={s.nonLead}>
            {this.renderLink('/vprasalnik', 'Ponovno izpolnite vprašalnik')}
          </p>
        )}

        {parties
          .filter(party => !isNaN(party.score))
          .map(party => (
            <div key={party.letter}>
              <div
                className={s.party}
                key={party.url}
                role="button"
                onClick={() => this.toggle(party.letter)}
              >
                <div
                  className={s.partyProgress}
                  style={{
                    transform: `scaleX(${scoreToFloatingPoint(
                      party.score,
                      partyScoreScalar
                    )})`,
                  }}
                />
                <img
                  src={getAssetUrl(false, 'party-icons', party.url)}
                  className={s.partyLogo}
                />
                <div className={s.partyName}>{party.name}</div>
                <div className={s.partyPercentage}>
                  {Math.ceil(party.score)}%
                </div>
              </div>
              <Collapse
                isOpened={this.state.open[party.letter] === true}
                springConfig={{
                  stiffness: 100,
                  damping: 20,
                }}
              >
                <div className={s.partyQuestions}>
                  {answeredQuestions
                    .map(question => ({
                      ...question,
                      myAnswer: question.myAnswer || 3,
                      partyAnswer: party.reply[question.id] || 3,
                    }))
                    .sort((a, b) => {
                      const aAgree = Math.abs(a.myAnswer - a.partyAnswer);
                      const bAgree = Math.abs(b.myAnswer - b.partyAnswer);
                      if (a.myAnswer === 3 || a.myAnswer === 6) {
                        return 1;
                      }
                      if (
                        b.myAnswer === 3 ||
                        b.myAnswer === 6 ||
                        isNaN(aAgree) ||
                        isNaN(bAgree)
                      ) {
                        return -1;
                      }
                      return aAgree - bAgree;
                    })
                    .map(({ id, myAnswer, question, partyAnswer }) => {
                      const iAmIndiffrent = !(myAnswer !== 3 && myAnswer !== 6);
                      const pluralParty = party.name === 'Píratar';
                      const partyIndiffrent = !(
                        partyAnswer !== 3 && partyAnswer !== 6
                      );
                      const difference = Math.abs(myAnswer - partyAnswer);

                      return (
                        <div className={s.partyQuestion} key={id}>
                          <h4>
                            <i
                              className={cx(
                                s.dot,
                                !iAmIndiffrent && s[`dot${difference}`]
                              )}
                            />
                            {question}
                          </h4>

                          {difference === 0 ? (
                            <div>
                              Bæði ég og {party.name} erum{' '}
                              <strong>
                                {answers.textMap[myAnswer].toLowerCase()}
                              </strong>{' '}
                              {iAmIndiffrent && 'gagnvart '} þessari
                              staðhæfingu.
                            </div>
                          ) : (
                            <div>
                              Ég er{' '}
                              <strong>
                                {(
                                  answers.textMap[myAnswer] || 'hlutlaus'
                                ).toLowerCase()}
                              </strong>{' '}
                              en {party.name} {pluralParty ? 'eru ' : 'er '}
                              <strong>
                                {(
                                  answers.textMap[partyAnswer] || 'hlutlaus'
                                ).toLowerCase()}
                                {(partyIndiffrent && pluralParty && 'ir ') ||
                                  ' '}
                              </strong>{' '}
                              {partyIndiffrent && 'gagnvart '} þessari
                              staðhæfingu.
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
              </Collapse>
            </div>
          ))}
        {/* Not included for the 2021 election */}
        {false && (
          <div>
            <h3>Frambjóðendur</h3>
            <p className={s.nonLead}>
              Svör fólks í framboði fyrir alla flokka í öllum kjördæmum.{' '}
              <i>
                Frambjóðendur fá senda spurningalista þegar Landskjörstjórn
                hefur samþykkt framboðslista flokkanna.
              </i>
            </p>
            <div className={s.filters}>
              <Select
                multi={true}
                name="kjordaemi"
                value={kjordaemiFilter}
                placeholder="Kjördæmi"
                className={s.kjordaemiFilter}
                options={Object.keys(constituencies).map(value => ({
                  value,
                  label: constituencies[value],
                }))}
                onChange={val => {
                  this.setState({
                    kjordaemiFilter: val.map(v => v.value).join(','),
                  });
                }}
              />
              <Select
                name="top"
                value={topFilter}
                className={s.topFilter}
                clearable={false}
                options={[
                  {
                    value: 30,
                    label: 'Allir frambjóðendur',
                  },
                  { value: 1, label: 'Oddvitar' },
                  { value: 2, label: 'Efst 2 á lista' },
                  { value: 5, label: 'Efstu 5 á lista' },
                  { value: 10, label: 'Efstu 10 á lista' },
                ]}
                onChange={val => {
                  this.setState({
                    topFilter: val.value,
                  });
                }}
              />
              <Select
                name="show"
                value={candidateCount}
                className={s.showCount}
                clearable={false}
                options={[
                  {
                    value: 12,
                    label: 'Sýna 12',
                  },
                  { value: 24, label: 'Sýna 24' },
                  { value: 72, label: 'Sýna 72' },
                  { value: 144, label: 'Sýna 144' },
                ]}
                onChange={val => {
                  this.setState({
                    candidateCount: val.value,
                  });
                }}
              />
            </div>
            <div className={s.candidates}>
              {candidates.map(candidate => {
                const party = parties.find(x => x.letter === candidate.party);
                return (
                  <div
                    key={candidate.slug}
                    className={s.candidate}
                    style={{
                      backgroundColor: party && party.color,
                    }}
                  >
                    {candidate.hasImage && (
                      <Img
                        className={s.candidateImg}
                        src={[candidateImage(candidate.slug), transparent]}
                      />
                    )}
                    {!candidate.hasImage && (
                      <Img className={s.candidateImg} src={[transparent]} />
                    )}
                    <div
                      className={s.candidateProgressBar}
                      style={{
                        display: candidate.score > 0 ? 'block' : 'none',
                      }}
                    >
                      <div
                        className={s.candidateProgress}
                        style={{
                          transform: `scaleX(${scoreToFloatingPoint(
                            candidate.score
                          )})`,
                          background:
                            party && party.color ? party.color : '#555',
                        }}
                      />
                    </div>
                    {candidate.score > 0 && (
                      <div className={s.candidatePercentage}>
                        <span>{Math.ceil(candidate.score)}%</span>
                      </div>
                    )}
                    {candidate.score === 0 && (
                      <div className={s.candidateNoResponse}>
                        <span>Frambjóðandi hefur ekki svarað</span>
                      </div>
                    )}
                    <div className={s.candidateInfo}>
                      <div className={s.candidateName}>{candidate.name}</div>
                      {party && (
                        <div className={s.candidateParty}>
                          {party.name} (x{candidate.party})
                        </div>
                      )}
                      <div className={s.candidateConstituency}>
                        {candidate.seat}. sæti
                        <br />
                        {constituencies[candidate.constituency]}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(s, SelectStyles)(KosningaprofResults);
