#!/usr/bin/env bash

PROJECT_NAME="dia_jaya_motor_local"

docker-compose -f \
    docker-compose.local.yaml \
    -p $PROJECT_NAME \
    down -v

docker system prune -f
