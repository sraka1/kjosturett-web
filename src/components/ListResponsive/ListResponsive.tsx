// @flow

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from '../../Link';
import history from '../../history';
import styles from './ListResponsive.scss';

const linkItem = PropTypes.shape({
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
});

interface ListResponsiveProps {
  current?: string;
  mobileTitle?: string;
  links: unknown[];
}

class ListResponsive extends React.Component<ListResponsiveProps> {
	public props: any;
	public current: any;
	public links: any;
	public mobileTitle: any;
  static defaultProps = {
    current: null,
    mobileTitle: null,
  };
  state = {};
  onSelect = ({ target }) => {
    const { current } = this.props;

    if (!history || target.value === current) {
      return;
    }

    history.push(target.value);
  };
  render() {
    const { links, mobileTitle, current } = this.props;
    return (
      <div className={styles.root}>
        <div className={styles.mobile}>
          {mobileTitle && (
            <label className={styles.label} htmlFor="topic">
              {mobileTitle}
            </label>
          )}
          <select
            className={styles.select}
            name="topic"
            id="topic"
            value={current}
            onChange={this.onSelect}
          >
            {links.map(({ title, href }) => (
              <option key={href} value={href}>
                {title}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.desktop}>
          {links.map(({ title, href }) => (
            <Link
              key={href}
              className={cx(
                styles.link,
                href === current ? styles.linkActive : null,
              )}
              href={href}
            >
              {title}
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ListResponsive);
