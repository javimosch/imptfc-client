(docker rm -f tmp_build_imptfc_client || true) && docker run -d --rm --name tmp_build_imptfc_client -w /app \
--net=mba_default --net-alias=tmp_build_imptfc_client \
-v "$(pwd)/dist:/app/release" \
-v "$(pwd)/.env:/app/.env" \
-v "$(pwd)/public:/app/public" \
-v "$(pwd)/src:/app/src" \
-v "$(pwd)/.env.production:/app/.env.production" \
-v "$(pwd)/docker-entry.sh:/app/docker-entry.sh" \
-v "$(pwd)/package.json:/app/package.json" \
-v "$(pwd)/package.lock.json:/app/package.lock.json" \
-v "$(pwd)/vapper.config.js:/app/vapper.config.js" \
-v "$(pwd)/vue.config.js:/app/vue.config.js" \
-v "$(pwd)/webpack.config.js:/app/webpack.config.js" \
-v "/root/.npm/_cacache:/root/.npm/_cacache" node:10.16.3-alpine sh docker-entry.sh;
docker logs -f tmp_build_imptfc_client;