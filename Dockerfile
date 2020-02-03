# To build the node express web app, referenced from docker-compose.yml

FROM node:alpine

WORKDIR '/usr/app'

copy package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]