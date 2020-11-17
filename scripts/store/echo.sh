#!/usr/bin/env sh

yarn run typeorm migration:$1 -f apps/store/ormconfig.ts
