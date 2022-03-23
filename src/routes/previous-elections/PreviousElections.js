import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PreviousElections.scss';
import Link from '../../Link';

const ELECTIONS = [
  {
    year: 2018,
    link: 'https://www.dvk-rs.si/arhivi/dz2018/#/prva',
    title: 'Predčasne volitve 2018',
  },
  {
    year: 2014,
    link: 'https://www.dvk-rs.si/arhivi/dz2014/',
    title: 'Predčasne volitve 2014',
  },
  {
    year: 2014,
    link: 'https://www.dvk-rs.si/arhivi/dz2011/',
    title: 'Predčasne volitve 2011',
  },
];

const PreviousElections = () => (
  <div className={s.root}>
    <p>
      Tukaj najdete povezave do arhiva rezultatov prejšnjih volitev na strani
      Državne volilne komisije.
    </p>
    <h3>Volitve v državni zbor</h3>
    <ul className={s.list}>
      {ELECTIONS.map(({ link, title }) => (
        <li className={s.election}>
          <Link href={link} key={link} target="_blank">
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default withStyles(s)(PreviousElections);
