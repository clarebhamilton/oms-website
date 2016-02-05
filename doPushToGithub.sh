#!/usr/bin/env bash

if [ -z "$1" ]
  then
    echo "No commit message supplied.  Rerun as:"
    echo
    echo "./doPushToGithub.sh \"my commit message\""
    exit
fi

jekyll build --source blog_working_folder --destination public_html/blog --config blog_working_folder/_config.yml,blog_working_folder/_config.github.yml

git add --all
git commit -m "$1"
git push

jekyll build --source blog_working_folder --destination public_html/blog --config blog_working_folder/_config.yml,blog_working_folder/_config.c9.yml
