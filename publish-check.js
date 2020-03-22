// Load our local library's `package.json` file.
const { join } = require('path');
const libPackage = require(join(__dirname, 'libs', 'ng-refs', 'package.json'));

// This script compares a provided version to
// our local library package. We need to parse
// out the version from the provided arguments.
const compareToArg = process.argv
  .find(a => a.startsWith('--compareTo'))
  .substring(12);
if (!compareToArg) {
  throw new Error('Problem getting the compare to argument.')
}

// With our two versions as strings (e.g. "1.0.3")
// we need to prepare them for numerical comparison.
const localVersion = libPackage.version
  .split('.')
  .map(v => Number(v));
const repoVersion = compareToArg
  .split('.')
  .map(v => Number(v));

// With our versions as integers, compare the major,
// minor and patch values.
const needToPublish
   = localVersion[0] > repoVersion[0]
  || localVersion[1] > repoVersion[1]
  || localVersion[2] > repoVersion[2];

// With the above priority, if any comparison shows
// our local version is greater than the repo's, we
// print out "true" otherwise both sources are in
// sync and we print out their current version.
console.log(needToPublish || libPackage.version);
