---
title: "Spike week day 4"
date: "2019-07-05"
layout: post
draft: false
path: "/posts/spike-week-day-4/"
category: "Development"
tags:
  - "Development"

description: "We are currently having one of our quarterly spike weeks on our team, and for once I am managing to protect my own time and do my own spike. To help me remember what I've learned, I plan on writing what I did each day. DAY 4"
---

We are currently having one of our quarterly spike weeks on our team, and for once I am managing to protect my own time and do my own spike. To help me remember what I've learned, I plan on writing what I did each day.

Much better day today, things worked!!

***
#DAY 4

I left yesterday knowing the CodeDeploy was deploying my files to my EC2 instance, but that the deployments were still failing to then follow the appspec instructions. I had been following [these instructions](https://crypt.codemancers.com/posts/2016-12-26-autodeploy-from-github-using-aws-codedeploy/) and using their examples of the appspec file and the before and after install hooks.

With fresher eyes, it didn't take too long to notice that the issues I was having were due to using a .sh file extension on the hooks where the example wasn't, and not updating the location, and also not noticing that the location and the name of the after install hook in the examples differ. Correcting these fixed all the issues I was having. My final appspec file and hooks can be seen [here for the appspec](https://github.com/emollett/meeting-value/blob/master/appspec.yml) and [here for the hooks](https://github.com/emollett/meeting-value/tree/master/scripts).

Now that I was able to deploy simple pages, I wanted to give it a go with a more complex deployment - a MERN stack app I've been working on.

I really struggled with the file paths for this one, it is a more complex application structure, with some oddities due to how I set it up (which I really should refactor). If you [look at my commits](https://github.com/emollett/coffee-tracker/issues/26), you can see how many changes I made to file paths!

Once I finally got that all working, the deployments were working all fine - when I push to github, it now kicks off a build and deploys it without me having to intervene. Next up is scripting the set up of the environment, as despite setting up a template for the environment, I came across quite a lot that I had to install or config that I had to change by hand which I want to have in code (this also highlighted my lax documentation as there was a fair bit that I had forgotten that needed installing, which I also need to improve).
