FROM mhart/alpine-node


WORKDIR /usr/src/messageAll-backend

COPY package*.json ./

RUN npm install

COPY . .



#ENTRYPOINT [ "node", "libs/database.init.js"]
CMD [ "node", "index.js", " ; node libs/ddatabase.init.js"  ]

EXPOSE 4000
