FROM debian

# Mise à jour et installation Apache + PHP + extensions
RUN apt-get update && apt-get install -y \
    apache2 \
    php \
    libapache2-mod-php \
    php-mysql \
    php-mbstring \
    php-xml \
    php-curl \
    php-gd \
    php-zip \
    php-intl \
    php-xsl \
    php-soap \
    php-cli \
    unzip \
    git \
    curl \
    locales \
    && rm -rf /var/lib/apt/lists/*

# Activer mod_rewrite
RUN a2enmod rewrite

# Installation de Composer
RUN curl -sS https://getcomposer.org/installer | php -- --disable-tls && \
    mv composer.phar /usr/local/bin/composer

# Installation Symfony CLI
RUN curl -sS https://get.symfony.com/cli/installer | bash && \
    mv /root/.symfony*/bin/symfony /usr/local/bin/symfony

# Configuration Apache avec vhost
COPY docker/php/vhosts/000-default.conf /etc/apache2/sites-enabled/000-default.conf

# Dossier de travail
WORKDIR /var/www/project

# Copier le code du projet dans le conteneur
COPY . .

# Permissions Symfony
RUN mkdir -p var/cache var/log && \
    chmod -R 777 var

# Lancer Apache
CMD ["apache2ctl", "-D", "FOREGROUND"]

EXPOSE 80


