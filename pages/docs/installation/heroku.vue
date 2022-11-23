<template>

<Headline>Heroku</Headline>

<SubHeadline>Installation</SubHeadline>

<ul>
    <a href="https://heroku.com/deploy?template=https://github.com/fr0tt/benotes">
        <button><img src="https://www.herokucdn.com/deploy/button.svg" aria-hidden="true"></button>
    </a>
    <li>
        run command: <code>php artisan install --only-user</code>
        <Comment>by clicking the 'more' button and 'run console' in your dashboard</Comment>
    </li>
    <li>
        for persisting data see <a href="#optional-s3-as-filesystem">below</a>
    </li>
</ul>

<SubHeadline>Upgrade</SubHeadline>

<ul>
    <li>
        Follow the steps described at <a href="https://f-a.nz/dev/update-deploy-to-heroku-app/">https://f-a.nz/dev/update-deploy-to-heroku-app/</a>
        <Comment>replace https://github.com/user/my-project with https://github.com/fr0tt/benotes</Comment>
    </li>
</ul>

<br>
<br>
<hr>

<SubHeadline>Optional: S3 as Filesystem</SubHeadline>

If you use an ephermal, non-persistent filesystem which is the case e.g. with Heroku or
every Docker hosting that does not implement volumes you can use the S3 driver in order
to store your data permanently.
<br><br>
What benefit would you gain from doing so ?
<br><br>
Currently the only difference would be that every thumbnail from every link would use the original
location of every thumbnail, meaning that your browser would need to communicate with each of
them - instead of accessing them
all shrinked and from on single source, your local filesystem or a S3 bucket.
Every Object Storage that is S3 compliant can be used such as e.g. AWS S3, Digital Ocean Spaces
or Minio.

<ul>
    <li>Create a bucket and make it public</li>
    <li>Add to your <code>.env</code> file the following with correct corresponding values:</li>
</ul>

<pre><code>FILESYSTEM_DRIVER     = s3
AWS_ACCESS_KEY_ID     = yourKeyId
AWS_SECRET_ACCESS_KEY = yourAccessKey
AWS_DEFAULT_REGION    = us-east-1
AWS_BUCKET            = yourCreativeBucketName
AWS_ENDPOINT          = endpointUrl
</code></pre>

</template>