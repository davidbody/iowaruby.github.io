---
layout: default
collection: meetings
title: February 2018
year: 2018
month: '02'
topic: Modern Messaging Applications with Ruby
speaker: Matt Spurlin
---

# {{ page.title }}

#### February 20, 2018
12:00 - 1:00 PM

### Topic

#### Modern Messaging Applications with Ruby

In an age of microservices, we have an increasing amount of services that
do not need a public API and may be best architected by not having knowledge
of the other services in existence. One approach to this pattern is called
Kappa Architecture. In Kappa Architecture you use a centralized message queue or
log to share messages between services. Services then produce and consume
messages in isolation and can have their behavior examined by simply recreating messages
on the queue rather than interacting with your entire ecosystem. In this
talk I will discuss one such approach to implement this architecture using
Karafka and Apache Kafka. I will outline pros and cons to this approach and how you
can integrate it with an existing Rails application.

### Speakers

[Matt Spurlin](https://twitter.com/punk1290)

Software engineer with a heavy focus on cloud and automation.
Currently working at a stealth start up in Ames. Enjoys hacking on various
side projects from home automation to game development.

### Food Sponsor

TBD

### RSVP

#### Please RSVP [here](https://iowaruby-feb-2018.eventbrite.com)

### Meeting Location
{% include gravitate_location.html %}
