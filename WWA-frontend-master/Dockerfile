FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci --force

COPY . .

CMD [ "npm", "start" ]