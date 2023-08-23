FROM node:alpine AS development
ENV NODE_ENV development
WORKDIR /react-larvis
COPY public/ /react-larvis/public
COPY src/ /react-larvis/src
COPY package.json /react-larvis/

COPY package.json .
COPY yarn.lock .
RUN yarn install


COPY . .
EXPOSE 3000

CMD ["yarn", "start"]