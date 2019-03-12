#!/bin/bash

echo "installing dependencies......"
npm install

echo "starting web service......"
nohup npm start &

echo "checking web service......"
ps auwx|grep node|grep -v grep| awk '{print $2}'


