FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json . 

RUN npm i --force 

COPY . .

CMD [ "npm", "start" ]