<template>

    <Headline>Backup</Headline>

    <SubHeadline>Limitations</SubHeadline>

    <p>Currently SQL Server and backing up S3 storage is not supported.</p>

    <SubHeadline>Manual backup</SubHeadline>

    <p>Backups can be triggered manually by executing the following command:</p>
    <code>php artisan backup:run</code>


    <SubHeadline>Schedule backups</SubHeadline>

    <p>Schedule them by adding this line to your servers cron entries:</p>

    <pre><code>0 * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1</code></pre>
    <Comment>This will check every hour if there is any task to run.</Comment>

    <br>

    <p>If you installed Benotes with Docker you have to add instead:</p>

    <pre><code>0 * * * * cd /path-to-your-project && docker exec -it benotes php artisan schedule:run >> /dev/null 2>&1</code></pre>

    <br><br>

    <p>By default scheduled backups are created every night. If you wish to change that
    add the following to your <code>.env</code> file:</p>

    <code>BACKUP_INTERVAL = 0 0 */7 * *</code>
    <Comment>This would translate to a weekly backup.</Comment>

    <br>

    <p>If you wish to store your data with S3 compatible Object Storage
    (such as AWS S3, Digital Ocean Spaces, Minio, etc.), add the following to your <code>.env</code> file:
    </p>

    <pre><code>BACKUP_DISK=s3
AWS_ACCESS_KEY_ID=yourKeyId
AWS_SECRET_ACCESS_KEY=yourAccessKey
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=yourCreativeBucketName
AWS_ENDPOINT=endpointUrl</code></pre>


</template>