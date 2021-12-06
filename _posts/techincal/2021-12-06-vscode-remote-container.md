---
layout: post
title: Visual studio code - Remote container for cleaner dev environment
---

How do we keep our personal or work computer clean without compromising our urge to learn and experiment with many things? It is always a challenge to maintain a cleaner environment. It goes to a bigger problem when we want to share the project with different team members. Or just change the computer?

Manually setting up Docker containers can help us to maintain independent workspaces and maintain identical environments for the projects. Though, it demands you to have some knowledge in it.

Microsoft's visual studio code takes the heavy load and helping the developer to set up the workspace and projects inside a container without any knowledge. All you need is to install docker in the machine and visual studio code with the remote container extension.


The major advantage I have experienced with remote container development is many times the OS packages might be outdated or the latest version won't match with the packages that I want to set up. Or sometimes you need to go through a pretty long document for setting up a development environment. All we need to do is to find the container some kind people who had already spent their valuable time to build it. If it is a custom environment, still with minimal knowledge in docker container setup, we will be able to set up our own.

Twice I faced a similar issue. once I was trying to set up flutter in my mac and the other was when I tried Jekyll Github pages to run locally. I was going through the document trying to install some packages. I was getting some issue with some package dependency installation and couldn't find the solution for it. I read through the errors and it seemed cryptic that time. The thought that came to my mind was, `Okay, this is the not issue I am trying to solve here, are there any alternative ways to make it work?` I googled for the container name. I found the image ( Flutter and Jekyll - links are shared below).
All I had to do was to open the project in visual studio code, choose the option to reopen with the container, it asked for the container image name. Once the remote container setup is completed, I was able to perform all the tasks I wanted.
With this, even flutter app can be run in an android phone over wifi.

### Testing in a real environment:
I was working on a Golang script to sort a bunch of events. I was trying out goroutines to achieve maximum parallelism. It worked really well in my mac, and I was trying it out in AWS ec2 t2.micro instance. It failed shortly saying that it cannot go indefinite with goroutines.
To replicate the issue in my local, I set up a remote container with an ubuntu image and restricted the resources of the docker to one core and 1 GB ram. I was able to replicate the issue immediately. It helped me refactor my code and add some control over the maximum number of goroutines in the program.

### Conclusion:
Visual studio code with remote container setup is pretty helpful to maintain an identical development environment across the team and different machines.
It helps to locally test our code in a controller environment.

Reference:  
[Vs code + Remote container setup](https://code.visualstudio.com/docs/remote/containers)  
[Jekyll](https://hub.docker.com/r/jekyll/jekyll)  
[Flutter](https://hub.docker.com/r/cirrusci/flutter)  

