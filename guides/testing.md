---
title: Testing
draft: false
---


# What is it
Checking the code that has been written to make sure it does what is expected.


# Why do you need to know
If done right, the automated tests that developers write should take at least as much time to write as the code itself. You need to know that that is normal, and it is absolutely right that they spend that much time writing tests. Without the tests you run the risk of breaking your service, and development will slow down because every change becomes more risky. Relegating testing to later because you want to get features out faster is a false economy, work will slow down because of it.

# A bit more
Testing is not just about testers. Even if you have testers on your team, your developers should be writing tests for their code as they go.

Types of tests, unit, functional, performance, frontend, snapshots, manual, exploratory, acceptance
arrange, act, assert

risk and tests


# How much should you care
A lot. 

- You should care that the tests are being written at the same time as the code 
    - make sure people know that writing tests should be part of their estimate if you do estimates
    - never ask for these to be skipped to make deadlines

- You should care that if manual testers find a problem it is addressed before the developer moves onto another piece of work 
    - encourage working right to left through the kanban board

- You should care there is good test coverage, and that the test coverage is high quality 
    - ask how people feel about the tests
    - provide time to get them sorted out if they aren't happy with them

- You should care that the tests are run as part of the [deployment pipeline](./CI-CD) 
    - always make time for getting this set up at the beginning of a new project
    - do it as a 'sprint 0' if you have to, but it should count as real sprint work required at the beginning of a new project.

# See also
[What is ...test driven development](./test-driven-development)

[What is ...CI/CD](./CI-CD)


