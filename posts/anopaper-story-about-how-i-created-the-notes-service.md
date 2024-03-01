---
title: "AnoPaper: Story about how I created the notes service"
seoTitle: "AnoPaper: Story about how I created the notes service"
seoDescription: "In this article, I talk about how a school project grew into something bigger, how I created a notes service."
datePublished: Tue Jul 18 2023 08:58:43 GMT+0000 (Coordinated Universal Time)
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1689666281673/d71a9639-47a1-4ac8-a873-0b72a028bddc.png
tags: reactjs, notes, notesapp, devstory
---

[Site](https://anopaper.artegoser.ru) [Source code](https://github.com/artegoser/AnoPaper)

## Introduction

At the beginning of 2022 school year, I had to choose a topic for a project paper. I had already started a project before the beginning of school year, but it proved too difficult and I put it off until the following summer ([OSMA](https://github.com/OSMA-D)). Then I got the idea in my head to create a very simple app with which you can just send text messages that are deleted after being read. At the beginning of the journey, I had no idea what this idea would become in the future.

## Beginnings

This was my first project using Tailwind, React and Vite. So i had to learn everything from scratch. And I believe that any learning starts with practice, so I initialized the project and started trying things out.

```bash
npm create vite@latest anopaper -- --template react
cd anopaper
```

And then i set up a tailwind, per [their instructions](https://tailwindcss.com/docs/guides/vite).

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

I now have a vite-react-tailwind project structure ready to go.

## Frontend

Before I started writing frontend, I had an idea to add the ability to save notes locally, not just ones that deleted after reading. **And it began.**

As I was writing, I had more and more ideas that could be implemented. This is also when the main idea came up, the idea that all data should store locally (except for public notes).

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1689589068694/073c6304-f2ea-4c5d-89d5-e5d054f1e03d.png align="center")

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1689589145486/0f9ee7e8-80ca-44d8-bfab-d6178de0888d.png align="center")

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1689589179139/50e7d9a0-0782-40f8-b298-ff3e7d8118a1.png align="center")

A lot of features and customizations have appeared in my service. For example: note addition using OpenAi api (gpt-3.5), collaborative editing and synchronization. It also started to have basic note editor capabilities (edit, search, delete, publish).

I used to make all my sites on pure js, without using frameworks, react has completely changed my attitude towards this kind of frameworks (react is actually a library).

React has opened up the world of writing interfaces, it's become much easier to do. Befor that, I had no idea that such things were possible.

Before I tried React, it seemed too complicated and useless to me, I couldn't even think of a reason to use it. This was a case with almost all my attempts to learn something new in programming. I advise everyone to just start using tools you don't use and you will find a real use for them.

## Backend

Creating the backend was a bit more boring, I already knew everything I needed and it was just a matter of implementing publishing and retrieving the note and deleting it after reading.

At first all the notes were stored directly on the disk unencrypted and anyone with acces to the disk could read them, but then I rewrote the code and the notes were written to the mongodb database (running on cloud) and encrypted. So if someone gets acces to the notes database,the won't be able to understand what is written there.

## Conclusion

My school project has grown into something bigger and I intend to continue adding many features to my service. It should have a simple and uncluttered design so that you can write, save and share notes quickly and easily. Soon v1.1.0 will be released where many [new features](https://github.com/artegoser/AnoPaper/blob/main/changelog.md) will be added.
