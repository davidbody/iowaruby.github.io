---
layout: default
collection: meetings
title: July 2016
year: 2016
month: '07'
---

# July 2016

#### July 19, 2016
12:00 PM - 1:00 PM

### Topic

#### Warmup:

_Don't Forget About Your Database_

Explain how to build correct indexes, and how to incorporate DB functions and views into your code.

#### Main Topic:
_Trailblazer: Making your Rails Applications Manageable_

Ever wonder if there's a better way?
Do you ever find yourself in these situations?

- Seven levels of "Callback hell"
- Models with: `accepts_nested_attributes_for :posts, allow_destroy: true, limit: 10, reject_if: :new_record?`
- Models with business logic that have nothing to do with database persistence
- Controllers with business logic that have nothing to do with HTTP and routing
- Complex nested forms
- 20 levels of nested `if`s in the view layer
- Views that render partials inside of partials inside of partials

[Trailblazer](http://trailblazer.to) is a relatively new framework for architecting applications with real-world business requirements. It
provides a pluggable framework for business logic using traditional object-oriented design on top of the web framework that
you love and know (doesn't necessarily have to be Rails!). It focuses on objects, testing, and explicit application structure, so you
never have to wonder again where the "magic" is coming from in your application.

In this talk, we will go over the high-level concepts found in this architecture and how they all fit together using a
sample application with "real-world" requirements to better understand how your application can have better testability,
organization, and maintainability.

### Speakers

Torrey Johnson, Shift Interactive

[Cliff Braton, Shift Interactive](https://twitter.com/cliffbraton)

[Zach Taylor, Shift Interactive](https://twitter.com/ZTofficial)

### Attendees

Please remember to RSVP and notify of any food requirements you may have to iowaruby@gmail.com or @iowaruby

### Food Sponsor
Thanks to [Shift Interactive](http://shiftdsm.com) for providing food for this meeting.

Note: this is lunch, and we would appreciate an RSVP to get the food count as well as any dietary limitations you may have.

### Meeting Location
{% include shift_location.html %}
