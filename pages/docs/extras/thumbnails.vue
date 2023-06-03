<template>

    <Headline>Add missing thumbnails</Headline>

    <p>This entire feature is automatically enabled within the docker image.</p>

    <SubHeadline>Prerequisite for Classic</SubHeadline>

    <p>In order to add missing thumbnails you need to have a chromium browser installed. 
Newer docker images include all of this by default without any intervention.</p>

    <ul>
        <li>install chromium or chrome (e.g. <code>sudo apt install chromium-browser</code>)  
        or use google-chrome (e.g. <code>wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb</code> 
        and <code>sudo apt install ./google-chrome-stable_current_amd64.deb</code>)
        </li>
        <li>change in your <code>.env</code> file:
            <code>GENERATE_MISSING_THUMBNAILS = true</code>
        </li>
    </ul>

    <SubHeadline>Manual thumbnail generation</SubHeadline>

    <p>Thumbnails can be manually created by executing the following command:</p>
    <code>php artisan thumbnail:generate</code>


    <SubHeadline>Schedule thumbnail generation for Classic</SubHeadline>

    <p>Schedule them by adding this line to your servers cron entries if you have not already 
done this for the <a href="/docs/extras/backup">backups</a>:</p>

    <pre><code>0 * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1</code></pre>
    <Comment>This will check every hour if there is any task to run.</Comment>

    <br>

    <p>By default missing thumbnails are generated every 2 hours. If you wish to change that
    add the following to your <code>.env</code> file:</p>

    <code>THUMBNAIL_FILLER_INTERVAL = "0 0 */7 * *"</code>
    <Comment>This would translate to a weekly missing thumbnail creation.</Comment>

</template>
