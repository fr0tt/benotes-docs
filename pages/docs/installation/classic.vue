<template>

    <Headline>Manual Installation</Headline>

    <SubHeadline>Prerequisites</SubHeadline>

    <ul>
        <li>
            git (<a href="https://git-scm.com" target="_blank">https://git-scm.com</a>)
        </li>
        <li>
            composer (<a href="https://getcomposer.org" target="_blank">https://getcomposer.org</a>)
        </li>
        <li>PHP ≥ 7.2.5</li>
        <li>MySQL, Postgres, SQLite or SQL Server (currently only MySQL and PostgreSQL and SQLite
          were tested)
        </li>
    </ul>

    <SubHeadline>Installation</SubHeadline>

    <ul>
        <li>
            <code>git clone https://github.com/fr0tt/benotes</code>
            <Comment>download files version-controlled</Comment>
        </li>
        <li>
            <code>composer install</code>
            <Comment>
                install dependencies accordingly to your php version.
                <br> Please note that **php8-cli will fail**, use instead something similar to the
                likes of: <code>/usr/bin/php7.4 /usr/local/bin/composer install</code> or any
                other php-cli version between 7.2.5 and 7.4
            </Comment>
        </li>
        <li>
          <code>cp .env.example .env</code>
          <Comment>copy configuration file</Comment>
        </li>
        <li>
          generate a random string for <code>APP_KEY</code> in your <code>.env</code> file e.g.
          <code>openssl rand -base64 32</code>
          <Comment>for security reasons</Comment>
        </li>
        <li>
          create a database
        </li>
        <li>
          also edit <code>DB_DATABASE</code>, <code>DB_USERNAME</code> and <code>DB_PASSWORD</code>
          in <code>.env</code> file accordingly.
          If you use something else than MySQL you need to adjust
          <code>DB_CONNECTION</code> and most likely <code>DB_PORT</code> as well.
          <code>DATABASE_URL</code> is also supported if you want to you use that instead.
          <Comment>in order to be able to connect to your database</Comment>
        </li>
      </ul>

      <Tabs>
        <Tab name="MySQL">
          <pre><code>DB_CONNECTION=mysql
DB_HOST=localhostOrYourDatabaseIpAddress
DB_PORT=3306
DB_DATABASE=yourDatabaseName
DB_USERNAME=yourDatabaseUsername
DB_PASSWORD=yourDatabasePassword</code></pre>
        </Tab>
        <Tab name="PostgreSQL">
          <pre><code>DB_CONNECTION=pgsql
DB_HOST=localhostOrYourDatabaseIpAddress
DB_PORT=5432
DB_DATABASE=yourDatabaseName
DB_USERNAME=yourDatabaseUsername
DB_PASSWORD=yourDatabasePassword</code></pre>
        </Tab>
        <Tab name="Sqlite">
          <pre><code>
DB_CONNECTION=sqlite
DB_DATABASE=storage/database.sqlite
          </code></pre>
        </Tab>
      </Tabs>

      <ul>
        <li>
          <code>php artisan install</code> or something like <code>/usr/bin/php7.4 artisan install</code>
          <Comment>amongst other: create database tables and fill them. Type yes if asked</Comment>
        </li>
        <li>
          <code>ln -sfn ../storage/app/public/ public/storage</code>
          <Comment>create symlink for storage</Comment>
        </li>
        <li>
          <code>chown -R :www-data storage && chmod -R 774 storage</code>
          <Comment>make storage directory writable for webserver if your webserver runs as user www-data</Comment>
        </li>
        <li>
          if you wish to use it on a production server change in your <code>.env</code> file
          <code>APP_ENV</code> from <code>local</code> to <code>production</code>
        </li>
        <li>
          configure your webserver or use for testing purposes <code>php -S localhost:8000 -t public</code>
        </li>
      </ul>
</template>




    <!-- https://raw.githubusercontent.com/fr0tt/benotes/master/installation.md -->