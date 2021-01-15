# estágio de produção
FROM nginx:alpine as production-stage
WORKDIR /app
COPY . .
COPY . /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;"]