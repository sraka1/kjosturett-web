const gm = require('gm').subClass({ imageMagick: true });
require('gm-base64');
const fastifyNoIcon = require('fastify-no-icon');
const _ = require('lodash');

const partiesImport = require('./parties.json');

// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true, maxParamLength: 300 });

// Declare a route
fastify.get('/:rawParties', async (request, reply) => {
  const payload = request.params.rawParties;

  let parties = payload.split('|').map(raw => {
    const [letter, score] = raw.split(':');

    let finalScore = 0;

    try {
      finalScore = parseInt(score, 10);
    } catch (e) {
      console.error(e);
    }

    return {
      letter,
      slug: partiesImport[letter],
      score: finalScore,
    };
  });
  // Ignore NaN scores!
  parties = _.filter(parties, 'score');

  console.log('parties', parties);

  parties.sort((a, b) => {
    if (a.score > b.score) return -1;
    if (a.score < b.score) return 1;
    return 0;
  });

  parties = parties.slice(0, 5);

  const image = gm()
    .in('-page', '+0+0')
    .in('./prof.png');

  parties.forEach((party, index) => {
    let pos = [0, 0];
    if (index === 0) {
      // Left pos
      pos = [680, 85];
    } else if (index === 1) {
      // Left pos
      pos = [900, 85];
    } else if (index === 2) {
      pos = [590, 342];
    } else if (index === 3) {
      pos = [800, 342];
    } else if (index === 4) {
      pos = [1000, 342];
    }

    image
      .in('-page', `+${pos[0]}+${pos[1]}`)
      .in(`./party-icons/${party.slug}.png`)
      .font('./Roboto-Bold.ttf')
      .fontSize(44)
      .drawText(pos[0] + 55, pos[1] + 225, `${party.score}%`);
  });

  image.mosaic().toBuffer('png', (err, buffer) => {
    if (err) return err;
    return reply
      .code(200)
      .header('Content-Type', 'image/png')
      .send(buffer);
  });
});

// Run the server!
const start = async () => {
  try {
    fastify.register(fastifyNoIcon);
    await fastify.listen(3333, '0.0.0.0');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
