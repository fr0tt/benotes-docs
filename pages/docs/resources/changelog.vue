<template>
    <Headline>Changelog</Headline>

    <SubHeadline>2.8.0</SubHeadline>
    <ul>
        <li>import bookmarks</li>
        <li>export bookmarks</li>
        <li>allow uploading images in the editor</li>
        <li>support webp thumbnails</li>
    </ul>

    <SubHeadline>2.7.2</SubHeadline>
    <ul>
        <li>fix database backup</li>
        <li>extend thumbnail command</li>
        <li>gather more than just a thumbnail when using chrome if needed</li>
        <li>
            prevent system from replacing a screenshot with something worse if the URL has
            not changed
        </li>
        <li>allow bringing your on description via api request</li>
    </ul>

    <SubHeadline>2.7.1</SubHeadline>
    <ul>
        <li>fix lower case search with PostgreSQL</li>
        <li>include child-collections in search</li>
        <li>fix screenshot taking</li>
    </ul>

    <SubHeadline>2.7.0</SubHeadline>
    <ul>
        <li>docker image has now multiplatform support</li>
        <li>PostgreSQL as new default database (with docker compose)</li>
        <li>
            screenshots to replace missing thumbnails, both manually and automated in a
            certain interval
        </li>
    </ul>

    <SubHeadline>2.6.0</SubHeadline>
    <ul>
        <li>added a dark theme</li>
        <li>
            added the ability to add new themes with a theme folder (and a manual rebuild
            afterwards)
        </li>
    </ul>

    <SubHeadline>2.5.0</SubHeadline>
    <ul>
        <li>implement nested collections</li>
        <li>solved as many bugs caused by that as possible</li>
        <li>replace collection selection with a tree selection</li>
        <li>fix initial tag bug</li>
    </ul>

    <SubHeadline>2.4.0</SubHeadline>
    <p>This is a major update technically speaking:</p>
    <ul>
        <li>
            migrate from Lumen to Laravel (which also allows support for the newest PHP
            versions)
        </li>
        <li>
            implement Playwright with some browser tests (after spending many hours with
            it and Cypress and Dusk..)
        </li>
        <li>simplify docker-compose setup</li>
        <li>update Dockerfile</li>
        <li>
            use fonts locally instead of a CDN, as request by
            <a href="https://github.com/fr0tt/benotes/issues/45"></a>
                <code>@MohamedElashri</code>
            </a>
        </li>
    </ul>

    <SubHeadline>2.3.1</SubHeadline>
    <ul>
        <li>fix bug: add line again that was removed accidentally the day before</li>
        <li>fix: redirect bug</li>
        <li>fix: (text and bookmarks) post creation with tags</li>
        <li>fixed: bottommenu on mobile can be scrolled away</li>
    </ul>

    <SubHeadline>2.3.0</SubHeadline>
    <ul>
        <li>complete tag implementation</li>
        <li>fix key-generate command</li>
    </ul>
</template>
