#!/usr/bin/env bash

php -v

if [ $? != 0 ]; then
    echo "PHP CLI is not installed"
    exit 0
fi

composer --version

if [ $? != 0 ]; then
    echo "Composer is not installed"
    exit 0
fi


PROJECT_NAME="dia_jaya_motor_local"
DB_HOST="local.dia-jaya-motor.db"

docker-compose -f \
    docker-compose.local.yaml \
    -p $PROJECT_NAME \
    up --build -d --force-recreate

echo "Waiting for database service ($DB_HOST)"
sleep 7


php artisan storage:link
php artisan migrate
php artisan db:seed
php artisan optimize:clear
php artisan serve
