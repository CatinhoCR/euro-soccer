# "Score Now" app developed for Eleven Systems job application's test
This app has been developed by Andrés Castillo ([(Email)](mailto:cato@castilloquesada.com)) as part of the job application process for Eleven Systems.

## Based and Modified from AngularJS Starter
Used a seed starter project for quick angularJS app setup, but heavily modified before starting to work. Some of the initial modifications include (but not limited to):
* Removed jQuery dependency and usage
* Development environments and API connection setup basic setup
* Changing/Updating/Removing some of the development dependencies such as Twitter Bootstrap, font awesome, etc.
* Changes to gulpfile and workflow.


[![Build Status](https://travis-ci.org/rjcarneiro/angularjs-starter.svg?branch=master)](https://travis-ci.org/rjcarneiro/angularjs-starter)

A complete out-of-the-box starter pack to develop web apps using [AngularJs](https://angularjs.org/) and [Bootstrap](http://getbootstrap.com/).

## How to use

In order to start just follow the steps:

<pre>
npm install
gulp serve
</pre>

## Deploy

It's very easy to deploy. On command line, just type `gulp build` and everything you need is created into `.\dist` folder.

## Project structure

- app
  - images
  - scripts
  - styles
  - views

## Build

In order to build the project, just need to run `gulp build` or even just `gulp`. It will create the files in `/dist/` folder.

### Run javascripts errors

To make sure your javascript code has quality we use [jslint](http://www.jslint.com/). To run the tool just type `gulp jslint` and you can see the output. Also [Team City](https://www.jetbrains.com/teamcity/) integration is already made.



## Used Libraries

- Twitter Bootstrap used under the MIT License <https://github.com/twbs/bootstrap/blob/master/LICENSE>
- AngularJs used under the MIT License <https://github.com/angular/angular.js/blob/master/LICENSE>
- angular-loading-bar used under the MIT License <https://github.com/chieffancypants/angular-loading-bar/blob/master/LICENSE>

## License

### The MIT License

Copyright (c) 2019 Andrés Castillo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.