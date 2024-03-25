FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json .

RUN apk update && apk add npm

RUN npm i 

COPY . .

CMD [ "npm", "start" ]