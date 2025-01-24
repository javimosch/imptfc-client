## Description

Front-end for a football matches events organization tool.

## Tech stack

- Vue 2.7
- ViteJS

## Requires

- imptfc-api: https://github.com/javimosch/imptfc/tree/master

## Compile docker image

bun i && bun run build && docker build -t javimosch/mufc-front:1.0.11 .

## Docker

docker run -d --restart=always --name playmufc -p "3001:8080" javimosch/mufc-front:1.0.11

## Author

- https://savoietech.fr


