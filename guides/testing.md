---
title: Testing
draft: false
---


# What is it
Checking the code and service to make sure it does what is expected.


# Why do you need to know
If done right, the automated tests that developers write should take at least as much time to write as the code itself. You need to know that that is normal, and it is absolutely right that they spend that much time writing tests. 

Without the tests you run the risk of breaking your service, and development will slow down because every change becomes more risky. Relegating testing to later because you want to get features out faster is a false economy, work will slow down because of it.

# A bit more
Testing is not just about testers. Even if you have testers on your team, your developers should be writing tests for their code as they go.

Tests can be automated or manual. Automated tests are written as code, and can be run quickly and easily against your code whenever you make changes. Manual testing is done by a person using the service and making sure everything is working as expected. There should always be some manual testing done when you make changes, but having a good set of automated tests that always run when you make changes gives you quick and early assurance that things are not likely to have been broken by the change.

There are many different types of tests, these are a few your team may be using:

**Unit tests** - These test a single, small piece of the application. This is testing the smallest thing that is able to be tested, and is used in [test driven development](./test-driven-development) to help write the code.

**Integration tests** - This combines several of the units tested in the unit testing to make sure that they work together to produce the expected result.

**Functional tests** - Tests end to end a slice of functionality or a feature of your service. These are often based on a user flow, and there are test frameworks that allow these to be written in a human readable way.

**Acceptance tests** - This is testing against user criteria to ensure they will be satisfied. This is often manual and done by the user or a user proxy.

**Performance tests** - Tests that a service will hold up to a large number of users

**Snapshot tests** - A snapshot of the user interface is taken, and compared with an accepted earlier snapshot to ensure that changes you've made haven't led to unexpected changes to the interface.

**Regression testing** - Checking that a new piece of code hasn't broken any previously implemented functionality. If you have a suite of automated tests that runs every time you make a change, this is performing regression testing. You can also do manual regression testing, where you work through your service checking that nothing has been broken by the change.

**Exploratory testing** - Rather than using a script to test a service, you try everything you can think of to see if it breaks things. This is generally manual, and when you find an issue you can raise it as a bug to fix. Ideally, you'd write a test to cover that case when you write the fix, which will then be part of the test suite.


# How much should you care
A lot. 


You should care that the tests are being written at the same time as the code 
- make sure people know that writing tests should be part of their estimate if you do estimates
- never ask for these to be skipped to make deadlines


You should care that if testers find a problem it is addressed before the developer moves onto another piece of work 
- have low work in progress limits so there isn't a large backlog of work for testers to get through that mean the developers have long moved on by the time a tester gets to their change
- enforce right to left priority on the kanban board, that finishing off a piece of work by addressing issues raised by testers is more important than working on something new


You should care there is good test coverage, and that the test coverage is high quality 
 - ask how people feel about the tests
- provide time to get them sorted out if they aren't happy with them


You should care that the tests are run as part of the [deployment pipeline](./CI-CD) 
- always make time for getting this set up at the beginning of a new project
- do it as a 'sprint 0' if you have to, but it should count as real sprint work required at the beginning of a new project.

# See also
[What is ...test driven development](./test-driven-development)

[What is ...CI/CD](./CI-CD)


