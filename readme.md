# lcc frontend toolkit [![Build Status](https://travis-ci.org/lccgov/lcc_frontend_toolkit.svg?branch=master)](https://travis-ci.org/lccgov/lcc_frontend_toolkit)
A collection of Sass and JavaScript files to be used by Leeds City Council frontend applications.

The toolkit contains our core SASS files that can be used on any of the LCC websites to give it the LCC-y look and feel. Because we’re using the same CSS, all the sites will look and feel  LCC-y from the get go. They’ll have similar font sizes, line heights, headers, and the like. We’ll make a few tweaks per site, but we’re most of the way there.  The lcc_frontend_toolkit is packaged into an NPM package and hosted on the [NPM registry](https://www.npmjs.com/~lccgov) for it to be imported into any LCC project. 

If an update to the lcc_frontend_toolkit NPM package is needed the following steps need to be carried out:

1. Update the particular SASS/JS file.
2. Bump the version number in the [VERSION.txt file](https://github.com/lccgov/lcc_frontend_toolkit/blob/master/VERSION.txt) – we use [semantic versioning](http://semver.org/).  NOTE: If this step is omitted, then when you commit and push your changes it will not generate a new NPM package.  Helpful when you are not ready to publish a new package but want to make sure your changes are source controlled.
3. Commit changes and push to remote repository.
4. Once pushed, a [Travis CI build](https://travis-ci.org/lccgov/lcc_frontend_toolkit) is kicked off that checks to see if the version has been bumped and if so creates a [new release](https://github.com/lccgov/lcc_frontend_toolkit/releases) on GitHub.  If a new release is created then it kicks off another [Travis CI build](https://travis-ci.org/lccgov/lcc_sharepoint_toolkit_npm), which removes all development artefacts such as gulpfiles, specs, readmes  and then pushes to the lcc_frontend_toolkit_npm repository before publishing a new [NPM package](https://www.npmjs.com/package/lcc_frontend_toolkit).
