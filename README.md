## Description

Front-end for a football matches events organization tool.

## Tech stack

- Vue 2.7
- ViteJS

## Requires

- imptfc-api: https://github.com/javimosch/imptfc/tree/master

## Compile docker image

docker build -t javimosch/mufc-front:1.0 .

## Docker

docker run -d --restart=always --name playmufc -p "3001:8080" javimosch/mufc-front:1.0.9

## Author

- https://savoietech.fr


