#!/usr/bin/env bash

jekyll build --source blog_working_folder --destination public_html/blog

#Push to live website
lftp -e "mirror -R /home/ubuntu/workspace/public_html/ /ormskirkmusicsociety.org.uk && exit" -u $FTPUSER,$FTPPASS $FTPSITE