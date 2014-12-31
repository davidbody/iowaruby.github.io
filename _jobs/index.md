---
layout: default
title: Jobs
---
# Jobs

### Iowa Ruby Brigade Job Postings

{% assign jobs = site.jobs | reverse %}{% for job in jobs %}{% if job.date != null %}
***

### [{{ job.title }}]({{ job.url }})

#### Posted {{ job.date | date_to_long_string }}
{% endif %}{% endfor %}

{% include jobs_disclaimer.html %}
