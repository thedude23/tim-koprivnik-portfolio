# tix theme

Tim Koprivnik's portfolio

## Introduction

This is Tim Koprivnik's custom theme, named "tix". It is based on the starter theme he also made by himself. Style follows the [BEM methodology](http://getbem.com/) and Javascript is written as ES6. The JS and SCSS files are compiled and minified with webpack.

## Requirements

Requirements for developing:

- [NodeJS](https://nodejs.org/en/)
- [NPM](https://npmjs.com/)

## Commands

| Command       | Description                                                                       |
| ------------- | --------------------------------------------------------------------------------- |
| npm i         | Install dependencies and link local packages.                                     |
| npm ci        | Install a project with a clean slate. Use especially in travis like environments. |
| npm run dev   | Compile styles for development environment. and watch file changes.               |
| npm run build | Build packages for production. Minify CSS/JS.                                     |

Setup the developing environment by running

    nvm use
    npm i
    npx husky i

Explanations for commands.

- `nvm use` : Install and use the correct version of Node.
- `npm i` : As stated above; Install dependencies and link local packages.
- `npx husky i` : Execute husky package binary; Install git-hooks for the project.

## Structure for files and folders

```
tix
│   README.md
└───src
│   └───scss
│   │   │   styles.scss
│   │   │   README.txt
│   └───js
│   │   │   file-name-1.js
│   │   │   file-name-2.js
│   │   │   file-name-3.js
│   └───icons
│   │    |   sprite.svg
│   │    └───subdir
│   │        |   some-icon.svg
│   └───media
│   |    |   some-media.png/jpg
│   |    └───subdir
│   |        |   some-media.png/jpg
│   └───fonts
│   |    └───font-folder
│   |        |   some-font.woff/ttf
└───dist
    └───css
    └───js
    └───icons
```
