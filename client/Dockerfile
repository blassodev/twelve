FROM node:alpine as builder
WORKDIR  /client

COPY ./package*.json ./
RUN npm install
COPY client .
RUN npm run build
COPY client .
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /twelveClient/build /usr/share/nginx/html
EXPOSE 80

CMD ["nginx","-g","daemon off;"]
