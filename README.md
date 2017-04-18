# music-search
A simple HTML/JS app using AngularJS v1, which allows the user to search for an artist or album using the Spotify API to get the results.

## Installation
Clone repository to local machine:

`git clone https://github.com/falendary/music-search.git`

Install node modules:

`npm install`

Build project:

`gulp`

**Optional** run watch server (rebuild project if file changes)

`gulp index-watch-min`

## Project structure

Production files

dist/core  -- *libraries folder*

dist/index -- *project folder*

dist/index/content -- *css, img, fonts*

dist/index/scripts -- *javascript*

Source files

src/index/index.html

src/index/content/less -- *less files, (improts.less - index for styles)*

src/index/scripts/main.js  -- *initialize file*

src/index/scripts/templates.js  -- *$templateCache ready html*

src/index/scripts/components/* -- *card components*

src/index/scripts/controllers/* -- *app and dialog controllers*

src/index/scripts/services/* -- *logic layer, cookie service and dialog service*

src/index/scripts/repositores/* -- *data acess layer*
