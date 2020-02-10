FROM mhart/alpine-node


WORKDIR /usr/src/messageAll-backend

COPY package*.json ./

RUN npm install

COPY . .
#RUN chmod +x start.sh




#ENTRYPOINT [ "node", "libs/database.init.js"]




#CMD ["node","libs/database.init.js","&&","node","index.js"]
#RUN sh start.sh
EXPOSE 4000

CMD ["node","index.js"]
