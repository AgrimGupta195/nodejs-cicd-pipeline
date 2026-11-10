FROM node:20-alpine AS builder
WORKDIR /build
COPY package*.json ./
RUN npm ci --omit=dev

FROM node:20-alpine
WORKDIR /srv
ENV NODE_ENV=production
RUN rm -rf /usr/local/lib/node_modules/npm /usr/local/bin/npm /usr/local/bin/npx /usr/local/bin/corepack
COPY --from=builder /build/node_modules ./node_modules
COPY package*.json ./
COPY app/ ./app/
USER node
EXPOSE 3000
CMD ["node", "app/server.js"]