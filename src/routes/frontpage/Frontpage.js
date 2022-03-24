import React, { PureComponent } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import parties from '../../../data/build/parties.json';
import Link from '../../Link';

import s from './Frontpage.scss';
import Party from '../../components/Party';
import PartyGrid from '../../components/PartyGrid';

class FrontPage extends PureComponent {
  render() {
    const showElectionDayMessage =
      Date.now() > 1650751200000 && Date.now() < 1650837600000;
    // const showElectionDayMessage = true;

    return (
      <div>
        {showElectionDayMessage && (
          <div className={s.voteCTA}>
            <p>
              Pozdrav volivec, uspešno izbiro na volitvah ti želi ekipa Voli
              prav!
            </p>
            <div className={s.ctaButtons}>
              <Link href="/vprasalnik" className={s.button}>
                1. Izpolnite vprašalnik
              </Link>
              <div className={s.arrow}>→</div>
              <Link href="/tematike/davki" className={s.button}>
                2. Spoznajte tematike
              </Link>
              <div className={s.arrow}>→</div>
              <Link
                href="https://www.dvk-rs.si/volisca/#/"
                className={s.button}
              >
                3. Preverite kje voliti
              </Link>
            </div>
          </div>
        )}
        <PartyGrid>
          {parties.map(party => (
            <Party
              {...party}
              key={party.letter}
              href={`/stranke/${party.url}`}
            />
          ))}
        </PartyGrid>
      </div>
    );
  }
}

export default withStyles(s)(FrontPage);
