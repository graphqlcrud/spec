git checkout gh-pages && 
git reset --hard origin/master && 
rm README.md && 
npm run build &&
git add --all &&
git commit -a -m"gh-pages update" && 
git push origin +gh-pages