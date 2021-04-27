---
title: "Types of work on our kanban board"
date: "2017-07-20"
layout: post
draft: false
path: "/posts/types-of-work/"
category: "Delivery"
tags:
  - "Delivery"
  - "Agile"
  - "Kanban"
  - "Development"
description: "One of the things that often gets discussed during our daily team stand up is whether a piece of work should be on our kanban board, and whether the work on the board accurately reflects what the team is working on. To get the most out of kanban, we should be reflecting all the work the team is doing on the board so that we can ensure that the work in progress limits are having the right impact, and improving the flow of delivery."
---

One of the things that often gets discussed during our daily team stand up is whether a piece of work should be on our kanban board, and whether the work on the board accurately reflects what the team is working on. To get the most out of kanban, we should be reflecting all the work the team is doing on the board so that we can ensure that the work in progress limits are having the right impact, and improving the flow of delivery. I’ve been reflecting on this recently by comparing it to the types of work discussed in “The Phoenix Project” by Gene Kim, and looking at how we reflect each of the different types of work. There are 4 types of work in the book, business projects, internal projects/IT operational projects, change and maintenance, and unplanned work.

## Business Projects

These are our most obvious pieces of work, generally new features or functionality for our service. Because these are pre planned and scoped, work on these projects almost always makes it to the board. Sometimes we do find that people are working on bits of business projects without it being on the board. This tends to be analysis work prior to really getting started on the card, or because a card on the board is actually too vague and extra work is being lumped under it. The benefit of reducing work in progress has reduced the amount of analysis happening in advance. We are trying to get better at querying cards that look a bit big, and being proactive about breaking them down so that the work is correctly reflected. Generally though, this work is well visualised and tracked.

## Internal projects/IT operations projects

These are the technical features required to enable the service to work such as infrastructure and security. Initially this was fairly badly visualised, with the developers having a good idea of what was needed and what they were working on, but this was not reflected on the board. This meant that we had little idea of what extra work was going on, leading to other pieces of work taking longer than expected. Part of the reason these pieces of work weren’t making it to the wall is that the product owner prioritises the cards based on user need. The tech work required often gets missed as it and its importance is not always understood by the product owner and delivery manager. To improve this we have ring fenced at least 20% of the priority backlog (the next 10 cards we will work on) to work from the tech backlog. The tech backlog is prioritised by the developers and technical architect, who select the work to go on the priority backlog as they understand best what the priority of this work is.

![Tech backlog](/techbacklog.jpg "Tech backlog")
*Diagram showing how we prioritise our tech backlog*

## Change and maintenance

Changes and maintenance are the third type of work. It is easy for these to end up getting worked on ahead of new functionality depending on the person asking for the change, and on the perceived size of the change. It is easy to get side-tracked working on lots of bits of “oh, it will only take a few minutes, could you just change this wording/routing” from important stakeholders. We have generally been good about making sure these get properly added to the backlog and prioritised against new functionality rather than just picked up as we receive the request. This includes both obvious changes to the service which get added to the main backlog, and changes to the backend which get added to the tech backlog.

## Unplanned work

The last type of work is unplanned work. These are the things that you suddenly realise you need to do and haven’t planned for. Given we are doing fairly well now at visualising and prioritising our other work, it is this kind of work that is most likely to throw off the team and lead to planned work taking much longer than expected. The types of things that end up here are live service issues that require immediate attention. These are reduced by assigning enough time to preventative maintenance to ensure that we are not building up technical debt. They are also reduced by properly prioritising change requests, and communicating these priorities back to stakeholders to manage any “I want it and I want it now” types of change requests. Being able to point to the other work that is prioritised ahead of the request, and ask which ones are less important is very helpful!

***

Generally I think PYCA are doing well at visualising the 4 types of work from “The Phoenix Project”. The work that I think we miss is the project overhead work that people like the product owner and delivery manager works on. I generally don’t feel that the kanban board is the right place for this work, but it is good to keep an eye on it. At the moment we have a separate board for this work, but it is something that we continue to work on.
