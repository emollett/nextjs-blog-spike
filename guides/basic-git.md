---
title: Git
draft: false
---

# What is it
git tracks changes to files so that many developers can work on a code base and share their changes.

# Why do you need to know
These days it is pretty likely that your developers are using git, and probably via github. They should definitely be using some sort of version control system (services that allow you to track changes to files). You don't need to know a lot about it or how it works, but it is likely to come up in conversation a lot as they are using it every day!

# A bit more
There are other version control systems such as Team Foundation Server, Subversion, or Mercurial. Github is a service that hosts git repositories and provides add ons that make things like code reviews easier. There are other services that host git repositories such as GitLab, Bitbucket, and the major cloud providers (AWS, Azure, Google Cloud Platform etc) which all provide similar services.

There are quite a few terms that developers use when talking about git, which I've emphasised in the next sections.

Whatever service you use to host your code repositories, there will be a **remote** copy of the code called the **main** or **master** copy hosted on that service. When a developer is working on code, they have a copy of this on their computer, and this copy is called the **local** copy. Developers make changes to the code on the local copy. When they are happy with the code, they **commit** those changes. The developer can then **push** that commit, which is the record of the changes they made to the remote copy of the code. Those changes get **merged** into the remote copy, allowing other developers to see the changes. They can then **pull** the up to date version onto their computer, updating their own local copy.

There are a couple of different methods for multiple developers to work together which you can find out more about [here](./git-flows).

Your developers will often use the code repository to store their documentation. The code will often have a README file, with information on how to run the code. A good README might have the following:

- High level overview of the project/service
- What is it?
    - What is the problem it is solving
    - What does it do
    - Who is the target audience
- [Stack](./the-stack)
    - What is the system’s architecture
    - How does it interact with other services?
- Set up
    - Specific software dependencies and versions
    - Things you need installed to run it
    - How to get it running
    - How to run tests
    - Useful commands you can run
- Common problems
    - Any settings that need to be checked that might cause it to not run
    - If it integrates with something else do you need that running as well
    - Do any accounts need to be set up
    - This is normally populated as people come across problems!

If you have open code, it is usually findable through your git repository. On github you can have an organisation set up with all the different code bases in your organisation there, which makes it easier for your developers to see all the code in use in your organisation. If the code is open, anyone can look at the code. There are [many benefits to coding in the open](https://gds.blog.gov.uk/2017/09/04/the-benefits-of-coding-in-the-open/).


# How much should you care
Very little. Hopefully everyone on the team is happy with what they are using, and hopefully all your organisations repositories are on one service, organised in one place. 

It is fairly easy to get up to speed with, so it isn't a skill you need to make sure someone has before hiring them.

It is a good idea to check the README for your service and make sure it is useful, and if it is open make sure that it represents your service well.


# See also
[What is ...branch vs trunk based development](./git-flows)

[My experience using trunk based development](../posts/2023-03-13---trunk-based-development)

[Making your code open](https://www.gov.uk/service-manual/technology/making-source-code-open-and-reusable)


