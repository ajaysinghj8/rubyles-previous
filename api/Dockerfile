FROM node:alpine

RUN mkdir -p /usr/src/api
WORKDIR /usr/src/api

COPY package.json /usr/src/api/
RUN npm install
RUN npm install -g db-migrate

COPY . /usr/src/api

EXPOSE 8080
CMD [ "npm", "start" ]
