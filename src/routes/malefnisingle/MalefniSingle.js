import React, { PureComponent } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Collapsable from '../../components/Collapsable';
import ListResponsive from '../../components/ListResponsive';
import { getAssetUrl } from '../../utils';
import s from './MalefniSingle.scss';

class MalefniSingle extends PureComponent {
  render() {
    const { parties, categories, selectedCategory } = this.props;

    return (
      <div className={s.root}>
        <ListResponsive
          mobileTitle="Tematike:"
          current={`/tematike/${selectedCategory}`}
          links={categories.map(category => ({
            title: category.name,
            href: `/tematike/${category.url}`,
          }))}
        />
        <Collapsable
          items={
            parties &&
            parties.map(party => ({
              key: party.url,
              title: party.name,
              content:
                party.statement ||
                'Stranka ni podala stališča v zvezi s to tematiko.',
              image: getAssetUrl(false, 'party-icons', party.url),
            }))
          }
        />
      </div>
    );
  }
}

export default withStyles(s)(MalefniSingle);
