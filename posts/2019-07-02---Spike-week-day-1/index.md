---
title: "Spike week day 1"
date: "2019-07-02"
layout: post
draft: false
path: "/posts/spike-week-day-1/"
category: "Development"
tags:
  - "Development"

description: "We are currently having one of our quarterly spike weeks on our team, and for once I am managing to protect my own time and do my own spike. To help me remember what I've learned, I plan on writing what I did each day. DAY 1"
---

We are currently having one of our quarterly spike weeks on our team, and for once I am managing to protect my own time and do my own spike. To help me remember what I've learned, I plan on writing what I did each day.

***
# Day 1

Our theme this time is infrastructure, and I've decided to automate my deployment pipeline. To do this I want to set up so that I can spin up new EC2 instances each time I deploy, and use AWS CodeDeploy to deploy to them. Currently I have a pipeline set up that sets off a build when I push to master in github, but I still need to ssh into my EC2 instance to pull down the build artifact from an S3 bucket. I wrote about how I initially set it up [here](http://eleanormollett.com/posts/What-I-learned-deploying), and it has moved on a little since.

My plan was to set up an EC2 template which would have all my current parameters like the AMI I am using, the security groups I have set up etc defined to make it easy to reproduce each time I launch a new instance. This part was very straightforward, it was simply a case of working through the options.

I started hitting issues when I went to configure it to install the CodeDeploy agent on start up. I was following the instructions in [the documentation](https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-ec2-create.html), but when I went in to check the CodeDeploy service was running, it wasn't. I went through a few times, checking the variables I was entering, trying out some variations I found in other tutorials. Nothing.

Next, I decided to launch an instance without the User Data instructions for launching the CodeDeploy agent and running them myself after the instance had launched. It worked.

Although this was incredibly frustrating, at least it reassured me that it should work.

These are the instructions I used from the documentation:

```
#!/bin/bash
apt-get -y update
apt-get -y install ruby
apt-get -y install wget
cd /home/ubuntu
wget https://aws-codedeploy-eu-west-2.s3.amazonaws.com/latest/install
chmod +x ./install
./install auto
```

You don't really get much indication about what is going wrong, so after several attempts to use the logs from the console which only occasionally showed me anything useful, I followed the instructions [here](https://aws.amazon.com/premiumsupport/knowledge-center/ec2-linux-log-user-data/) to give me some logging data, and added some console logs to help me orientate myself, leaving me with the following instructions in the User Data:

```
#!/bin/bash -xe
exec > >(tee /var/log/user-data.log|logger -t user-data -s 2>/dev/console) 2>&1
echo "FIRST HELLO"
apt-get -y update
echo "hello after update"
apt-get -y install ruby
echo "hello after installing ruby"
apt-get -y install wget
echo "hello after installing wget"
cd /home/ubuntu
wget https://aws-codedeploy-eu-west-2.s3.amazonaws.com/latest/install
echo "hello after getting the installer"
chmod +x ./install
./install auto
echo "hello at the end"
```

This narrowed down the issue to the step where we install ruby. It was at this point I remembered with sinking horror that there had in fact been a prompt when I had run through line my line myself where I had had to select yes to continue. I hadn't taken much notice of it at the time, assuming that the -y command would skip through all of those. A bit more googling led me to [this](https://unix.stackexchange.com/questions/146283/how-to-prevent-prompt-that-ask-to-restart-services-when-installing-libpq-dev) which is exactly what I had happily tabbed through when doing it by hand.

Thankfully, the suggestion to add ```DEBIAN_FRONTEND=noninteractive``` worked, giving me the following instructions to run on launch:

```
#!/bin/bash
export DEBIAN_FRONTEND=noninteractive
apt-get -y update
apt-get -y install ruby
apt-get -y install wget
cd /home/ubuntu
wget https://aws-codedeploy-eu-west-2.s3.amazonaws.com/latest/install
chmod +x ./install
./install auto
```

I have no idea why this isn't in the instructions AWS provides. Maybe it doesn't always run like that? Anyway, what I've learned today:
* find a way to read the logs asap if it isn't already there
* take more notice of what I'm doing differently when I run through something step by step
* everything seems so easy afterwards
