# March Sadness
## What Famous People in Sports Look Like
This project is based on The Dan Le Batard Show with Stugotz.
Not affiliated, just a fan.

## Specs / Installation
Requires Ruby, Rails, PostgreSQL db.
The app requires Ruby, Rails, and PostgreSQL if you clone the repo to run it locally.

First install gems:
```
$ bundle install
```
Make sure PostgreSQL is running, then enter each of these separately to get the database synced:
```
$ rake db:create
$ rake db:migrate
$ rake db:seed
```
Finally, start the rails server:
```
$ rails s
```
The site can then be viewed on your local host port 3000 (http://localhost:3000/).
