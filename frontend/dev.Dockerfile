from node:18.12-alpine3.15
WORKDIR /frontend
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn
RUN apk add --no-cache --virtual .build-deps \
    ca-certificates \
    wget \
    tar && \
    cd /usr/local/bin && \
    wget https://yarnpkg.com/latest.tar.gz && \
    tar zvxf latest.tar.gz && \
    ln -s /usr/local/bin/dist/bin/yarn.js /usr/local/bin/yarn.js && \
    apk del .build-deps

COPY / ./

EXPOSE 9000
CMD ["yarn", "dev"]
