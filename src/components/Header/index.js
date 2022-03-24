import React, { PureComponent } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import Container from '../Container';
import Countdown from '../Countdown';
import Link from '../../Link';
import s from './Header.scss';
import logo from '../../logo.svg';

class Header extends PureComponent {
  state = {
    isTop: true,
    isOpen: false
  };
  componentDidMount() {
    window.addEventListener('scroll', this.scroll);
    this.scroll();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scroll);
  }
  lastScrollPos = undefined;
  scroll = () => {
    const scroll = window.pageYOffset;
    if (this.lastScrollPos === scroll) {
      return;
    }

    this.lastScrollPos = scroll;
    this.setState({
      isTop: scroll < 120
    });
  };
  toggle(state) {
    const force = state == null;
    this.setState(({ isOpen }) => ({
      isOpen: force ? !isOpen : state
    }));
  }
  renderLinks() {
    const { page } = this.props;

    console.log('page', page)

    return [
      <Link
        afterClick={() => this.toggle(false)}
        href="/"
        key="/"
        className={cx(s.politics, page === 'parties' ? s.active : null)}
      >
        Stranke
      </Link>,
      <Link
        afterClick={() => this.toggle(false)}
        href="/tematike/davki"
        key="/tematike/davki"
        className={cx(page === 'tematike' ? s.active : null)}
      >
        Programske tematike
      </Link>,
      <Link
        afterClick={() => this.toggle(false)}
        href="https://www.dvk-rs.si/volisca/#/"
        target="_blank"
        // href="/kjorskra"
        // key="/kjorskra"
        // className={cx(page === 'kjorskra' ? s.active : null)}
      >
        Zemljevid volišč
      </Link>,
      <Link
        afterClick={() => this.toggle(false)}
        href="/vprasalnik"
        key="/vprasalnik"
        className={cx(page === 'kosningaprof' ? s.active : null)}
      >
        Vprašalnik
      </Link>,
      <Link
        afterClick={() => this.toggle(false)}
        href="/stranke/primerjaj"
        key="/stranke/primerjaj"
        className={cx(page === 'compare-parties' ? s.active : null)}
      >
        Primerjaj
      </Link>,
      <Link
        afterClick={() => this.toggle(false)}
        className={cx(page === 'prejsnje-volitve' ? s.active : null)}
        href="/prejsnje-volitve"
        key="prejsnje-volitve"
      >
        Prejšnje volitve
      </Link>
    ];
  }
  render() {
    const { isTop, isOpen } = this.state;
    return (
      <div>
        <div className={s.fake} />
        <header className={cx(s.root, isOpen && s.isOpen, !isTop && s.sticky)}>
          <Container>
            <div className={s.wrap}>
              <div className={s.leftWrap}>
                <Link afterClick={() => this.toggle(false)} href="/">
                  <img src={logo} className={s.logo} />
                </Link>
                <div className={cx(s.countdown)}>
                  <Countdown />
                </div>
              </div>
              <nav className={cx(s.desktopNav)}>
                <button
                  className={cx(s.hamburgerBtn, isOpen && s.isOpen)}
                  onClick={() => this.toggle()}
                >
                  <i className={s.hamburger} /> Valmynd
                </button>
                <div className={s.links}>{this.renderLinks()}</div>
              </nav>
            </div>
          </Container>
        </header>
        <nav
          className={cx(s.mobileNav, !isTop && s.sticky, isOpen && s.isOpen)}
        >
          <div className={s.links}>{this.renderLinks()}</div>
        </nav>
      </div>
    );
  }
}

export default withStyles(s)(Header);
