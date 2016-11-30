---
layout: default
title: Jobs
meta: yes
---
# Jobs

### Iowa Ruby Brigade Job Postings

{% assign jobs = site.jobs | reverse %}{% for job in jobs %}{% if job.meta == null %}
***

### [{{ job.title }}]({{ job.url }})

#### Posted {{ job.date | date_to_long_string }}
{% endif %}{% endfor %}

{% include jobs_disclaimer.html %}
