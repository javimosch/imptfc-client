FROM oven/bun:1-alpine
LABEL author="Javier Leandro Arancibia <arancibiajav@gmail.com>"
WORKDIR /app
COPY dist ./dist
RUN bun i serve
EXPOSE 8080
CMD ["bunx", "serve", "-p", "8080", "dist"]