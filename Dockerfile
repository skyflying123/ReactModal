FROM node1.micserver/devops/node:latest-browsers as builder

WORKDIR /usr/src/app/
USER root
COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY ./ ./

RUN yarn run build


FROM node1.micserver/devops/nginx:latest

RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d/
COPY --from=builder /usr/src/app/dist  /usr/share/nginx/html/

EXPOSE 8000

CMD ["nginx", "-g", "daemon off;"]
