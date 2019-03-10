#!/bin/bash

var=`ps axuw|grep node |grep -v grep| awk '{print $2}'`
echo "need to kill the following processes $var"

for pid in $var
do
  echo "$pid is being killed"
  kill -9 $pid
done

echo "sanity checking..."

var=`ps axuw|grep node |grep -v grep| awk '{print $2}'`

if [ -z $var ]; then
        echo "ok.."
else
        echo $var
fi

echo "installing dependencies......"
npm install

echo "starting web service......"
nohup npm start &

echo "checking web service......"
ps auwx|grep node|grep -v grep| awk '{print $2}'


