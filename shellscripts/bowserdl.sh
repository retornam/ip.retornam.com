#!/usr/bin/env bash

set -euo pipefail

BOWSER_VERSION=${1:-2.1.0}

curl -L -o bowser.js \
     https://cdn.jsdelivr.net/npm/bowser@${BOWSER_VERSION}/es5.min.js

mv ./bowser.js ../js/
