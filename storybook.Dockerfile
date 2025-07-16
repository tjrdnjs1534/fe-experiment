FROM node:22-slim AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build-storybook

FROM node:22-slim AS runner

WORKDIR /app

RUN npm install -g serve

COPY --from=builder /app/storybook-static ./storybook-static

EXPOSE 6006

CMD ["serve", "storybook-static", "-l", "6006"]