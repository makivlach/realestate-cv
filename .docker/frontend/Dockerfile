# syntax=docker/dockerfile:1.2
FROM node:18-alpine3.16 AS builder

ENV NODE_ENV=development

# Download public key for github.com
RUN mkdir -p -m 0600 ~/.ssh && ssh-keyscan github.com >> ~/.ssh/known_hosts

WORKDIR /app
ADD . /app
ADD ./.env.prod.local /app/.env

RUN --mount=type=ssh --mount=type=cache,target=/tmp/.yarn YARN_CACHE_FOLDER=/tmp/.yarn  yarn install --prefer-offline
ENV NODE_ENV=production
RUN yarn build


FROM node:18-alpine3.16

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
ADD ./.env.prod.local /app/.env

RUN --mount=type=ssh --mount=type=cache,target=/tmp/.yarn YARN_CACHE_FOLDER=/tmp/.yarn  yarn install --prefer-offline

EXPOSE 3000

CMD ["yarn", "start"]
