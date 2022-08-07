FROM node:16.14.2
ENV NODE_ENV development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY public public
COPY src src

EXPOSE 4040

CMD [ "npm", "start" ]
