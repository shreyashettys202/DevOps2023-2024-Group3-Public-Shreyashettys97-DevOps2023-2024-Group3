FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json .

RUN npm --version 
RUN npm cache clean --force  
RUN npm install -g npm  

RUN npm install

COPY . .

CMD [ "npm", "start" ]