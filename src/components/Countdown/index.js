import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import CountdownNow from 'react-countdown-now';
import s from './Countdown.scss';

const Countdown = () => (
  <CountdownNow
    date={new Date('Sunday, April 24, 2022 7:00:00 AM')}
    renderer={({ days, completed }) => {
      if (completed) {
        // Render a completed state
        return <div>Državnozborske volitve 2022</div>;
      }
      let out = '';
      if (days > 0) {
        out = `${days + 1} dni do volitev`;
      }

      return <span>{out}</span>;
    }}
  />
);

export default withStyles(s)(Countdown);
