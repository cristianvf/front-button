FROM node:16 as build
WORKDIR /usr/src/app

COPY package.json ./
RUN npm install
COPY . .

RUN npm run build

FROM nginx:1.17.1-alpine
COPY --from=build /usr/src/app/build/ /usr/share/nginx/html