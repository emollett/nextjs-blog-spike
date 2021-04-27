---
title: "What I learned deploying my own react app"
date: "2019-01-18"
layout: post
draft: false
path: "/posts/what-i-learned-deploying/"
category: "Development"
tags:
  - "Development"
  - "Delivery"

description: "Recently I built my own react app to learn more about react and get in some coding practice. I am a delivery manager and don’t often get the chance to code day to day, so have set it as my learning and development objective. Once I had it written, I decided that learning to deploy something would be a good next step, as before I have just used github pages. A while ago a colleague recommended to me that when I was learning something new I write a blog post about it. It would help me remember and think through what I did, ensure that I fully understood what I had learned, and might help someone else trying to do the same thing."
---

Recently I built my own react app to learn more about react and get in some coding practice. I am a delivery manager and don’t often get the chance to code day to day, so have set it as my learning and development objective. Once I had it written, I decided that learning to deploy something would be a good next step, as before I have just used github pages. A while ago a colleague recommended to me that when I was learning something new I write a blog post about it. It would help me remember and think through what I did, ensure that I fully understood what I had learned, and might help someone else trying to do the same thing. So this is that blog post.

***

I initially followed [this tutorial](https://medium.com/@rksmith369/how-to-deploy-mern-stack-app-on-aws-ec2-with-ssl-nginx-the-right-way-e76c1a8cd6c6)

I’m not going to rewrite the tutorial with the bits I did changed, as it is a good tutorial — I am going to go through what I learned from the process, and what I ended up doing differently. The main aim for me was to understand what is going on, which a lot of tutorials don’t go in to — they just want to get you to the end. I’ve included links to all the things I read when trying to understand what I was doing.

I wanted to use an [EC2 instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html) as I have been trying to learn more about AWS, and felt working through an example would help me understand it better than just reading. This turned out to be the case, because although I had a conceptual idea of what an EC2 instance was, it wasn’t until I had [SSHed](http://blog.robertelder.org/what-is-ssh/) into my instance and started installing things that it twigged that I was doing the same thing in a virtual computer as I did when I was running my app running locally. Setting up the instance I found very straightforward.

The next steps were where I found myself diverging from the tutorial. I wanted to go very basic to start with so that I could follow what I was doing. Initially I just installed node and mongo, and didn’t follow the parts for nginx as I hadn’t used it before when running locally.

I also had to modify the npm install steps from the tutorial, as my app was set up with a different structure. This also meant that the line added right at the beginning of the tutorial for finding the build folder wasn’t quite right (rather than pointing it to client/build, I moved the build folder to the same place as the server.js file). The first time I tried to just run through the tutorial as written, this tripped me up and is why I decided to go back, strip out the bits I didn’t need/understand, and then add more complexity once I had the basics working.

To set up mongo, I followed the [documentation here](https://docs.mongodb.com/master/tutorial/install-mongodb-on-ubuntu/?_ga=2.20588734.728762050.1508255237-190824932.1508255237#install-mongodb-community-edition)

To check it all worked, I then got my page running by manually doing the build step, transferring the build folder to where I wanted it, then running node server.js — once I was happy with this I set up a [shell script](https://en.wikipedia.org/wiki/Shell_script) to do all the steps for me. These are the steps I used and why:

```
git pull origin master; #to ensure the code I have is up to date
rm -rf coffee-tracker-backend/build; #removes any existing build folder from the backend directory
cd coffee-tracker-frontend;
npm install; # install in case any new front end deps have been included since last install
npm run build; #builds the frontend
cd ..;
cp -R coffee-tracker-frontend/build/ coffee-tracker-backend; #copies the build folder to the backend directory
cd coffee-tracker-backend;
npm install; # install in case any new back end deps have been included since last install
sudo node server; #starts up the backend
```

This is all run from the main directory and sets off everything I was doing before.

This didn’t all go quite as smoothly as I have made out — I had a couple of issues with ports and the websockets I am using. With the ports, locally I had been running the front end on 3000, and the backend on 3001. I moved to using one port, but then had issues with my local firewall so ended up just using port 80. I then noticed that my sockets weren’t working, but found [this answer which worked]( https://stackoverflow.com/questions/50411954/socket-io-connection-working-fine-in-localhost-but-not-when-deploying-on-heroku) — I have learned since that because http defaults to port 80, I only needed to specify the port for sockets.io when it was different.

Finally, I had not realised that when I exited out of my EC2 instance, the whole thing would stop. To fix this, I used the process manager mentioned in the original tutorial, [http://pm2.keymetrics.io/](http://pm2.keymetrics.io/) . This was much more simple than I expected to set up, and I switched the last step of my shell script to pm2 start server from node server.

***

Generally, on reflection, this was much easier than I had expected. I had built up deploying something myself to be really complicated, and I hadn’t realised that it was pretty much the same as running things locally, and that automating a bunch of steps was as straightforward as using a shell script.
