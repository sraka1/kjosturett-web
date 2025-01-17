import React, { PureComponent } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import s from './styles.scss';
import history from '../../history';
import answers from '../../../data/poll/answers.json';
import Link from '../../Link';
import Party from '../../components/Party';
import PartyGrid from '../../components/PartyGrid';
import ReactTooltip from 'react-tooltip';

const distanceValueMap = {
  '0': 0,
  '0.2': 1,
  '0.8': 1,
  '1': 2,
  '1.6': 4,
  '1.8': 4,
  '2': 4
};

class CompareParties extends PureComponent {
  state = {
    selected: [],
    isEditing: false
  };
  render() {
    const {
      questions,
      parties,
      filterParties,
      replyDistance,
      score,
      url
    } = this.props;

    if (this.state.isEditing || filterParties.length < 2) {
      return (
        <div className={s.root}>
          <h1 className={s.heading}>
            Izberite stranke, ki jih želite primerjati.
          </h1>
          <div className={s.chooseContainer}>
            <PartyGrid>
              <ReactTooltip
                // place={'top'}
                // offset={{top: 10, left: 10}}
                delayShow={100}
              />
              {parties.map(party => {
                const isSelected = this.state.selected.includes(party.letter);
                return (
                  <Party
                    {...party}
                    key={party.letter}
                    isSelected={isSelected}
                    isFaded={this.state.selected.length && !isSelected}
                    isDisabled={!party.hasSubmittedPollReplies}
                    disabledMessage={'Stranka še ni izpolnila vprašalnika.'}
                    onClick={() => {
                      this.setState(({ selected }) => {
                        if (selected.includes(party.letter)) {
                          return {
                            selected: selected.filter(x => x !== party.letter)
                          };
                        }

                        return {
                          selected: [...selected, party.letter]
                        };
                      });
                    }}
                  />
                );
              })}
            </PartyGrid>
          </div>
          {this.state.selected.length === 1 && (
            <p style={{ textAlign: 'center', marginTop: '20px' }}>
              Izberite vsaj še eno stranko ali listo.
            </p>
          )}
          {this.state.selected.length > 1 && (
            <div className={s.buttonContainer}>
              <button
                className={s.edit}
                onClick={() => {
                  this.setState({ selected: [] });
                  history.replace(`/stranke/primerjaj/`);
                }}
              >
                Počisti izbiro
              </button>
              <button
                className={s.edit}
                onClick={() => {
                  this.setState({ isEditing: false });
                  history.push(
                    `/stranke/primerjaj/${this.state.selected.join(':')}`
                  );
                }}
              >
                Primerjaj
              </button>
            </div>
          )}
        </div>
      );
    }

    return (
      <div className={s.root}>
        <h1 className={s.heading}>Primerjava političnih strank</h1>

        <div className={s.chooseContainer}>
          <PartyGrid>
            {filterParties.map(party => {
              return <Party {...party} key={party.letter} />;
            })}
          </PartyGrid>
        </div>
        <button
          className={cx(s.edit, s.newSelection)}
          onClick={() =>
            this.setState({
              isEditing: true,
              selected: filterParties.map(x => x.letter)
            })
          }
        >
          Izberi druge stranke
        </button>
        {filterParties.length > 1 && filterParties.length < 3 && (
          <h2
            id="score"
            className={s.scoreContainer}
          >{`Stranki imata ${score.toFixed(0)}% skladna stališča.`}</h2>
        )}
        {filterParties.length > 2 && (
          <h2
            id="score"
            className={s.scoreContainer}
          >{`Stranke imajo ${score.toFixed(0)}% skladna stališča.`}</h2>
        )}
        {filterParties.length > 1 && (
          <p className={s.buttons}>
            <Link
              className={s.shareButton}
              style={{ background: '#4760a5' }}
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                'https://voliprav.si' + url
              )}`}
              target="_blank"
            >
              {`Deli na Facebooku`}
            </Link>
            <Link
              className={s.shareButton}
              style={{ background: '#1da0f2', marginLeft: '15px' }}
              href={`https://twitter.com/home?status=${encodeURIComponent(
                'Primerjava strank na portalu Voli prav - https://voliprav.si' +
                  url
              )}`}
              target="_blank"
            >
              {`Deli na Twitterju`}
            </Link>
          </p>
        )}
        <p className={s.resultDisclaimer}>
          Rezultat je izračunan iz sledečih izjav:
        </p>
        {filterParties.length > 1 && (
          <div className={s.questionsContainer}>
            {questions
              .map(question => ({
                ...question,
                replies: filterParties.map(p => p.reply[question.id - 1]),
                distance: replyDistance[question.id - 1]
              }))
              .sort((a, b) => {
                if (a.distance > b.distance) return 1;
                if (a.distance < b.distance) return -1;
                return 0;
              })
              .map(({ id, question, replies, distance }) => {
                // If any of the parties didn't answer, ignore the question
                let questionHasUnansweredReplies = replies.includes('6')
                return (
                  <div className={s.partyQuestion} key={id}>
                    <h4>
                      <i
                        className={cx(
                          s.dot,
                          !distance !== 0 && !questionHasUnansweredReplies &&
                            s[
                              `dot${
                                distanceValueMap[
                                  Math.round(distance * 100) / 100
                                ]
                              }`
                            ]
                        )}
                      />
                      {id}. {question}
                    </h4>
                    {distance === 0 && filterParties.length === 2 && !questionHasUnansweredReplies && (
                      <div>
                        {`Obe stranki sta označili odgovor ${answers.textMap[
                          replies[0]
                        ].toLowerCase()}${
                          ['3', '6'].includes(replies[0]) ? '' : ''
                        } pri tej izjavi.`}
                      </div>
                    )}
                    {distance === 0 && filterParties.length > 2 && !questionHasUnansweredReplies && (
                      <div>
                        {`Vse stranke so označile odgovor ${answers.textMap[
                          replies[0]
                        ].toLowerCase()}${
                          ['3', '6'].includes(replies[0]) ? '' : ''
                        } pri tej izjavi.`}
                      </div>
                    )}
                    {(distance > 0 || questionHasUnansweredReplies) && (
                      <div>
                        {filterParties.map(party => (
                          <div key={party.name}>
                            <p>
                              <span>{party.name}</span>{' '}
                              {`${
                                ['Socialni Demokrati'].includes(party.name)
                                  ? 'so označili'
                                  : 'je označila'
                              } `}
                              <b>
                                {answers.textMap[
                                  party.reply[id - 1]
                                ].toLowerCase()}
                              </b>
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(s)(CompareParties);
