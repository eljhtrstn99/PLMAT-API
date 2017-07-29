#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE DATABASE plmat_api;
    GRANT ALL PRIVILEGES ON DATABASE plmat_api TO postgres;
EOSQL
