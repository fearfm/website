FROM node:22-bullseye-slim AS build
WORKDIR /app
RUN npm install -g pnpm
COPY . /app
RUN pnpm install --frozen-lockfile
RUN pnpm build

FROM node:22-bullseye-slim AS prod
WORKDIR /app
RUN npm install -g pnpm
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/build /app/build
COPY --from=build /app/public /app/public
CMD ["pnpm", "run", "start"]
