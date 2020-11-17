#!/bin/sh
set -eu

JSON=$(encode_vars.sh)

echo REACT_APP_ENV=$(echo ${JSON} | base64 | tr -d '\n') > .env.local

if [ "${1#-}" != "${1}" ] || [ -z "$(command -v "${1}")" ]; then
  set -- node "$@"
fi

exec "$@"
