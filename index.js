import React from 'react';

const antd = {
  Button: require('./components/Button'),
};

antd.version = require('./package.json').version;

const ReactVersion = React.version;
if (process.env.NODE_ENV !== 'production') {
  const warning = require('warning');
  const semver = require('semver');
  const reactVersionInDeps = require('./package.json').devDependencies.react;
  warning(semver.satisfies(ReactVersion, reactVersionInDeps) || semver.gtr(ReactVersion, reactVersionInDeps),
    `antd@${antd.version} need react@${reactVersionInDeps} or higher, which is react@${ReactVersion} now.`);
}

module.exports = antd;
