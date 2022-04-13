// @flow

import React, { PureComponent } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './About.scss';

class About extends PureComponent {
  render() {
    return (
      <div className={s.root}>
        <p>
          Voliprav.si je neodvisna informativna spletna stran, ki skuša
          informirati volivce v zvezi državnozborskimi volitvami leta 2022.
          Vse informacije na spletni strani so pridobljene od političnih
          strank samih in so predstavljene nespremenjene. Projekt prostovoljno
          podpira skupina prostovoljcev, vsa koda pa je dostopna na{' '}
          <a
            href="https://github.com/sraka1/voliprav-web"
            target="_blank"
          >
            GitHubu
          </a>, temelji pa na podobnem strani (oz. je "fork"), ki je bila
          ustvarjen v Islandiji in tam požela izjemen uspeh (doseg tretjine
          celotnega volilnega telesa). Upamo, da vam bo stran pomagala, dragi
          volivec ali volivka, opraviti informirano odločitev na volišču.
        </p>

        <h3>Ustanovitelji projekta</h3>

        <div className={s.we}>
          <div className={s.person}>
            <img className={s.img} src={'/jakob.png'} alt="Jakob" />
            <p className={s.name}>Jakob Murko</p>
          </div>
        </div>

        <h3>Pri projektu so na kakršenkoli način pomagali (s testiranjem, predlogi, komentarji)</h3>

        <div className={s.contributors}>
          <div className={s.person}>
            <img
              className={s.img}
              src={require('./avatar.png')}
              alt="Sledilnik.org"
            />
            <p className={s.name}>Sledilnik.org</p>
          </div>
          <div className={s.person}>
            <img
              className={s.img}
              src={require('./avatar.png')}
              alt="Luka Medic"
            />
            <p className={s.name}>Luka Medic</p>
          </div>
          <div className={s.person}>
            <img
              className={s.img}
              src={require('./avatar.png')}
              alt="Branko Jevtić"
            />
            <p className={s.name}>Branko Jevtić</p>
          </div>
          <div className={s.person}>
            <img
              className={s.img}
              src={require('./avatar.png')}
              alt="Štefan Baebler"
            />
            <p className={s.name}>Štefan Baebler</p>
          </div>
          <div className={s.person}>
            <img
              className={s.img}
              src={require('./avatar.png')}
              alt="Anže Voh Boštic"
            />
            <p className={s.name}>Anže Voh Boštic</p>
          </div>
          <div className={s.person}>
            <img
              className={s.img}
              src={require('./avatar.png')}
              alt="Maja Založnik"
            />
            <p className={s.name}>Maja Založnik</p>
          </div>
        </div>

        <h3>Kontakt</h3>
        <p>
          Na nas se lahko obrnete preko e-pošte na naslovu{' '}
          <a href="mailto:voliprav@voliprav.si">voliprav@voliprav.si</a>.
        </p>
      </div>
    );
  }
}

export default withStyles(s)(About);
