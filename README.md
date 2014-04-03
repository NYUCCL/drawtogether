drawtogether
============

a psiturk-compatible experiment based on the drawtogther crowdsource program by @dmarkant

developed with psiturk version 1.0.10dev

How to use
----------

Breifly, assuming you have psiturk installed, working, have the AWS credentials and an
account on psiturk.org.

**Get the repo**  

1. `git clone git@github.com:NYUCCL/drawtogether.git`  

**Make it yours**  

1. `cd drawtogether` - change to the project folder  
1. edit `config.txt` to your liking (particular setting `host` to 0.0.0.0 if you plan to run on the public internet, also fill in the `contact_email_on_error`, your university/organization name, etc...) 
1. replace `static/images/university.png` with a logo reflecting your university/organization
1. edit the `templates/ad.html` file to reflect your university/organization and the amount you plan to pay for drawings  
1. edit the `templates/consent.html` if you want to use it (you may be able to skip if just playing around... just change  `templates/ad.html` so that the `/exp` route is chose when you click begin instead of `/consent`)  
1. edit the `templates/stage.html` to tell users what you'd like them to draw (currently prompts an "alien")  

**Test your code**  

1. `psiturk` - launch psiturk  
1. `[psiTurk server:off mode:sdbx #HITs:0]$ server on` - start server  
1. `[psiTurk server:on mode:sdbx #HITs:0]$ debug` - test it locally  (will pop open a browser stepping you through)
1. `[psiTurk server:on mode:sdbx #HITs:0]$ create hit` - to create the hit on the AMT sandbox
1. Test the experiment by finding your listing on the Amazon sanbox

**Run live**  

1. If all is going well and looks how you expect, `[psiTurk server:on mode:sdbx #HITs:0]$ mode` - to switch to "live" mode  
1. `[psiTurk server:on mode:live #HITs:0]$ create hit` - to create the hit on the live server  
1. `[psiTurk server:on mode:live #HITs:0]$ hit list active` - to monitor the progress
1. `[psiTurk server:on mode:live #HITs:0]$ worker approve --hit <yourhitid>` - to approve and pay everyone who has finished


In other words, it works basically identically to the default “stroop” example that ships with **psiTurk**.
See the main [psiturk docs](http://psiturk.readthedocs.org/en/latest/) if you don't feel you know
what you are doing.

**The Gallery**  

This project has one extra feature which is not in the standard stroop.  It provides a 
custom URL (via custom.py) that lets you view the results of the “experiment”.  To access this 
you just point your browser at your local server with /gallery as the url.  For example, “http://mylaptop.myuniversity.edu:22362/gallery” It’ll prompt you for a username and password 
which are set by the `login_username` and `login_pw` fields of the `config.txt` file.


Example Result from the `/gallery` page:

<img src="https://raw.githubusercontent.com/NYUCCL/drawtogether/master/static/images/example.png">
