---
title: "Spike week day 3"
date: "2019-07-04"
layout: post
draft: false
path: "/posts/spike-week-day-3/"
category: "Development"
tags:
  - "Development"

description: "We are currently having one of our quarterly spike weeks on our team, and for once I am managing to protect my own time and do my own spike. To help me remember what I've learned, I plan on writing what I did each day. DAY 3"
---

We are currently having one of our quarterly spike weeks on our team, and for once I am managing to protect my own time and do my own spike. To help me remember what I've learned, I plan on writing what I did each day.

After yesterday's disaster I wasn't sure about writing anything today as I haven't really got much further in terms of outputs. I have learned things though, so in the interest of sharing that here is what I was up to today and learned

***
# DAY 3

Having managed to get the codedeploy agent installed on Tuesday, I spent yesterday failing to deploy anything. It took the whole day to realise I was missing the appspec file from my application, so I did actually learn something yesterday was but was too frustrated to recognise it.

Today I set to adding an example appspec file to a very basic application and trying to deploy it.

I continued to get the incredibly useful error message:

> “The overall deployment failed because too many individual instances failed deployment, too few healthy instances are available for deployment, or some instances in your deployment group are experiencing problems.”

However, after some googling I've found where I can find more useful logs in my EC2 instance, and this is my learning for today. These are the logs I've found useful:

`/var/log/aws/codedeploy-agent/codedeploy-agent.log`
Gave me an initial reassurance that the agent was running and doing something, also that I had an issue with my appspec file

`/opt/codedeploy-agent/deployment-root/deployment-logs/codedeploy-agent-deployments.log`
These are the logs for the deployments themselves and at what stage they failed

`/opt/codedeploy-agent/deployment-root/deployment-group-ID/`
Looking in here I could see my deployments by deployment ID, confirming that the codedeploy agent was getting somewhere, and I could see that my files had copied across ok.

`/opt/codedeploy-agent/deployment-root/deployment-group-ID/deployment-ID/logs/scripts.log`
In each deployment, you can also get logs for the scripts you are running, which gives you a good idea of which one is failing.

These have helped me identify that codedeploy is at least fetching my files from github and sticking them on the EC2 instance. It is also now able to recognise the appspec file (after a false start with a misspelled file extension 😶). Currently, it is failing with the predeploy script, but I feel much better than yesterday as I can at least see where things are going wrong.

Roll on the final day!
