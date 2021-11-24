#node
FROM node:latest as node

WORKDIR /app

COPY . .

RUN npm install && npm run ng serve

# nginx
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=node /app/dist/front .

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]

