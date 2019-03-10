# Deployment note

## devepment

`sudo npm run build`

`sudo npm run dev`

## deployment

`sh deploy.sh`

`cd dist`

`nohup npm start  &`

When we build it, there is a dist dir in local, when we deploy.sh it, it will copy the dist/ to the remote server,
then in the dist/ we install the libs, and then `npm start` as it will have all the compiled good files.

https://codeburst.io/how-to-minify-your-static-site-d90565c9aa21
ramraf

## others

please use and commit .gitignore file which is very convinient for eclipse git to see what to stage

```
#ignore the file under /dist
/dist
/node_modules
.babelrc
nohup.out
```