#!/usr/bin/env sh

read -p "Migration Name:" name
yarn run typeorm migration:generate -f apps/store/ormconfig.ts -n $name
