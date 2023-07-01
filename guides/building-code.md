---
title: building code
draft: false
---

# What is it
The process of getting your code packaged ready to be deployed.

# Why do you need to know
It is something that is required for the code for your software to be deployed. You will hear the term used, but might not understand what it means.

# A bit more
Some code, particularly for very basic websites is straight forward enough to not require much of a build process before it is deployed to the web. If your service has dependencies on other services, or has more interactions than a flat page of content, it will probably need to be built in some way. There are a couple of different things that might happen during a build:

- Your developers are probably writing their code in a high level language which means it is easily understood by humans. Sometimes this code has to be **compiled** to a language the computer understands. The computer then uses the compiled code when it runs. (Other languages use an **interpreter** to translate it to a language the computer understands while it runs, and don't need the compilation step.)

- Sometimes your developers will be using very modern versions of a web language. This doesn't always work on every browser and so has to be **transpiled** to a version that every browser understands.

- Sometime your service will have been written as several modules or smaller services that need to be bought together to work. Your service might use code written by other developers (libraries) to help it run. These will be included or **bundled** during the build.

- Sometimes our source files get so big that loading times are very long. Your developers might choose to **minify** the code. This reduces the size of the file by removing whitespaces and comments. Because humans don't need to be able to read this code, sometimes variables and function names might be renamed to something shorter eg `makeThisWork` might just be called `m`.

- Often there will be variables that need to be inserted into the code. These might change depending on environment, or might change often enough to be kept separate from the code. Sometimes they will secret, and so you want to keep them out of the source code. Inserting the variables into the code happens during the build.

- Your developers might use containers to manage their services. These have several uses including proiding a consistent operating environment regardless of where they are run. **Containerizing** your application will happen during the build process.

- [Unit tests](./testing) are generally run during the build process. The build will fail if the tests don't pass, which is useful if you are using [continuous deployment](./CI-CD) and don't want to deploy anything that is broken.

# How much should you care
Very little, if everything is working ok its just a word you will hear. If it's not going well, it is worth putting time aside for your developers to improve it as it will be slowing their delivery down.

# See also
[What is ...testing](./testing)
[What is ...continuous integration - continuous deployment](./CI-CD)



