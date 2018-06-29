FROM node:8

WORKDIR /usr/src/app

COPY . .
RUN yarn
RUN yarn test

ENTRYPOINT ["yarn", "start"]