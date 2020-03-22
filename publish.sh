#!/bin/bash
set -e

# Prepare our artifacts.
bash ./build.sh

# If we are ahead of our registry, then
# work to publish our above artifacts.
npmVersion=$(npm view ng-refs version)
needToPublish=$(node ./publish-check.js --compareTo=$npmVersion)
if [ $needToPublish = "true" ]; then

  echo Replace the default README file
  cp ./README.md ./dist/libs/ng-refs

  echo Publish to NPM
  (
    cd ./dist/libs/ng-refs
    npm publish
  )

else

  echo Not publishing:
  echo npm version === $npmVersion
  echo local version === $needToPublish

fi
