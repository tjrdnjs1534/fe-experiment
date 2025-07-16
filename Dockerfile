FROM node:22-slim AS builder

WORKDIR /app

# 패키지 설치 (package.json, lockfile만 복사 → 캐시 활용)
COPY package*.json ./
RUN npm ci

# 소스 복사 및 빌드
COPY . .
RUN npm run build

# 2. Production Stage (정적 파일만 서빙)
FROM node:22-slim AS runner

WORKDIR /app

# serve 패키지 설치 (정적 파일 서빙용, 필요시)
RUN npm install -g serve

# 빌드 산출물만 복사
COPY --from=builder /app/dist ./dist

# (선택) package.json 복사 (serve 등 필요시)
COPY package*.json ./

# 4173 포트(기본 Vite preview/serve) 오픈
EXPOSE 4173

# 정적 파일 서빙 (serve 사용, 필요시 커스텀 가능)
CMD ["serve", "-s", "dist", "-l", "4173"]