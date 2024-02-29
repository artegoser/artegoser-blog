---
title: "ONLang: json based programming language"
seoTitle: "ONLang programming language"
seoDescription: "ONLang programming language - language running on json"
datePublished: Mon Aug 15 2022 23:07:59 GMT+0000 (Coordinated Universal Time)
slug: onlang-json-based-programming-language
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1681826187604/b90d4b84-4a06-4383-81a7-e59f5e06fe05.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1660604821977/TsuxDsAQm.png
tags: experiment, json, yaml, programming-languages, onlang
---

![https://raw.githubusercontent.com/artegoser/ONLang/master/static/logos/OnLang-transparent.png](https://raw.githubusercontent.com/artegoser/ONLang/master/static/logos/OnLang-transparent.png align="left")

Recently, a person gave me the idea of ​​creating a programming language that runs on json. I really liked this idea. I thought it would be interesting to create such a language.

## Idea

Everything starts with an idea. It was necessary to figure out how the command writing format would look like. The first ideas began to appear.

```json
{ "print": ["Hello world!"] }
```

or

```json
[
  {let:["var", "world!"],
  {print:["Hello", var]}
]
```

Of course, these concepts will be reworked later.

## Start of development

The Rust programming language was taken as the basis. Speed ​​and security will help make the interpreter.

%[https://github.com/artegoser/ONLang]

## First features

Initially, functions for output to the console were written.

```json
[
  {print:[...arguments]},
  {println: [...arguments]}
]
```

In order not to always write println, the ability to output strings or arrays was added without writing {println:\[\]}

```json
["Hello world!", ["Hello ", "world!"]]
```

To be able to add, subtract, compare values, the `calc` and `comp` functions was added.

```json
[
  {calc: [2, "*", 2]}, //return 4
  {comp: [2, ">", 3] //return false
]
```

## Further features

Then loops, declaration of variables, getting the values ​​of variables, declaration of functions and conditions were added.

All functions that are now in ONLang are described [here](https://github.com/artegoser/ONLang/blob/master/examples/example.json5) or in [documentation](https://github.com/artegoser/ONLang/blob/master/doc/main.md)

[Factorial function test](https://github.com/artegoser/ONLang/blob/master/examples/factorial.json5)

Examples

```json
[
  { "loop": [{ "println": ["Endless loop!"] }] },
  {
    "let": { "var_name": "value" }
  },
  ["var_name = ", { "var": "var_name" }]
]
```

YAML support has also been added.

## What will be added

1. Import other files.
2. Methods for types (arrays, objects, strings).
3. Type conversion.

[complete list (it's updating)](https://github.com/artegoser/ONLang/blob/master/ROADMAP.md)

## What is this for?

> For scripting fun.

If you can help improve the interpreter, then I will be grateful to you.
