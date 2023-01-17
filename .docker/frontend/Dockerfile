# syntax=docker/dockerfile:1.2
FROM node:18-alpine3.16 AS builder


WORKDIR /app
ADD . /app

RUN --mount=type=ssh --mount=type=cache,target=/tmp/.yarn YARN_CACHE_FOLDER=/tmp/.yarn  yarn install --prefer-offline
RUN yarn build


FROM node:18-alpine3.16

WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
