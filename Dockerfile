FROM node:16.15.0-alpine
LABEL author="Javier Leandro Arancibia <arancibiajav@gmail.com>"
WORKDIR /app
COPY . .
EXPOSE 8080
RUN npm ci && npm run build && rm -rf node_modules && npm i serve
CMD ["npm","run","start"]