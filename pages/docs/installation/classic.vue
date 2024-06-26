<template>
    <Headline>Manual Installation</Headline>

    <SubHeadline>Prerequisites</SubHeadline>

    <ul>
        <li>
            git (
            <a href="https://git-scm.com" target="_blank">https://git-scm.com</a>
            )
        </li>
        <li>
            composer (
            <a href="https://getcomposer.org" target="_blank">https://getcomposer.org</a>
            )
        </li>
        <li>PHP ≥ 8.0.2</li>
        <li>
            MySQL, Postgres, SQLite or SQL Server (currently only MySQL and PostgreSQL and
            SQLite were tested)
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
            <Comment>install dependencies accordingly to your php version</Comment>
        </li>
        <li>
            <code>cp .env.example .env</code>
            <Comment>copy configuration file</Comment>
        </li>
        <li>create a database</li>
        <li>
            also edit
            <code>DB_DATABASE</code>
            ,
            <code>DB_USERNAME</code>
            and
            <code>DB_PASSWORD</code>
            in
            <code>.env</code>
            file accordingly. If you use something else than MySQL you need to adjust
            <code>DB_CONNECTION</code>
            and most likely
            <code>DB_PORT</code>
            as well.
            <code>DATABASE_URL</code>
            is also supported if you want to you use that instead.
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
DB_DATABASE=/absolute/path/to/your/storage/database.sqlite
          </code></pre>
        </Tab>
    </Tabs>

    <ul>
        <li>
            <code>php artisan install</code>
            <Comment>
                amongst other: create database tables and fill them. Type yes if asked
            </Comment>
        </li>
        <li>
            <code>ln -sfn ../storage/app/public/ public/storage</code>
            <Comment>create symlink for storage</Comment>
        </li>
        <li>
            <code>chown -R :www-data storage && chmod -R 774 storage</code>
            <Comment>
                make storage directory writable for webserver if your webserver runs as
                user www-data
            </Comment>
        </li>
        <li>
            if you wish to use it on a production server change in your
            <code>.env</code>
            file
            <code>APP_ENV</code>
            from
            <code>local</code>
            to
            <code>production</code>
        </li>
        <li>
            configure your webserver to point to the
            <code>public</code>
            directory or use for testing purposes
            <code>php artisan serve</code>
        </li>
    </ul>

    <SubHeadline>Upgrade</SubHeadline>

    <ul>
        <li>
            <code>git pull</code>
            <Comment>upgrade files</Comment>
        </li>
        <li>
            <code>composer install</code>
            <Comment>upgrade dependencies</Comment>
        </li>
        <li>
            <code>php artisan migrate</code>
            <Comment>upgrade database schemas</Comment>
        </li>
        <li>
            <code>php artisan cache:clear</code>
            <Comment>clear cache</Comment>
        </li>
    </ul>
</template>
