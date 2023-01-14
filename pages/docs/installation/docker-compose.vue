<template>
    <Headline>Docker with docker-compose</Headline>
    <SubHeadline>Installation</SubHeadline>

    <ul>
        <li>
            <code>git clone https://github.com/fr0tt/benotes_docker-compose</code>
            or
            <code>wget https://github.com/fr0tt/benotes_docker-compose/archive/refs/heads/master.zip</code>
            <Comment>create a new directory containing a docker-compose.yml and .env file</Comment>
        </li>
        <li>
            <code>cp .env.example .env</code>
            <Comment>"enable" the .env file to be detected/used by docker-compose</Comment>
        </li>
        <li>
            <code>docker-compose up -d</code>
            <Comment>start docker container</Comment>
        </li>
        <li>
            <code>docker-compose exec --user application benotes_app sh</code>
            <Comment>access the app service</Comment>
        </li>
        <li>
            <code>php artisan install</code>
            <Comment>amongst others: migrate the database and create an admin account. Type yes if asked.</Comment>
        </li>

    </ul>

    <SubHeadline>Upgrade</SubHeadline>
    <ul>
        <li>
            <code>docker-compose pull && docker-compose up -d</code>
            <Comment>Restart the docker container and fetch a new image if available</Comment>
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