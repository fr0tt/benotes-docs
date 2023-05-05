<template>
    <Headline>Docker with docker-compose</Headline>
    <SubHeadline>Installation</SubHeadline>

    <p>This uses a completely new multi-platform image with (hopefully) better user experience.</p>

    <ul>
        <li>
            <code>git clone https://github.com/fr0tt/benotes_docker-compose .</code>
            or
            <code>wget https://raw.githubusercontent.com/fr0tt/benotes_docker-compose/master/docker-compose.yml && wget https://raw.githubusercontent.com/fr0tt/benotes_docker-compose/master/.env.example</code>
            <Comment>download a docker-compose.yml and .env file</Comment>
        </li>
        <li>
            in your new docker-compose.yml file change the image from <code>fr0tt/benotes:latest</code> to <code>fr0tt/benotes:2.7.0-beta</code>
            <Comment>This step is only required while still in beta</Comment>
        </li>
        <li>
            <code>cp .env.example .env</code>
            <Comment>"enable" the .env file to be detected/used by docker-compose</Comment>
        </li>
        <li>
            optional: <b>only</b> change in your <code>.env</code> file <code>APP_PORT</code>  
            if you wish to run this app under a different port
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
            <code>php artisan install</code>
            <Comment>amongst others: create an admin account. Type yes if asked.</Comment>
        </li>

    </ul>

    <SubHeadline>Upgrade</SubHeadline>
    <ul>
        <li>
            <code>docker-compose pull && docker-compose up -d</code>
            <Comment>Restart the docker container and fetch a new image if available</Comment>
        </li>
    </ul>

    <SubHeadline>Volumes</SubHeadline>

    <p>The docker-compose file uses a named volume to persist data.
The reason for that is that bind mounts are more error-prone when it comes to 
permissions and terrible when it comes to inserting data beforehand.</p>
    <p>However if you must use bind mounts do the following:</p>
    <ul>
        <li>change the docker-compose file by (un)comment this section</li>
        <pre><code>volumes:
- .env:/var/www/.env
- ./data/storage/app/public/thumbnails:/var/www/storage/app/public/thumbnails
- ./data/storage/backup:/var/www/storage/backup
- ./data/storage/logs:/var/www/storage/logs
#- benotes_storage:/var/www/storage</code></pre>
        <li><code>mkdir -p data/storage</code></li>
        <li>
            <code>sudo chown -R www-data:www-data data/storage</code>
            <Comment>Make this directory writable for the webservers user of the docker container</Comment>
        </li>
    </ul>

    <SubHeadline>Migrating from v2.6 and earlier</SubHeadline>
    <p>Short answer: You don't have to do anything. Just use <code>fr0tt/benotes:2.7.0-beta</code> as image while in beta.</p>
    <p>Long answer: If you keep your existing docker-compose.yml you are going to use bind mounts
which should not be a problem for you since it had to work so far and the new image uses the same 
exact paths as before. However if you would like to adapt and use the new docker-compose.yml file
you need to start the container once before you use it to let the docker engine create and bootstrap 
the volume for you. After that you can copy all subfolders of <code>data</code> into the newly
created volume which might be located at <code>/var/lib/docker/volumes/yourBenotesInstallationDirectoryName_benotes_storage/_data</code>
 - next to the database volume. (You can also use <code>docker volume ls</code> and <code>docker volume inspect</code>
to find it via the CLI.)</p>

</template>