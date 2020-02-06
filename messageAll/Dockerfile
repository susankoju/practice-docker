FROM mhart/alpine-node:latest as builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build



FROM yobasystems/alpine-nginx

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/build .
COPY nginx.conf /etc/nginx/

EXPOSE 80
