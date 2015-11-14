#ui5-playground

It is a boilerplate to quickly start experimenting and learning SAPUI5 / [OpenUI5](http://openui5.org/) with a gulp based simple server with livereload.

##Required

- NodeJs
- NPM
- Bower
- Gulp

##How to setup

Just clone this repo

```
git clone https://github.com/fareez-ahamed/ui5-playground
```

Install OpenUI5 using bower. Dependencies are already available in the bower.json file. Currently it pulls OpenUI5 1.32.5

```
bower install
```

Install NPM dependencies

```
npm install
```

Only for the first time, run `gulp copy`


Now everything is ready, run `gulp serve` and go to `http://localhost:8000` and see the output. Whenever you change anything in the `webapp` folder, it automatically reflects in the browser through livereload.