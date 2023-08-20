<template>
    <Headline>Docker from Source with docker-compose</Headline>
    <SubHeadline>Installation</SubHeadline>
    <p>This installation method is recommend for development in a docker environment.</p>

    <ul>
        <li>
            <code>git clone https://github.com/fr0tt/benotes</code>
        </li>
        <li>
            <code>cp .env.docker.example .env</code>
        </li>
        <li>
            add to your .env file
            <code>INSTALL_NODE=true</code>
        </li>
        <li>
            <code>docker-compose build</code>
            <Comment>build docker container</Comment>
        </li>
        <li>
            <code>docker-compose up -d</code>
            <Comment>start docker container</Comment>
        </li>
        <li>
            <code>docker-compose exec --user application app sh</code>
            <Comment>access the app service</Comment>
        </li>
        <li>
            <code>sh docker/install.sh</code>
            <Comment>
                do some necessary work like database migration and admin account creation
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
        <li>(based on your setup you might want to configure a reverse proxy as well)</li>
    </ul>

    <SubHeadline>Upgrade</SubHeadline>
    <ul>
        <li>
            <code>git pull</code>
        </li>
        <li>
            <code>docker-compose exec app sh</code>
        </li>
        <li>
            <code>sh docker/update.sh</code>
            <Comment>Type yes if asked</Comment>
        </li>
    </ul>
</template>
