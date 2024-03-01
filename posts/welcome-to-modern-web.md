---
title: "Welcome to modern web"
seoTitle: "Welcome to the modern web or why we need site compressors"
seoDescription: "Welcome to the modern web: sites here load for 5-10 seconds, show at least two overlapping modal windows, etc. That's where site compressors come in."
datePublished: Tue Dec 12 2023 11:54:56 GMT+0000 (Coordinated Universal Time)
cover: https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/2FaCKyEEtis/upload/324f241c736634b8bcfe4ff92ab2751f.jpeg
tags: express, proxy, web-development, security, nodejs, webdev, typescript, fastify, devstory, selfhosted, selfhosting
dots:
  - Translation
coAuthors:
  - img: https://avatars.githubusercontent.com/u/50486086?v=4
    name: Darkcat09
    link: https://github.com/DarkCat09
    dots:
      - Original author (CC-BY 4.0)
      - text: "Source"
        link: https://t.me/dcat09/357
---

Welcome to the modern web: sites here load for **5-10 seconds**, show **at least** two overlapping modal windows with a request to register and subscribe, collect analytical data, leave for a block of text a couple of pixels - and why do we need it, the most important thing on the page is video advertising and panels with a request to register, subscribe, and in the worst case there is a useful site menu.

Everyone should have a supercomputer with a million gigabytes of RAM and preferably the same amount of space for cache files. A processor with at least 32 cores. What are you saying, you don't have one? You're not worthy of clicking on Google's links! Even your smartphone hints at this with a browser crash due to perfectly optimized scripts and CSS animations. Well, yes, you can't read text without JS, but what do you want?

I hope it's clear that **this is all sarcasm**, a **mockery** of the **sad reality**. It's time to get to the topic.

### Problem

Village, mobile internet, weak laptop. It's a miracle if the "modern web" somehow loads. It would probably help if we could pass all the traffic through compressive servers like Opera browser. How much time we have to waste just to download a page of text!

### Solution

Wait. Right, I only need the main text. The reading mode from Firefox handles that quite well. Mozilla also distributes this text extraction algorithm as a separate open source Readability.js library ([https://github.com/mozilla/readability](https://github.com/mozilla/readability)). There is an example of using it with server-side NodeJS in the readme - it offers the JSDOM library for parsing the extracted html code. I'll write a proxy that requests a page by URL, runs it through Readability and returns only text, without other unnecessary elements.

This way we will save a lot of traffic, because:

1. The client does not load the original HTML in its entirety, where there may be huge menus, and minus 500 kilobytes of header/footer removal is quite a lot;
2. The client doesn't load the original CSS, in case of frames like Tailwind the savings are especially noticeable;
3. and most importantly - the client does not execute dozens of heavy scripts on JS, usually loading something else additionally or embedding blocks of video ads (this is generally evil, only site admins do not get it).

"Village, mobile internet, weak laptop," - the preface is not about me, but about my friend [@megahomyak](https://t.me/megahomyak), who needed such a proxy server based on Readability.

I got such an idea while studying alternative frontends of Scribe ([https://scribe.rip/](https://scribe.rip/)), Dumb ([https://dumb.vern.cc/](https://dumb.vern.cc/)), AO ([https://code.whatever.social/](https://code.whatever.social/)), BreezeWiki ([https://breezewiki.com/](https://breezewiki.com/)), Rimgo ([https://rimgo.projectsegfau.lt/](https://rimgo.projectsegfau.lt/)) and others. When you see such attempts to implement a lot of narrowly focused parsers, the code of which is almost identical, albeit in different languages, you want to take and unify all the alt frontends, so that they work for any website, not for one specific one, and in case of errors just write a separate parser for this site, integrated with the main code.

It is important to realize that in addition to saving traffic and your nerves, alt frontends have another purpose - to hide the real IP address and browser fingerprint so that tracking is impossible. In fact, this is a standard proxy server feature, except that not every proxy cleans the request headers, but alt frontends do. So I don't want John Doe's blog with built-in analytics from Google and 20 other companies just in case, to try to track me and load the ad blocker/trackers. It's enough, as I said above, to request pages from the server side, pass them through Readability and give clean text to the client (but, of course, with links, images, tables and even iframes preserved). In this case we can get rid of javascript, hence advertising and client-side analytics, and at the same time server-side analytics by IP and headers, which our proxy simply does not pass to the main server.

The project framework was written by @artegoser. At first the project was on expressjs, but almost immediately we decided we should have used fastify, and quickly redesigned it because the project consisted of a couple or three files.

My idea was only to use Readability, but thanks again to @artegoser, the code was extensible, he was planning from the beginning to add other parsing engines besides Mozilla's Readability. Now you can assign a specific engine to individual domains. If the domain is not found in the list, we use Readability. Ah, yes, an engine is simply a function that takes a JSDOM library object and returns an IHandlerOutput object that consists of fields:

- content - extracted content as HTML, that is, with all links, images, tables...
- textContent - extracted text; essentially content, but without html tags.
- title - page title from the corresponding tag in the head.
- lang - two-letter code of the page language, Readability seems to get it from the attribute or automatically <s>(idk)</s>.

---

<mark>My addition</mark>

The code was originally built scalable, but we've come to the realization that scaling can't be infinite, so I'm thinking of rewriting the code to nestjs and adding plugins. Anyone who wants to help go to the github and create an issue or pull-request, well, or star the project.

---

### Finding a name for the project

We are simple people, text extraction means txt. The word is short, let it be a subdomain, i.e. txt.**.** ([txt.dc09.ru](http://txt.dc09.ru), [txt.artegoser.ru](http://txt.artegoser.ru)). So it will just be **_txtdot_**.

### Links

Source code: GitHub ([https://github.com/txtdot/txtdot](https://github.com/txtdot/txtdot)) | Gitea (mirror) ([https://git.dc09.ru/txtdot/txtdot](https://git.dc09.ru/txtdot/txtdot))

Official instances: [https://txt.dc09.ru](https://txt.dc09.ru) [https://txt.artegoser.ru](https://txt.artegoser.ru)

Documentation: GitHub Pages ([https://txtdot.github.io/documentation](https://txtdot.github.io/documentation))
