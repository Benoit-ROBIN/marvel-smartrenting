FROM node:10

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

RUN yarn global add typescript
RUN yarn install

COPY . /usr/src/app 

EXPOSE 4000

CMD npm run start


