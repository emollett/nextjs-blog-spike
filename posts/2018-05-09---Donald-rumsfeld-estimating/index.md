---
title: "Donald Rumsfeld estimating"
date: "2018-05-09"
layout: post
draft: false
path: "/posts/donald-rumsfeld-estimating/"
category: "Delivery"
tags:
  - "Delivery"
  - "Agile"
  - "Kanban"
  - "Estimates"
  - "Development"
description: "For a long time, I have avoided estimation. I’ve generally found that story count and cycle time has served me well enough if I do need to provide forecasts, and I have only provided ‘how long might this particular feature take’ forecasts, rather than “when will I get all of this” forecasts of large numbers of features."
---

For a long time, I have avoided estimation. I’ve generally found that story count and cycle time has served me well enough if I do need to provide forecasts, and I have only provided ‘how long might this particular feature take’ forecasts, rather than “when will I get all of this” forecasts of large numbers of features.

In my current work, I have a relatively well defined core set of needs that we want to meet for initial rounds of testing, and I want to have an idea of when the features will be ready so that we can plan in testing participants. This has given me reason to put some estimates to the work we are doing. I also needed to provide a rough date rather than a length of time for a single feature, so needed a consistent method to apply to all the stories that made up the core set of features.

##The usual method of estimating after enough analysis has been done to understand the card in detail doesn’t sit right with me.

The analysis and design are still work that need to be done, which have an impact on how long it takes to deliver. It doesn’t make sense to me to ignore this when providing estimates. The analysis and design take up most of the time for delivery, so just estimating development and test effort isn’t much use to me.

I don’t want to do all the analysis and design up front, so it makes sense to provide estimates for all the work. This means my previous method of using story count wasn’t suitable as the stories were in a very early stage (pre analysis), and so highly variable in how well defined they are. By the time the cards are ready for development they have generally been broken down small enough to use story count, if an estimate was needed for that stage.

If I estimate, I want to estimate early before any analysis and design work has started. Another benefit of this is that it helps the team understand where our really complex areas are, and where we have a lot of knowledge gaps. This can prompt us to do more research or testing in those areas if needed, or [do some concept designs earlier on to work out some ideas](/posts/balancing-long-term-vision).

##I don’t want to spend lots of time estimating.

I don’t get enough value out of estimating to spend lots of time doing it and discussing sizes. Normally the value in estimating is the conversation and building team knowledge of the requirement anyway, but as I want to estimate prior to analysis and we have robust 3 amigos sessions later on this loses value.

I also don’t want the team getting side tracked during estimation, and coming up with solutions before we even get started.

##I don’t want to think about days of work — only complexity.

Obviously this is what we are meant to do with estimates, but I don’t think I’ve ever sat in a session which hasn’t occasionally devolved into adding up days of work to come up with estimates. Given we will be estimating the full work from analysis to done, this isn’t sensible — the uncertainty over time in days is possibly even worse for analysis and design work.

Knowing to the day the size of each card isn’t what I’m trying to get at anyway — I still believe over time the story points even out, I just want them to be slightly scaled by complexity given how much variation there is in how much we know about cards at this stage.

##So how am I going to estimate in a super speedy way that only looks at complexity very early on?

**Donald Rumsfeld estimating** — is the piece of work a known known, a known unknown, or an unknown unknown?

Based on the [Johari window](https://en.wikipedia.org/wiki/Johari_window), which [Donald Rumsfeld used to describe](https://en.wikipedia.org/wiki/There_are_known_knowns) the difference between things you don’t know, and things that you don’t know you don’t know.

![Donald Rumsfeld with assorted sized dogs and T shirts](/images/donaldrumsfeld.png "Donald Rumsfeld with assorted sized dogs and T shirts")
*Donald Rumsfeld with assorted sized dogs and T shirts*

In the context of estimating work required to deliver value -

* **Known known** — we know well what we want to do, there isn’t much analysis or design to do (maybe we are very happy with something from our prototype), and the developers know how they want to tackle it.

* **Known unknown** — we still have some questions. Maybe there is a bit more analysis around how people use something, or the designers want to tweak something in response to earlier feedback, or the developers aren’t quite sure how to implement the feature. Basically though, we know what questions we need to ask before we are able to deliver.

* **Unknown unknown** — we know something is needed, but not much more than that. We might not even be entirely certain it is needed. The developers have a lot of questions about what needs to be done. **As soon as people start discussing what a card means or start debating what is needed we give it this estimate.**


##Points points points.

To be useful for estimating when we can book in our test participants, I need some points. At this stage, you could use Fibonacci or whatever your favourite numbers are. I like to use a 2 power series, with 4 for known known, 8 for known unknown, and 16 for unknown unknowns just because it goes up faster than the Fibonacci sequence.

Once I have these, it will take at least a month to start getting enough points delivered to make any sensible kind of forecast. I’ve found it has taken about 2 months to get to a stage where the forecast isn’t fluctuating highly due to not enough data points. Right now it is remaining fairly consistent, and the measures of complexity do seem to be lining up with how long those features take to deliver.
