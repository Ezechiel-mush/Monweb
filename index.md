---
title: Accueil
---
# Bienvenue sur mon site

**[➡️ Voir notre boutique](/boutique/)**

Découvrez mes derniers articles de blog ci-dessous.

## Mon Blog

<ul>
{%- for article in collections.post | reverse -%}
<li>
  <a href="{{ article.url }}">
    {{ article.data.title }}
  </a> - Posté le {{ article.date | readableDate }}
</li>
{%- endfor -%}
</ul>>
