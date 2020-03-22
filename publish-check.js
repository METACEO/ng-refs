// Load our local library's `package.json` file.
const { join } = require('path');
const { version } = require(join(__dirname, 'libs', 'ng-refs', 'package.json'));

// This script compares a provided version to
// our local library package. We need to parse
// out the version from the provided arguments.
const compareToArg = process.argv
  .find(a => a.startsWith('--compareTo'))
  .substring(12);
if (!compareToArg) {
  throw new Error('Problem getting the compare to argument.')
}

// If comparison shows that our local version is greater than
// the repo's, we print out "true" otherwise both sources are
// in sync and we print out their current version.
const semverGreaterThan = require('semver/functions/gt');
const needToPublish = semverGreaterThan(version, compareToArg);
if (needToPublish) {
  console.log(true);
} else {
  console.log(version)
}
