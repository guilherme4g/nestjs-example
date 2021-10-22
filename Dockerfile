FROM node:14

WORKDIR /usr/app

COPY package.json .

RUN npm install

COPY . .
RUN npm run start:dev

EXPOSE 3001