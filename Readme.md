# Deployment note

## devepment

Run `sudo npm run dev`

## deployment

### clean deployment

`cd dist`

run `kill.sh`

then run `deploy.sh`

https://codeburst.io/how-to-minify-your-static-site-d90565c9aa21
ramraf

### quick deploy
in local, just run deploy.sh and type password

## others

please use and commit .gitignore file which is very convinient for eclipse git to see what to stage

```
#ignore the file under /dist
/dist
/node_modules
.babelrc
nohup.out
```