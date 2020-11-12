FROM node:alpine AS builder

WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile && npx react-scripts build

FROM nginx:stable-alpine
ARG BUILD_DATE
ARG VCS_REF
ARG VERSION
ARG WORKDIR

# Labels.
LABEL maintainer="ryzhov@uiptel.com"
LABEL org.label-schema.schema-version="1.0"
LABEL org.label-schema.build-date=${BUILD_DATE}
LABEL org.label-schema.vcs-ref=${VCS_REF}}
LABEL org.label-schema.version=${VERSION}

# Will exposing this vars in "entrypoint.sh" while  pod creation to frontend script "env.js"
ENV EXPOSE_VARS="BUILD_DATE VCS_REF VERSION DIGEST_IMAGE HOSTNAME NODE_ENV API_URL"
ENV BUILD_DATE=${BUILD_DATE} VCS_REF=${VCS_REF} VERSION=${VERSION}

COPY .docker/entrypoint.sh /usr/local/bin/
COPY .docker/prod/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR ${WORKDIR}
RUN rm -rf *
COPY --from=builder /app/build .

ENTRYPOINT ["entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
