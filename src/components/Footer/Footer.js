// @flow

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './Footer.scss';
import Link from '../../Link';
import Container from '../Container/Container';
import logo from '../../logo.svg';

const Footer = () => (
  <footer className={styles.footer}>
    <Container>
      <div className={styles.wrap}>
        <Link href="/">
          <img className={styles.logo} src={logo} alt="Logo" />
        </Link>
        <nav className={styles.nav}>
          <Link className={styles.link} href={'/o-nas'}>
            O nas
          </Link>
          <Link className={styles.link} href={'/prejsnje-volitve'}>
            Prešnje volitve
          </Link>
          <Link
            className={styles.link}
            target="_blank"
            href="https://github.com/sraka1/kjosturett-web"
          >
            GitHub
          </Link>
        </nav>
      </div>
    </Container>
  </footer>
);

export default withStyles(styles)(Footer);
