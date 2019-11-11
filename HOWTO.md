Development setup
====================

Enable auto formatting of JavaScript and JSON in WebStorm
------------------

### Auto formatting with Prettier

Install the [Prettier plugin for WebStorm](https://plugins.jetbrains.com/plugin/10456-prettier).

Setup in WebStorm [Prettier File Watcher](https://prettier.io/docs/en/webstorm.html) for `.js` and `.json` files.

The prettier [configuration](https://prettier.io/docs/en/options.html) is stored in the file [`.prettierrc`](https://prettier.io/docs/en/configuration.html).

Running the application
======

```shell
npm install
node forerunner-menu.js > forerunner-menu.json
```
