<template>
    <Headline>Docker with CLI</Headline>

    Docker Image can be found
    <a href="https://hub.docker.com/r/fr0tt/benotes">here</a>
    .

    <SubHeadline>Installation</SubHeadline>

    <ul>
        <li>
            <code>
                wget -O .env
                https://raw.githubusercontent.com/fr0tt/benotes/master/.env.sqlite.example
            </code>
            <Comment>
                copy the content of this
                <a
                    href="https://raw.githubusercontent.com/fr0tt/benotes/master/.env.sqlite.example">
                    file
                </a>
                into a new file called
                <code>.env</code>
            </Comment>
        </li>
        <li>
            edit
            <code>.env</code>
            by setting a random secret for
            <code>APP_KEY</code>
            (generated with e.g.
            <code>openssl rand -base64 32</code>
            ) and
            <code>JWT_SECRET</code>
        </li>
        <li>
            <b>only if</b>
            you do not want to use SQLite: also edit
            <code>DB_DATABASE</code>
            ,
            <code>DB_HOST</code>
            ,
            <code>DB_USERNAME</code>
            ,
            <code>DB_PASSWORD</code>
            ,
            <code>DB_CONNECTION</code>
            and
            <code>DB_PORT</code>
            according to your database. (You can have a look at
            <a href="/docs/installation/classic">classic</a>
            for this)
        </li>
        <li>
            <pre><code>docker run -p 8000:80 -itd --rm \
    -v benotes_storage:/var/www/storage \
    -v "$(pwd)"/nginx/logs/:/var/lib/nginx/logs/ \
    -v "$(pwd)"/.env:/var/www/.env \
    --env-file ./.env \
    --name benotes fr0tt/benotes</code></pre>
            <Comment>
                run the docker container (with a named volume to store data, a bind mount
                for webserver logs and env variables from your .env file)
            </Comment>
        </li>
        <li>
            <code>docker exec -it benotes sh</code>
            <Comment>
                reference the image by its name, in this case as previously defined:
                benotes
            </Comment>
        </li>
        <li>
            <code>php artisan install --only-user</code>
            <Comment>
                execute those two commands in your container to initialize the application
            </Comment>
        </li>
    </ul>

    <SubHeadline>Upgrade</SubHeadline>

    <ul>
        <li>
            <pre><code>docker run -p 8000:80 -it --rm \
    -v benotes_storage:/var/www/storage \
    -v "$(pwd)"/nginx/logs/:/var/lib/nginx/logs/ \
    -v "$(pwd)"/.env:/var/www/.env \
    --env-file ./.env \
    --name benotes fr0tt/benotes</code></pre>
            <Comment>rerun the container in order to use the latest build</Comment>
        </li>
        <li>
            <code>docker exec -it benotes sh</code>
        </li>
        <li>
            <code>sh docker/update.sh</code>
            <Comment>type yes if asked</Comment>
        </li>
    </ul>

    <br />
    <hr />

    <SubHeadline>Optional: S3 as Filesystem</SubHeadline>

    If you use an ephermal, non-persistent filesystem which is the case e.g. with Heroku
    or every Docker hosting that does not implement volumes you can use the S3 driver in
    order to store your data permanently.
    <br />
    <br />
    What benefit would you gain from doing so ?
    <br />
    <br />
    Currently the only difference would be that every thumbnail from every link would use
    the original location of every thumbnail, meaning that your browser would need to
    communicate with each of them - instead of accessing them all shrinked and from on
    single source, your local filesystem or a S3 bucket. Every Object Storage that is S3
    compliant can be used such as e.g. AWS S3, Digital Ocean Spaces or Minio.

    <ul>
        <li>Create a bucket and make it public</li>
        <li>
            Add to your
            <code>.env</code>
            file the following with correct corresponding values:
        </li>
    </ul>

    <pre><code>FILESYSTEM_DRIVER     = s3
AWS_ACCESS_KEY_ID     = yourKeyId
AWS_SECRET_ACCESS_KEY = yourAccessKey
AWS_DEFAULT_REGION    = us-east-1
AWS_BUCKET            = yourCreativeBucketName
AWS_ENDPOINT          = endpointUrl
</code></pre>
</template>
