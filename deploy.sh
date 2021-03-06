#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain
echo 'www.matthewsenick.com' > CNAME
git init
git add .
git commit -m 'deploy'
git push -f git@github.com:Matts52/matts52.github.io.git main:gh-pages
cd -