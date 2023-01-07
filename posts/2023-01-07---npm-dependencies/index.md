---
title: "Keeping npm dependencies up to date and secure"
date: "2023-01-07"
layout: post
draft: false
path: "/posts/npm-dependencies/"
category: "Development"
tags:
  - "Development"

description: "Noting down a couple of handy approaches for tidying up npm dependencies, particularly after running npm audit."
---

## Identify your issues
```npm audit```

Start here to identify your issues. Click the links and read about the problem, it’s a good way to learn!

![npm audit output showing 2 critical, 12 high and 1 moderate vulnerabilities](/images/npmaudit.png)

## Fixing your issues
```npm audit fix```

If you’re lucky, npm audit fix will fix your issues. It updates packages to versions that won’t cause breaking changes where available. It is unlikely to fix all your audit issues unless you’ve been really good about keeping up to date. 

### Update your top level dependencies
`npm audit fix --force`  - *generally, don't use this*

This is available for major version updates, but I tend to find that running it then means I have more issues appear and it is harder to narrow down what the problem is.


I prefer to manually try the updates to top level dependencies recommended in the npm audit report one by one so I can test each one to see what side effects it has.

### Is it actually a problem?
It is worth reading up on the vulnerability and working out if it actually is an issue for you in the context that you are using the package. It might be only for a specific function of that package that you don’t use. In that case, you could safely ignore the warning (and remain forever annoyed at seeing it pop up)

There is an argument that this should really be your first step, but to be honest I like to keep things up to date so if something is easy to update I’ll do that first before deciding to disregard an issue.

### Can you get rid of the code using it?
If you can get rid of the code entirely, fantastic. Code that doesn’t exist doesn’t have buggy dependencies. Deleting code is just after deleting jira tickets in my list of things that bring me joy.

### Get rid of unused dependencies
```npx depcheck``` 
[depcheck](https://www.npmjs.com/package/depcheck)

This can be handy to find dependencies that you aren’t actually using any more. If you’re lucky, getting rid of some of these will get rid of some of your audit warnings. It is worth giving everything a good test between removing each dependency just to make sure. You don’t want to remove a bunch and find there is an issue but not know what caused it.

### Dedupe your dependencies
```npm dedupe``` 
[npm dedupe](https://docs.npmjs.com/cli/v8/commands/npm-dedupe)

This simplifies your dependency tree by looking for dependencies that can be moved further up the tree to be shared by multiple packages. It’s unlikely to have much of an effect on the number of warnings you have, but it’s nice to tidy things up particularly if you’ve been updating your top level dependencies.

![Output after deduping dependencies showing that 3 have been removed and 3 changed](/images/dedupe.png)

### Check what versions of dependencies you have and what is using them
```npm ls dependency``` 
[npm ls](https://docs.npmjs.com/cli/v7/commands/npm-ls)

I find this useful to see what exactly is using a dependency that has been flagged by npm audit. You might find that whatever depends on it has already updated its dependencies and you can upgrade to that, or you might notice that despite running dedupe, there are still some older versions of a dependency being used despite having the newer one available

![Output of npm ls for a package showing some subdependencies are out of date](/images/npmls1.png)
*Output of npm ls for a package showing where the out of date dependencies are*

### Overriding versions of sub dependencies
[overrides](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#overrides)

![Format of overrides](/images/overrides.png)

This is useful when a dependency of a dependency is out of date, and your higher level dependency isn’t being maintained any more. You can override the package version it uses to one you specify. 


Again, always worth testing everything well each time you add an override to make sure it hasn’t had any unintended side effects.

![Output of npm ls for a package once its version has been overriden to ensure all are up to date](/images/npmls2.png)
*Output of npm ls for the same package after overriding the version*

If this does work, it might be worth opening a pull request in the affected dependency with the update. You should definitely raise the issue with them if it hasn’t been raised already.

### Can you change the code using it?
Is there a different more up to date package that you could substitute? Sometimes maintainers will point to a newer package if they have deprecated their own package.

### Can you take on maintenance of the package?
Worst case scenario, there is a serious issue, you really do need that package, and the package is no longer maintained, you could look to patch a fork and use that. 

![Output of npm audit after all issues have been fixed](/images/npmaudit2.png)

