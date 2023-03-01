FROM php:8.0-apache

RUN pecl install xdebug
RUN apt update && apt install -y g++ \
                           libicu-dev \
                           libpq-dev \
                           libzip-dev \
                           zip \
                           zlib1g-dev \       
               && docker-php-ext-install \
                           intl \
                           opcache \
                           pdo \
                           pdo_pgsql \
                           pgsql
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs                        
  # コメントアウト
  # && docker-php-ext-enable xdebug
WORKDIR /var/www/laravel_docker

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

