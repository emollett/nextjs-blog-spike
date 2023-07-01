---
title: Feature switching
draft: false
---


# What is it
Using a switch or toggle to switch on or off a new feature. The code for the feature will be deployed to production, but the switch controls if users can see it.

# Why do you need to know
Feature switches are a really powerful tool useful both for user testing, and as an enabler for several good development practices.

# A bit more
There are a couple of different ways of implementing feature switches, from very basic on/off toggles to more complex ones that allow you to switch the feature on for specific audiences, or allow you to do A/B testing with random sets of users. These more advanced versions can be really powerful for user testing changes - with good metrics in place you can see exactly what effect your change has compared with before, or the difference between two changes.

Feature switches also enable good development practices such as [continuous deployment](./CI-CD) and [trunk based development](../posts/2023-03-13---trunk-based-development). They allow you to [merge your code](./basic-git) as soon as it is ready even if you aren't ready for users to start using the feature yet. This reduces issues merging the code later on, and means the whole process is completed whilst fresh in everyones minds.

It does require some work to maintain the feature switching mechanism, and there is usually some code to clean up once the feature is fully released which you should budget time for.

# How much should you care
Enough to find out if it is something people in your team would find useful.




