---
layout: base.html
---

<ul>
{%- for post in collections.product -%}
  <li><a href="{{ post.data.url}}">{{ post.data.title }}</a></li>
{%- endfor -%}
</ul>