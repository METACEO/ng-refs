#!/bin/bash
set -e

echo Download dependencies
yarn

echo Prove out quality
yarn lint
yarn affected:test
yarn affected:e2e --headless

echo Build our library
yarn build ng-refs --prod
