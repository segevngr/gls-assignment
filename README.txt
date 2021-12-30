** GLS Fullstack Technical Home Assignment / Iridize by Oracle **
** Segev Nagar - 30/12/2021 **

----------------

SETUP:

1. Enter google.com. Make sure you're in english version otherwise selectors might not work.
2. Enter the following in chrome DevTools to perform the injection:

var playerScript = document.createElement('script');
playerScript.type = 'text/javascript';
playerScript.src = 'https://cdn.jsdelivr.net/gh/segevngr/gls-assignment@main/player.js';
document.head.appendChild(playerScript);

var jQueryScript = document.createElement('script');
jQueryScript.type = 'text/javascript';
jQueryScript.src = 'https://code.jquery.com/jquery-3.6.0.js';
document.head.appendChild(jQueryScript);

var jQueryUiScript = document.createElement('script');
jQueryUiScript.type = 'text/javascript';
jQueryUiScript.src = 'https://code.jquery.com/ui/1.13.0-rc.3/jquery-ui.js';
document.head.appendChild(jQueryUiScript);

3. Enter 'runGls()' in DevTools to start the GLS

-------------------

DESCRIPTION:

Injection:
I used 2 external libraries in my project, jQuery and jQueryUi for the floating dialog support.
Both of the libraries needed to be injected to the DOM before running the program.
To inject my player.js code i used JsDeliver to provide global CDN for my github file.


player.js:

runGls()
First function. Loads the two external URL files supplied in the assignment - the CSS & JSONP

guideCallback(guide)
callback function of the JSNOP guide which triggered automatically once JSONP is fetched, and recieves the json guide.
Then supplies the guide to all of the helper functions.

The rest of the helper functions description is provided in player.js comments.


------------------

NOTES:

1. For some reason the last tiplate is way off its target (Google Search Button).
I verified the selector is valid and played with jQueryUi dialog settings with no help.






