<template>

    <Headline>Bookmarklet</Headline>

    <SubHeadline>What is a Bookmarklet?</SubHeadline>

    <p>It is simply put a kind of browser extension and can be used
        in this case as a shortcut for creating new posts.</p>
    <br>
    <p>Have a look at a demo:</p>
    <img src="/bookmarklet.gif"/>

    <SubHeadline>How to "install" it</SubHeadline>

    <ul>
        <li>create a new bookmark in you browser</li>
        <li>add this <b>instead</b> of an URL while changing the second line
            <code>var server = ...</code> to your servers ip-address or domain</li>
        <pre><code>javascript: (function() {
	var server = 'http://YouNeedToChangeThat.com';
	var applicationUrl = server + '/c/0/p/create';
	applicationUrl += '?url=' + encodeURIComponent(window.location);
	applicationUrl += '&auto_close';
	window.open(applicationUrl);
})();</code></pre>
    <li>That's it. Now you can visit any website and bookmark it by
        clicking on your newly created "bookmark".</li>
    </ul>


</template>
