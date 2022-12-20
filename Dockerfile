FROM node:16 as build
WORKDIR /usr/src/app

COPY package.json ./
RUN npm install
COPY . .

RUN npm run build

FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/build/ /usr/share/nginx/html