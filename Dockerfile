FROM node:22-alpine AS builder
WORKDIR /app
COPY . .
RUN echo $SOURCE_COMMIT > ./public/version.txt
RUN cat ./public/version.txt
RUN npm install
RUN NODE_OPTIONS=--openssl-legacy-provider npm run build

FROM node:22-alpine
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]