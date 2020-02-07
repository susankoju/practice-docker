FROM mhart/alpine-node


WORKDIR /usr/src/messageAll-backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD [ "node", "index.js"  ]
