FROM mhart/alpine-node


WORKDIR /usr/src/messageAll-backend

COPY package*.json ./

RUN npm install

COPY . .



CMD [ "node", "libs/database.init.js"]
CMD [ "node", "index.js"  ]

EXPOSE 4000
