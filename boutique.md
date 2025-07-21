---
title: Notre Boutique
layout: layouts/produit.njk
---

Découvrez tous nos produits disponibles ci-dessous.

<ul>
{%- for produit in collections.product | reverse -%}
<li>
  <a href="{{ produit.url }}">
    {{ produit.data.title }}
  </a> - {{ produit.data.price }} €
</li>
{%- endfor -%}
</ul>
