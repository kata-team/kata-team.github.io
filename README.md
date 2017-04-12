[![Build Status](https://travis-ci.org/kata-team/technology-radar.svg?branch=master)](https://travis-ci.org/kata-team/technology-radar)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/b569c34b3b5d4b7db2fe54d808a0323b)](https://www.codacy.com/app/kata-team/technology-radar?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=kata-team/technology-radar&amp;utm_campaign=Badge_Grade)

PORTFOLIO
=========

Portfolio is a tool that helps you to create a simple TODO.


In short
--------

- ES6 and [React](https://facebook.github.io/react/)
- Hosted by [GitHub Pages](https://pages.github.com/)
- Automatic deploy with `git push origin master`
- Google Spreadsheets as database


Live demo
---------

Here you can find our live demo so you can explore all features.

https://kata-team.github.io/portfolio


To-Do List
----------

- [x] Responsive Web Design
- [x] Search items
    - [x] search by `title` and `description`
    - [x] filter by `category`
    - [x] filter by `status`
- [x] [Google Spreadsheets integration](#google-spreadsheets-integration)
- [x] [Live demo with GitHub Pages](#github-pages)
- [x] [Continuous Delivery with Travis CI](#travis-ci)


Getting Started
---------------

To get started, fork the project.

### Install Grunt and Bower

To install Grunt and Bower, you must first download and install [node.js](https://nodejs.org/) - which includes npm.

Then, using the command line:

```sh
# install `grunt-cli` globally
npm install -g grunt-cli

# install `bower` globally
npm install -g bower

# navigate to the root of your project, then run
npm install
bower install

npm run build
npm start

# http://127.0.0.1:8080
```

#### Available tasks

* `npm test`          A linter tool for identifying and reporting on patterns in JavaScript.
* `npm start`         Run HTTP Server on http://127.0.0.1:8080.
* `npm run build`     Run "test" and compile "javascripts" and "stylesheets".
* `npm run deploy`    Alias for "build". After that, will push changes of the **public** folder to **gh-pages** branch.
* `grunt`             Alias for "build" and "watch".


## Google Spreadsheets integration

Technology Radar provides a Google Spreadsheets integration, so you can use spreadsheets to storage your data.

Here you can find the example used for our [live demo](#live-demo). Feel free to duplicate the document and make your own.

https://docs.google.com/spreadsheets/d/112MlfyXSlIQ8nae85Te_xWDBP136GRaYeHlDdKgYyPo

#### Create your own

1. Open the document using the provided link.
1. Click on `File → Make a copy...` and choose a filename.
1. Modify the document adding or removing items.
1. Select `File → Publish to the web...` and click on `Publish`.
1. Now you just need to copy the `worksheetId` from the url (e.g. `112MlfyXSlIQ8nae85Te_xWDBP136GRaYeHlDdKgYyPo`)
1. Open the file `src/app/stores/ItemsStore.js` and paste to the const `WORKSHEET_ID`.
1. Save the file e compile the project with `npm run build`.


## GitHub Pages

The project is a set of html, css and javascript so it can be executed using [GitHub Pages](https://pages.github.com/).

We use GitHub Pages to provide you our live demo.

#### Setup GitHub Pages

##### on Code

1. Open the configuration file at `grunt/gh-pages.js`.
1. Change `user` section with your information.
1. Change `repo` link with your repository link.
1. After that you can deploy to gh-pages with `npm run deploy`.
1. You can also deploy to gh-pages using [TravisCI](#travis-ci).

##### on GitHub

1. Go to your repository page and click on `settings`.
1. Scroll down to the `GitHub Pages` section.
1. Set the `source` to `gh-pages` branch and click on Save.
1. That's it! Now your site is published.


## Travis CI

We use [Travis CI](https://travis-ci.org/kata-team/technology-radar) for Continuous Delivery.

- When you push your code to remote, Travis will automatically test you code and warn you if something goes wrong.
- If you push to `master` branch, Travis will compile and push your code to `gh-pages` branch (if all tests pass).
