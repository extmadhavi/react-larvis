FROM node:18:alpine

WORKDIR /react-larvis

COPY larvis /larvis
COPY public/ /react-larvis/public
COPY src/ /react-larvis/src
COPY package.json /react-larvis/
COPY package*.json yarn.lock ./
ENTRYPOINT ["/larvis"]
RUN yarn install


COPY . ./

CMD ["yarn", "start"]