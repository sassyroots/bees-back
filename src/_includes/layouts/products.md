---
layout: base.html
tags: product
---

<article class="container" markdown="1">

![thumbnail](/img/prod/{{ img.thumb }})

<div class="prod-details">

# {{ title }}
{{ summary}}

### ingredients
{% if herbs %}
  {{ herbs | join: ", " }}, {{ prod.lipbalm.ingredients | join: ", " }}
{% endif %}

{{ content }}
</div>
</article>

<div class="container">

{% if dosage %}
### how to use
{{ dosage }}
{% endif %}

{% if notice %}
### notice
{{ notice }}
{% endif %}

TO ADD -- YMAL (by line & prod type)
</div>