// @flow

import React, { PureComponent } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Collapsable from '../../components/Collapsable';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import s from './PartySingle.scss';

class PartySingle extends PureComponent {
  static contextTypes = {
    fetch: PropTypes.func.isRequired,
  };
  state = {
    started: false,
    token: null,
    party: null,
    finished: false,
    answers: {}
  };
  constructor(props) {
    super(props);
    this.onSend = this.onSend.bind(this);
  }
  componentDidMount() {
    const { token, party } = queryString.parse(window.location.search);
    if (!token) {
      window.location = '/';
    }
    // eslint-disable-next-line
    this.setState({ token, party });
  }
  componentWillUnmount() {
    window.onbeforeunload = null;
  }
  async onSend() {
    const { answers, token, party } = this.state;

    await this.context.fetch(`/konnun/topics?timestamp=${Date.now()}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token,
        party,
        answers
      })
    });

    this.setState({ finished: true });
  }

  onChange = id => ({ target }) => {
    this.setState(({ answers, started }) => {
      if (!started) {
        window.onbeforeunload = event => {
          // eslint-disable-next-line
          event.returnValue = areYouSure;
          return areYouSure;
        };
      }
      return {
        started: true,
        answers: {
          ...answers,
          [id]: target.value
        }
      };
    });
  };

  render() {
    const { party, categories } = this.props;

    const { finished } = this.state;

    // console.log('party', party);
    // console.log('categories', categories)

    return (
      <div className={s.root}>
        {finished && <h3>Hvala za sodelovanje!</h3>}

        {!finished && (
          <div className={s.intro}>
            <h1>Programske tematike (odgovori) - Voli prav 2022</h1>
            <p>
              Vsebina strnjenih programskih tematik bo javno razvidna javnosti
              v roku nekaj ur po oddaji. Zadnji odgovori prepišejo prejšnje.
            </p>
          </div>
        )}
        { !finished && (<div className={s.topics}>
          <Collapsable
            ignoreAnchor={true}
            items={
              categories &&
              categories.map(({ name, category }) => ({
                key: category,
                title: name,
                contentObject: <textarea className={s.textFill} onChange={this.onChange(category)} maxLength="700" placeholder="Tukaj vnesite vsebino. Največ 700 znakov."></textarea>,
              }))
            }
          />
        </div>) }
        {!finished && <button onClick={this.onSend}>Pošlji</button>}
      </div>
    );
  }
}

export default withStyles(s)(PartySingle);
