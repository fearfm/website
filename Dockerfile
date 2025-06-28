FROM node:22-alpine AS development-dependencies-env
RUN npm -g install pnpm
COPY . /app
WORKDIR /app
RUN pnpm install --frozen-lockfile

FROM node:22-alpine AS production-dependencies-env
RUN npm -g install pnpm
COPY ./package.json pnpm-lock.yaml /app/
WORKDIR /app
RUN pnpm install --frozen-lockfile --prod

FROM node:22-alpine AS build-env
RUN npm -g install pnpm
COPY . /app/
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
WORKDIR /app
RUN pnpm run build

FROM node:22-alpine
RUN npm -g install pnpm && apk --no-cache add curl
COPY ./package.json pnpm-lock.yaml /app/
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build
COPY . /app
COPY ./.env /app/.env
WORKDIR /app
CMD ["sh", "-c", "pnpm run start"]