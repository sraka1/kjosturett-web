FROM node:16.3.0-alpine

# Imagemagick
RUN apk add --no-cache gettext librsvg ghostscript imagemagick
COPY Roboto-Bold.ttf /usr/share/fonts/ttf-roboto/

# Set a working directory
WORKDIR /usr/src/app

COPY ./package.json .
COPY ./yarn.lock .

# Install Node.js dependencies
RUN yarn install --production --no-progress

# Copy application files
COPY . .

CMD [ "node", "index.js" ]
