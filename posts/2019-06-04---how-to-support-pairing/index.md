---
title: How to support pairing
date: "2019-06-04"
layout: post
draft: false
path: "/posts/how-to-support-pairing/"
category: "Delivery"
tags:
  - "Delivery"
  - "Product Management"
  - "Development"
  - "Agile"
description: "This post is about how delivery managers (and product managers) can encourage and supporting pairing. It has come up a few times in discussions I’ve had about good practice on delivery teams, and there still seems to be reluctance to champion it, or even embrace it. Sometimes this comes from the delivery manager themselves, but more often from a general feeling that their organisation won't accept it. I’ve had on one occasion a delivery manager tell me that pairing is something that can’t be done in government. With a better understanding of how to support pairing, delivery managers might feel more confident in advocating for their team."
---

This post is about how delivery managers (and product managers) can encourage and supporting pairing. It has come up a few times in discussions I’ve had about good practice on delivery teams, and there still seems to be reluctance to champion it, or even embrace it. Sometimes this comes from the delivery manager themselves, but more often from a general feeling that their organisation won't accept it. I’ve had on one occasion a delivery manager tell me that pairing is something that can’t be done in government. With a better understanding of how to support pairing, delivery managers might feel more confident in advocating for their team. At the end of the day advocating for best practice and working to ensure teams have the space and support to do this is what our jobs as delivery managers are about.

Put simply, pairing is about two (or more!) developers working together on the same piece of code at the same time. It can take several forms, but often one will write the code whilst the other reviews what they are writing as they write it. They should regularly switch who is taking which role.

![Two developers pairing](/pairing.png "Two developers pairing")
*Two developers pairing*

There are several benefits to pairing in software development. You increase code quality due to the extra pair of eyes, and because you put in more thought if you are having to explain what you are doing as you go along. Pairing can also help on teams where you are getting people up to speed with a code base. It can also help reduce the “bus factor” problem, where either entire codebases or specific bits of functionality are only understood by one developer, leading to major issues when they leave your team.

As well as the benefits to the code you are delivering, there are benefits to your team. Pairing helps developers learn and share techniques, as people won’t all have the same approach to tackling problems. Considering and discussing several approaches rather than jumping straight in with the first approach can also improve quality. Pairing can also help strengthen teams, particularly if people tend to work independently.

As a delivery manager there are several things you can be doing to encourage and support pairing on your team. The first is to actively discuss it with your team, and make it clear that it is something that you support. This is particularly important if you are working in an environment where people feel high pressure to churn through work. In this case they may not feel comfortable instigating pairing themselves.

Lowering work in progress limits can also help, if supported by a message that you expect the lower limit to be achieved by people pairing. It can encourage a discussion each stand up where developers who can’t pick up a new card due to the work in progress limit can ask who is open to pairing.

Once pairing is common on your teams, there are several things you can encourage. Keep an eye on whether people are varying who they pair with, to keep the benefit of exposure to different ways of working. If there is a big variation in seniority, make sure the more senior developer isn’t always taking the lead, and that the less senior developer feels supported.

For all its benefits, pairing is very tiring for many people. Don’t get over enthusiastic about encouraging it all the time, as people do need a break. At the end of the day, you are there to support and encourage, but not control the process – provide what the developers need to organise themselves. Check in regularly about how it is going, and revisit it in retrospectives.

There are also practical ways to support pairing. If you don’t have the space at your workstations, and dual monitors, that is going to make pairing much harder. Some people have an extra set of keyboards and mice, make this possible if it is what your developers are asking for. If your team is remote, there are options around for remote pairing – my team have used the tools in VS code, which seem to work pretty well for them.

Another blocker to pairing can be organisational metrics. If you track time people are working on things, if only one person is attributed to a card, or if you track commits, and these metrics have an impact on people, they will be discouraged from doing anything that might impact these. The obvious answer here is that you absolutely should not be using metrics like these. This is probably another blog post, but metrics like these are being used push back against them.

Finally, once your team is pairing, keep expanding it! Mobbing can be a way for the entire team to tackle a tricky problem. Start encouraging pairing between different disciplines, not just developers. We have had some really good success pairing developers with user researchers particularly with accessibility research, with designers to better understand what is possible, and with testers on improving automation.
