FROM alpine

RUN apk add nodejs npm bash

COPY . /usr/local

WORKDIR /usr/local
RUN npm run sequelize db:migrate

ENTRYPOINT [ "node", "/usr/local/src/server.js" ]
