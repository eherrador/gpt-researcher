FROM node:18.17.0-alpine as builder
WORKDIR /app
COPY ./package.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

FROM nginx
# Usar EXPOSE 3000 cuando se genere un solo contenedor con docker compose up --build
# EXPOSE 3000
# Para el caso de que se genere un contenedor por cada servicio, con gcloud build, se debe usar el puerto 8080
ARG PORT=8080
ENV PORT=${PORT}
EXPOSE ${PORT}
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# Usar la siguiente linea cuando se genere un solo contenedor con docker compose up --build
# COPY --from=builder /app/build /usr/share/nginx/html
# Para el caso de que se genere un contenedor por cada servicio, con gcloud build, se usa la siguiente linea
COPY --from=builder /app/out /usr/share/nginx/html