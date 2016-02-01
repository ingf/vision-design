import React from 'react';

const vision = {
  Button: require('./components/vu-button'),
};

vision.version = require('./package.json').version;

const ReactVersion = React.version;
if (process.env.NODE_ENV !== 'production') {
  const warning = require('warning');
  const semver = require('semver');
  const reactVersionInDeps = require('./package.json').devDependencies.react;
  warning(semver.satisfies(ReactVersion, reactVersionInDeps) || semver.gtr(ReactVersion, reactVersionInDeps),
    `vision@${vision.version} need react@${reactVersionInDeps} or higher, which is react@${ReactVersion} now.`);
}

module.exports = vision;
