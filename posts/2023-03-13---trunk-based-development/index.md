---
title: "Getting used to trunk based development"
date: "2023-03-13"
layout: post
draft: false
path: "/posts/trunk-based-development/"
category: "Development"
tags:
  - "Development"

description: "My experiences moving from branch based development to trunk based development"
---

When I started at my current job one of the things I was excited about was the chance to use trunk based development. I had wanted to see it in use on a larger project for a while, as most of my previous experience was with branch based development.

## A quick description of how I worked before and how I work now. 

On my previous teams, we would create a new branch when starting work on a new feature. I would try to commit to this branch pretty regularly, generally when I had something working/a test passing, or if I needed to hand over to someone else. I generally opened a pull request fairly early on, but if not, I would do that before handing it over to our testers. Opening a pull request triggered a build and the automated tests ran. Once I was done with the work, our testers would do their testing. If everything was ok they would do the merge into main, and would deploy to production.

On my new team, I work directly on main. As soon as I push any commits to the remote, a build is triggered, and if all the automated tests pass it is automatically deployed to production. 

You can see there are also some differences in how automated deployment is between the two teams, but that is separate to the trunk/branch issue.

**Although I was excited to start using trunk based development, my initial reaction when I first had to push a commit was utter terror.**

## Safety

Branch based initially felt safer. I knew that there would be a code review from another developer, and the testers would test the changes before they merged it into main. There was a lot of process in place to make sure I didn’t push something dodgy out into the world.

With trunk based development we just have to be more disciplined with other ways of ensuring the changes we are making are right. We pair on code, do desk checks, ensure we have good test coverage, and test the change against the requirements ourselves before pushing to main. 

While these are all things we could and should have been doing with branch based development, I feel that while using trunk based development I am leveraging that fear to keep myself disciplined, rather than having process and controls in place to do it for me.

I don’t think I’m doing more pairing or writing more tests than I did before because I had got into good habits around that. Where I do think I have improved my own discipline is not getting lazy about doing enough manual testing before pushing. I think before I leaned a bit too much on the knowledge that the testers would catch any edge case.

## Size of tickets

A major difference I’ve noticed is how big the tickets I’m working on are.

This will be different for different teams, and there is nothing stopping branch based teams from cutting their tickets smaller, but using trunk based development provides more incentive to keep changes smaller.

Some of the tickets I’ve worked on have felt comically small in comparison, but looking back at old pull requests some seem tragically large in retrospect.

We often cut our tickets by looking at what made sense for our testers to pick up and test together, but we could have done that by changing our process rather than the ticket size. Tickets I work on now are really as small as can possibly be deployed. No rolling up of related changes to do them all at once, they all get their own tiny ticket.

My favourite part is the lack of nasty merge conflicts. I get a conflict once in a while, but it is never that tricky to sort out. With multiple large branches working on the same area, you can get some nasty conflicts to untangle. The smaller changes are pushed more frequently so you can keep up to date with what others are doing more easily.

### Improving how the team works
I like that lots of small tickets spreads who works on a particular feature more among the team. If instead of one big card you have six small ones, everyone on your team might pick up a piece to work on rather than just one or two people. This makes everyone's understanding of new features much better. It is less likely there are large branches unfinished when people go on holiday. 

Smaller more frequent changes makes it less likely there are large branches that haven’t been pushed to the remote that remove visibility of the work from the team.

Something I do sometimes miss is using branches when pairing. It makes it easier to switch back and forth without having to have committed and pushed working code. The code session sharing features on my IDE should make this not an issue, but they don’t always work that well. 

### Features for later release
Sometimes, we used large branches to keep changes separate if they weren’t going to be released for a while. 

With trunk based development we use feature flags instead. 

This is entirely possible with branch based development, and I had used feature flags in the past. I definitely preferred it to keeping changes on a branch until released. It improved our workflow and reduced the issues around stale branches with horrible merge conflicts when it came time to release.

### Keeping tricky things safely separate
I sometimes also miss the security of a branch when working on something tricky, particularly if I might want to share it back and forth with someone else before merging. 

Luckily we aren’t so strict on trunk based development that you can’t sometimes open a branch when it makes more sense to do so. 

Our local dev set up is close enough to live that I haven’t missed being able to build and deploy branches to pre prod environments, but if it wasn’t I would miss that.

## Process v consensus

With branch based development it is possible to put in more central control over things like code quality and style before code is merged into main. These checks still happen with trunk based development, but they will get picked up and corrected after the code is already in main. 

With trunk based development you need to have more trust in your developers that nothing seriously detrimental will end up in main. You can still have checks in place in your CI/CD pipelines that prevent anything breaking getting deployed, but you could still end up with things you don’t want in your main branch. It can feel reassuring to know that there are processes in place, but so far I haven’t seen worse mistakes make their way through. 

If the vision for the code style is held only by a few people and they want to enforce it, I don't think trunk based development would work very well. You'd want the kind of gate that pull requests provide.

For trunk based development to work well, you need consensus in the team around things like style, quality, and what a proportional change is. You need the developers to have a sense of ownership of the code base, and to feel responsible for what they contribute to it. I think it requires a fairly stable team who have been working together for a while to have built that up. It would be pretty tricky to do on a team where people change regularly.

---

## Final thoughts
Overall, I think using trunk based development thoughtfully encourages several beneficial ways of working. While these can be used with branch based development, they are essential for trunk based development to work. It no longer terrifies me as much as it did initially, but I do like that it has tightened up my own discipline. I like the trust it means the teams developers have with each other.
