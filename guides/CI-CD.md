---
title: Continuous integration - continuous deployment (CI-CD)
draft: false
---

# What is it
CI-CD stands for continuous integration - continuous deployment/delivery. You might hear people talk about a CI-CD or CI pipeline. This is the mechanism for getting code changes deployed to your service.

Continuous integration means that the code the developers are writing is being continuously [merged back in to the main codebase](./basic-git). The code will be [built](./building-code) and [automated tests](./testing) will run.

Continuous delivery means that the deployment of built and tested code is scripted so it can be done without manual steps.

Continuous deployment goes a step further, if all the tests pass in the pre production environments, the change will be automatically deployed to production.


# Why do you need to know
You should know how your changes get to your users, even if just at a high level so you can understand where things have got stuck if they go wrong. 

Each additional step adds more automation, which can reduce errors and improve efficiency. Some time spent up front setting things up right pays off. You should be making time for this to be done properly at the beginning of a project.

You are most likely to hear about the CI-CD pipeline when something has gone wrong, or things need changing. Most of the time you should hope that it is just chugging away working nicely. If a bad CI-CD pipeline is in place, your developers and testers are probably fairly frustrated and you should get your team to discuss how things can be improved (and setting aside the time for any improvements!). 

# A bit more
If your team isn't doing continuous integration, they are probably spending a lot of time sorting out merge conflicts or build issues. While they can run their tests locally, regularly integrating your code provides reassurance that you aren't breaking anything else.

Continuous delivery is the logical next step. You should be scripting and automating as much of the deployment process as you can to ensure it is run the same way every time. With continuous delivery you may have a manual approval step for deployment to each environment, but the actual deployment stages will be automatic.

Continous deployment is a big step for many teams, particularly for product owners. It means that as soon as a change has been committed by a developer, it will be in production as long as all stages of the pipeline pass. There are no manual intervention steps.

Continuous deployment requires there to be robust automated tests in place that cover enough of the code that you can be confident that a change isn't going to break something else. It also requires you to either be happy that any changes are immediately available to your users, or you will need to put [feature switching](./feature-switching) in place so you can make the changes available to your users on your own time table.

A useful metric can be measuring how long it takes for a change to go from being picked up by a developer to being in production. Your CI-CD pipeline will have a big effect on this. Continuous integration reduces the time spent sorting merge issues and regression issues. Continous deployment will reduce the time spent trying to work out why one deployment works and another hasn't. Continuous delivery means you have the testing and trust in place to get those changes out as soon as they are ready.


# How much should you care

You should care enough to find out what the process is for getting your code to production. Any other decisions around this are for your developers to make, although it is definitely an area you should occasionally visit with a retro to see if there are any improvements to be made.


