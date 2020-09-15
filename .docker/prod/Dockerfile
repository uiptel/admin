FROM node:alpine AS builder

WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile && npx react-scripts build

FROM nginx:stable-alpine
ARG BUILD_DATE
ARG COMMIT_ID
ARG VERSION

# Labels.
LABEL maintainer="ryzhov@uiptel.com"
LABEL org.label-schema.schema-version="1.0"
LABEL org.label-schema.build-date=$BUILD_DATE
LABEL org.label-schema.vcs-ref=$COMMIT_ID
LABEL org.label-schema.version=$VERSION

ENV BUILD_DATE=${BUILD_DATE} VCS_REF=${COMMIT_ID} VERSION=${VERSION} WORKDIR=/usr/share/nginx/html NODE_ENV=production

COPY .docker/entrypoint.sh /usr/local/bin/
COPY .docker/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR ${WORKDIR}
RUN rm -rf *
COPY --from=builder /app/build .

ENTRYPOINT ["entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
