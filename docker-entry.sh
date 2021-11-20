npm ci && rm -rf dist/** && npm run build && cd release && rm -rf ** && mv ../dist/** .
#apk add --update python g++ make --no-cache && npm i && npm run start