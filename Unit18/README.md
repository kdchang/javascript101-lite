# 單元18 實戰範例：部屬應用程式到 Heroku 雲端伺服器

Install the Heroku CLI

Download and install the Heroku CLI.

If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.

$ heroku login
Create a new Git repository

Initialize a git repository in a new or existing directory

$ cd my-project/
$ git init
$ heroku git:remote -a irich
Deploy your application

Commit your code to the repository and deploy it to Heroku using Git.

$ git add .
$ git commit -am "make it better"
$ git push heroku master
Existing Git repository

For existing repositories, simply add the heroku remote

$ heroku git:remote -a irich


[sequelizejs heroku](http://docs.sequelizejs.com/en/1.7.0/articles/heroku/)