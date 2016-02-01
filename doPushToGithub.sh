#!/usr/bin/env bash

if [ -z "$1" ]
  then
    echo "No commit message supplied.  Rerun as:"
    echo
    echo "./doPushToGithub.sh \"my commit message\""
    exit
fi

jekyll build --source blog --destination blogpage --config blog/_config.yml,blog/_config.github.yml

git add --all
git commit -m "$1"
git push

jekyll build --source blog --destination blogpage --config blog/_config.yml,blog/_config.c9.yml
