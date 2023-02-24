<template>

    <Headline>Changelog</Headline>

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
        <li>migrate from Lumen to Laravel (which also allows support for the newest PHP versions)</li>
        <li>implement Playwright with some browser tests (after spending many hours with it and Cypress and Dusk..)</li>
        <li>simplify docker-compose setup</li>
        <li>update Dockerfile</li>
        <li>use fonts locally instead of a CDN, as request by <a href="https://github.com/fr0tt/benotes/issues/45"><code>@MohamedElashri</code></a></li>
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