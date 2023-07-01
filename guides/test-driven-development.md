---
title: Test driven development (TDD)
draft: false
---

# What is it
A way of writing code where you write a test for the behaviour you want first, and then you write enough code to get the test to pass.


# Why do you need to know
This is a good practice that your developers might use to write their code. It means the code will be well tested, won't be more complicated than it needs to be, and is a good way for developers to approach big things that seem daunting. Working in this way makes [pairing](./pairing) easier as you can break up your pairing by switching each test and not handing over non working code.


# A bit more
The basic steps for test driven development are: 
- Developer [writes a test](./testing). This should only test one small thing.
- The test will fail because no code has been written to make it pass. If it passes, there is probably something wrong with the test. The test is 'red'
- Developer writes code to make the test pass. The test is 'green'
- Developer may do some work to improve their code to make it more readable, performant, or reuse something that had been written before. This is called 'refactoring'. While this is happening the test may fail again, but the developer knows that the test is good and that once it is passing again, they can be happy that the code works.


# How much should you care
It's a good practice for the developers to be using test driven development, but probably not one for you to get too involved in. You could ask if they are using it (and what their reasons are for not using it if they aren't).

# See also
[What is ...testing](./testing)



