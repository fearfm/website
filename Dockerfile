FROM node:22-bullseye-slim
WORKDIR /app

RUN npm install -g pnpm
COPY . /app

RUN pnpm install --frozen-lockfile
RUN pnpm build

CMD ["pnpm", "run", "start"]