FROM php:8.2-cli

# Create an application directory
RUN mkdir -p /app

# The /app directory should act as the main application directory
WORKDIR /app

COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

ENV COMPOSER_ALLOW_SUPERUSER 1 

RUN composer install
RUN php bin/console doctrine:migration:migrate
RUN php bin/console doctrine:migration:migrate --env=test

COPY auth_server/ .

# Expose $PORT on container.
# We use a varibale here as the port is something that can differ on the environment.
EXPOSE $PORT

# Start the app
CMD [ "symfony", "serve" ]