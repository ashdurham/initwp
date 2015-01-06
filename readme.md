Init WP
============

A Wordpress development starter using composer

## Getting started

1. Clone this repo to your project folder
2. Modify the composer.json file to meet your requirements for the particular project (ie add/remove plugins, change the theme, etc)
 - You can find plugin paths and versions on http://wpackagist.org/ however as a general rule, it uses the same naming convention as what is on Wordpress and we should always use "dev-trunk" to get latest version.
3. Run "composer install" in the folder.
4. Once complete, delete all but the "wp" folder from the root of the project (including the ".git" folder), move the contents of the "wp" folder into the root of the project and delete the empty "wp" folder.
5. Run through all the files in the "root" folder of the "custom" theme. This, at a minimum, should include the ".htaccess" and "wp-config.php" files.
6. "git init" the project and commit project to repo.

That's it! Enjoy :)