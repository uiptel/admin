#!/bin/sh

VARS=${APP_VARS:-HOSTNAME}
JSON="{"

for VAR in ${VARS}
do
    JSON="${JSON}\"${VAR}\": \"$(eval echo \${${VAR}:-undefined})\", "
done

echo "${JSON%??}}"