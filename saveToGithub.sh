#!/usr/bin/env bash

echo "ddollar 1 is $1"

if [ -z "$1" ]
  then
    echo "No commit message supplied.  Rerun as:"
    echo
    echo "./saveToGitHub.sh \"my commit message\""
    exit
fi

git add --all
git commit -m "$1"
git push


