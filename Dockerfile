FROM node:18.12-alpine3.15 as frontend-build
COPY frontend/package.json ./
COPY frontend/yarn.lock ./
RUN yarn
COPY /frontend ./
RUN yarn build

# Web 
FROM nginx:1.23.3-alpine
COPY --from=frontend-build /dist /build
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
