---
layout: layouts/products.md
---
<button class="snipcart-add-item"
  data-item-id="{{ sku }}"
  data-item-price="{{ prod.lipbalm.price | plus: upprice }}"
  data-item-url="{{ url }}"
  data-item-description="{{ summary }}"
  data-item-image="/img/prod/{{ img.thumb }}"
  data-item-name="{{ title }}"
  data-item-custom1-name="Flavors"
  data-item-custom1-options="{{ prod.lipbalm.flavors | join: '| ' }}"
  data-item-custom2-name="Sizes"
  data-item-custom2-options="{{ prod.lipbalm.vars }}">
  Add to cart
</button>