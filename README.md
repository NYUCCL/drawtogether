drawtogether
============

a psiturk-compatible experiment based on the drawtogther crowdsource program by @dmarkant

developed with psiturk version 1.0.10dev

How to use
----------

Breifly, assuming you have psiturk installed, working, have the AWS credentials and an
account on psiturk.org.

1. `git clone git@github.com:NYUCCL/drawtogether.git`  
1. `cd drawtogether` - change to the project folder  
1. edit `config.txt` to your liking (particular setting host to 0.0.0.0 if you plan to run on the public internet, also fill in the contact email in case of error, your university/lab name, etc...) 
1. replace `static/images/university.png` with a logo reflecting your university
1. edit the `templates/ad.html` file to reflect your university and the amount you plan to pay for drawings  
1. edit the `templates/consent.html` if you want to use it (you may be able to skip if just playing around)  
1. edit the `templates/stage.html` to tell users what you'd like them to draw (currently prompts an "alien")  
1. `psiturk` - launch psiturk  
1. `[psiTurk server:off mode:sdbx #HITs:0]$ server on` - start server  
1. `[psiTurk server:on mode:sdbx #HITs:0]$ debug` - test it locally  
1. `[psiTurk server:on mode:sdbx #HITs:0]$ create hit` - to create the hit on the sandbox  
1. later if all is going well, `[psiTurk server:on mode:sdbx #HITs:0]$ mode` - to switch to "live" mode  
1. `[psiTurk server:on mode:live #HITs:0]$ create hit` - to create the hit on the live server  


In other words, it works basically identically to the default “stroop” example that ships with **psiTurk** although has one extra feature which is that it provide a custom URL (via custom.py) that lets you view
the results of the “experiment”.  To access this you just point your browser at your local
server with /gallery as the url.  For example, “http://mylaptop.myuniversity.edu:22362/gallery”
It’ll prompt you for a username and password which are set by the `login_username` and
`login_pw` fields of the `config.txt` file.

The details of assigning payment to people after the experiment is finished is beyond the scope of this guide!  See the main [psiturk docs](http://psiturk.readthedocs.org/en/latest/)
