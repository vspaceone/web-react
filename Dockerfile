FROM mhart/alpine-node:11 AS builder
WORKDIR /app
COPY . .
RUN echo $SOURCE_COMMIT > ./public/version.txt
RUN cat ./public/version.txt
RUN npm install
RUN npm run build

FROM mhart/alpine-node
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]