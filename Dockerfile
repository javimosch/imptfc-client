FROM node:16.15.0-alpine
MAINTAINER Javier Leandro Arancibia <arancibiajav@gmail.com>
WORKDIR /app
COPY . .
EXPOSE 8080
#	apk add --update python g++ make --no-cache && npm i && npm run start
RUN npm ci && npm run build && rm -rf node_modules
CMD ["npm","run","start"]