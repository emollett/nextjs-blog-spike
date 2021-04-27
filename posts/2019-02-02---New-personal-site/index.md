---
title: Trying out gatsbyjs for a personal site
date: "2019-02-02"
layout: post
draft: false
path: "/posts/new-personal-site/"
category: "Blogging"
tags:
  - "Blog"
  - "Development"
description: "I've decided to create my own personal site, to keep my blog posts and personal projects together in one place. This is a bit of a meta post on what I've learned putting this together using gatsbyjs."
---

I have decided to set up my own personal site, which is a fork of the [lumen v2 gatsbyjs starter](https://www.gatsbyjs.org/starters/GatsbyCentral/gatsby-v2-starter-lumen/).

This gives me somewhere to keep my blog posts and my personal projects together, whilst giving me some practice with a technology new to me - gatsbyjs. I chose gatsby because I had heard several colleagues talking about it, and fancied giving it a go. I'm fairly surprised by how easily it has gone - I got as far as getting the starter I used personalised and deployed within a day, which included struggling with some build issues I had early on without my normal recourse to bothering developers at work for answers.

## Some bits I've learned so far:

As it turns out, the issues I had early on were because I am terrible at reading fully through documentation before jumping in, and I hadn't realised that if I change the graphql query in the gatsby-config file, you need to restart the development server before doing anything with it. This kept my builds failing for ages, and all kind of errors. However many times the developers I work with tell me I can fix anything by googling the error messages, I still usually give up too easily and ask them instead. Working on my own at the weekend, I couldn't rely on them, and have realised I really can fix anything by googling. for ages. over and over. I'm quite pleased I managed to work this one out myself even if it took me most of a day!

Initially I had been planning on adding a CMS for managing future blog posts. I read up plenty on netlify CMS, but then realised that I'm pretty happy using markdown, and the way the pages are set up is pretty simple so for now I'm happy doing it this way. I may come back to this in the future, and would definitely add one if I had collaborators. Another thing I looked into was importing the posts I had already written from medium - there is a plugin that pulls from medium, but it just provides an overview, and not the full post. It looks like there is also an rss feed plugin which might do the job, but I decided to migrate wholesale once I realised I was happy to write future posts from here.

Finally, I will never cease to be amazed how long I can think something is properly broken before realising some bit of punctuation is in the wrong place.
