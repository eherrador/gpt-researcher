FROM node:18.17.0-alpine as builder
WORKDIR /app

# 1. Declara un argumento de construcción
ARG NEXT_PUBLIC_GPTR_API_URL

# 2. Establece una variable de entorno con ese argumento
#    Next.js leerá esta variable durante 'npm run build'
ENV NEXT_PUBLIC_GPTR_API_URL=${NEXT_PUBLIC_GPTR_API_URL}

COPY ./package.json ./
RUN npm install --legacy-peer-deps
COPY . .

# (Opcional pero recomendado para depuración) Añade un log para ver la variable durante la construcción
RUN echo "DEBUG: NEXT_PUBLIC_GPTR_API_URL durante el build: ${NEXT_PUBLIC_GPTR_API_URL}"

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