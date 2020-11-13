#!/bin/sh
set -eu

APP_VARS=${APP_VARS:-HOSTNAME}
JSON="{"

for VAR in ${APP_VARS}
do
    JSON="${JSON}\"${VAR}\": \"$(eval echo \${${VAR}:-undefined})\", "
done
JSON="${JSON%??}}"

echo REACT_APP_ENV=$(echo ${JSON} | base64 | tr -d '\n') > .env.local

if [ "${1#-}" != "${1}" ] || [ -z "$(command -v "${1}")" ]; then
  set -- node "$@"
fi

exec "$@"
