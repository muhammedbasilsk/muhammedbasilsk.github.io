---
layout: page
title: Posts
---


<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

<div style="text-align:center;">
  <a
    href="https://www.linkedin.com/in/muhammed-basil-377b5218" target="_blank" category="HOME_SOCIAL_LINK"
    label="LINKEDIN" event="CLICK" action="CLICK"
    class="socialicon">
      <img src="/images/linkedin_logo_in_nav_44x36.png" style="width:44px;">
    </a>
    <a href="https://twitter.com/muhammedbasilsk" target="_blank" category="HOME_SOCIAL_LINK" label="TWITTER"
      event="CLICK" action="CLICK"
      class="socialicon">
        <img src="/images/twitter-128.png" style="width:36px;">
    </a>
</div>

<div
  style="text-align:center;"
>
  I am real when it is useful!
</div>
