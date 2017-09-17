import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import CountdownNow from 'react-countdown-now';
import s from './Countdown.scss';

const Countdown = () => {
  return (
    <CountdownNow
      date={new Date('Saturday, November 4, 2017 8:00:00 AM')}
      renderer={({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          return <div>Kosningar eru hafnar!</div>;
        } else {
          let out = '';
          if (days > 0) {
            out = `${days} dagar í kosningar`;
          }

          return <span className={s.root}>{out}</span>;
        }
      }}
    />
  );
};

export default withStyles(s)(Countdown);