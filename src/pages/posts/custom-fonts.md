---
title: How To Add Custom Fonts In Astro (And Other Frameworks)
pubDate: 10/19/2023
author: Neal Powers
layout: "../../layouts/MarkdownPostLayout.astro"
summary: A quick walkthrough on using custom fonts as well as solutions to common pitfalls
tags: astro, react, frameworks, custom fonts
---

# Who is this guy?

Hi! I'm Neal Powers. I'm a freelance web developer from Lexington, KY. I like to make blog posts when I encounter problems that give me any minor headaches so I can come back and check how I solved it when I inevitably encounter it again. I hope this is helpful for you and if you also get a problem, please reach out! I'd love to put our heads together and figure out a solution to your issue!

# What's the problem?

I want to use two different fonts on a page in my Tailwind project. The solution to this will work in multiple frameworks as its more of a Tailwind issue than an Astro issue. This is all assuming you've installed the font using npm/yarn to install something like google fonts if you're on Next or Fontsource if you're in Astro like me.

# Okay, get to work.

## Install the fonts

So the first thing to do is to install your fonts via npm. In my case, I'm in an Astro project and the [docs](https://docs.astro.build/en/guides/fonts/) recommend using [Fontsource](https://fontsource.org/). You'll want to find the font you'd like through their search engine, and then copy the command to install using npm through the documentation. In my case, I want to use [bangers](https://fontsource.org/fonts/bangers) and [Roboto Slab](https://fontsource.org/fonts/roboto-slab), so I'll be putting these commands in my terminal within the project.

```cli
npm install @fontsource-variable/roboto-slab
npm install @fontsource/bangers
```

## Import the fonts

If you use this method to get your fonts, then you'll need to import them into your file when you use them. Because I'm going to use both fonts on every page, I'm going to use them in my Layout.astro, but you could use them on a page-by-page basis or even component-by-component basis. You'll generally just need to add this to the top of you page. In my case, I'll put my import between "---" fences at the top of my page.

```cli
import '@fontsource/bangers'
import '@fontsource-variable/roboto-slab'
```

## Talk to Tailwind

Even though we imported our fonts, they still can't be used. If you try 'font-bangers' or 'font-roboto-slab', they'll probably just default to Times New Roman. So the next step is to add these to our Tailwind Config so Tailwind can see we want to use our new imported fonts.

### Where do we add our fonts in the config?

This is where we differ from the documentation in Astro. While we _can_ do what the docs suggest and extend our sans Font Family to make the default (the sans family) into one of our fonts, that doesn't solve the problem of having two (or more) fonts at once. The real spot we want to add new font families is directly in our theme. Here, you can see "bangers" is going to be what we write as a class, and "Bangers" is the name of our font we installed.

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      bangers: ["Bangers"],
    },
    extend: {},
  },
  plugins: [],
};
```

### What about two-or-more word font names?

This is where I had the most trouble and why I wanted to make a blog post. The trick is that both google fonts and fontsource will need to have the name in double quotes. You can either double quote them or escape them, but I like to double quote.

Also, when you're making the class name (or className for you next.js folks), you're going to probably want to put it in quotes and separate the words with '-' like the rest of the Tailwind conventions. To clarify, you _could_ name the property in the config anything you wanted to, but what needs to be in the array is the **exact** name of the font.

Lastly, it's best practice to include a fallback font in case something goes wrong. In this case, I'll fall back to the sans and sans serif font families since they'll naturally have a fallback font already.

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      // whatever, but probably-like-this: ["Exact Name Here"]
      bangers: ["Bangers", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
```

One thing to watch out for is that variable fonts will often include the variable in the name. In our case, I struggled because I was missing the "variable" part of the Roboto Slab name. So now our completed config should look like this:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      // whatever, but probably-like-this: ["Exact Name Here"]
      bangers: ["Bangers", "sans-serif"],
      "roboto-slab": ["Roboto Slab Variable", "sans"],
    },
    extend: {},
  },
  plugins: [],
};
```

## Use our classes

The last part should be easy, just put "font-" in front of whatever class name you defined as a property in the config. In my case, I just use "font-bangers" and "font-roboto-slab" in my markup like this:

```jsx
---
import Nav from '../components/Nav.astro'
import Footer from '../components/Footer.astro'
import '@fontsource/bangers'
import '@fontsource-variable/roboto-slab'
---

<html lang="en">
	<head>
		<meta charset="utf-8" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<meta name="viewport" content="width=device-width" />
		<title>Skunch</title>
	</head>
	<body class="font-roboto-slab">
        <Nav />
		<h1 class="font-bangers">Example</h1>
		<slot />
        <Footer />
	</body>
</html>

```

In this example, all the text in the body will default to Roboto Slab, and then my h1 with the text "Example" will be in Bangers.

# That's it!

So now you should have a good idea on how to install fonts to your project using npm, the reasoning for the strategy behind putting new font families in your Tailwind config, and some of the easy issues you can step into if you're not careful.

Thanks for reading. I hope this was helpful for you. If you have any questions about this article or just want to chat, feel free to reach out at neal.powers@outlook.com!
