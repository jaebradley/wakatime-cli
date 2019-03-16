[![Greenkeeper badge](https://badges.greenkeeper.io/jaebradley/wakatime-cli.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/jaebradley/wakatime-cli.svg?branch=master)](https://travis-ci.org/jaebradley/wakatime-cli)
[![npm](https://img.shields.io/npm/v/@jaebradley/wakatime-cli.svg)](https://www.npmjs.com/package/@jaebradley/wakatime-cli)
[![npm](https://img.shields.io/npm/dt/@jaebradley/wakatime-cli.svg)](https://www.npmjs.com/package/@jaebradley/wakatime-cli)

# wakatime-cli

- [wakatime-cli](#wakatime-cli)
  - [Introduction](#introduction)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Setup](#setup)
    - [Summary Options](#summary-options)
    - [Section Filters](#section-filters)
    - [Section Options](#section-options)
    - [Today's Summary](#todays-summary)
    - [Footnotes](#footnotes)

## Introduction

![waka-flocka-flame](https://media.giphy.com/media/4FRN8FpBdaJYA/giphy.gif)<sup>[1](#waka-flocka-flame-footnote)</sup>

As a mega-nerd (proven by my use of the term, "mega-nerd"), I am a big fan of [the `WakaTime` service](https://wakatime.com) for tracking my coding.

But I think it'd be pretty damn cool if I could see some of my stats in the `Terminal` via a CLI.

![alt-text](https://imgur.com/nfJ4clj.png)

## Installation

```bash
npm install @jaebradley/wakatime-cli -g
```

## Usage

### Setup

```bash
waka setup
```

![setup](https://imgur.com/ygTGX4u.png)

The `wakatimecli` uses [the `WakaTime` API](https://wakatime.com/developers) to get data. One of the easiest ways to authenticate requests is by using your `WakaTime` API key, which can be retrieved by going to your `WakaTime` user profile.

Then, use the `waka setup` command to set your API key for the `wakatimecli` project, which will store your key using [`node-keytar`](https://github.com/atom/node-keytar) (so in `Keychain` on OSX, for example).

### Summary Options

### Section Filters

There are a couple notable command line options for filtering summary data.

However, filtering only impacts the summary data for the given section. So filtering by a particular project name will only change the output data for the `Projects` section and won't impact the `Editors` or `Languages` section.

This is primarily due to the output from the Wakatime `/summaries` endpoint which doesn't return linked data across editors, projects, and languages.

- `-e <Some Editors Filter>` - filters the editors in the `Editors` section
  - Supports regex, so `-e /vs co.*/i`, for example (which would match `VS Code`)
- `-l <Some Languages Filter>` - filters the languages in the `Languages` section
  - Supports regex, so `-l /java.*/i`, for example (which would match `Java` and `JavaScript`)
- `-p <Some Projects Filter>` - filters the projects in the `Projects` section
  - Supports regex, so `-p /waka.*/i`, for example (which would match `wakatime-cli` and `wakatime-client`)

### Section Options

You might want to restrict the sections that are outputted (if you want to _only_ see your language statistics, for example).

Here are the following ways to toggle specific sections. If no options are specified, **all sections** will be displayed.

- `-E` - show the `Editors` section
- `-L` - show the `Languages` section
- `-P` - show the `Projects` section

### Today's Summary

```bash
waka today
```

![alt-text](https://imgur.com/nfJ4clj.png)

Outputs the summary stats (total time recorded, editors, languages, and projects) for the current day using [the `summaries` API](https://wakatime.com/developers#summaries).

```bash
waka yesterday
```

Like [`Today's Summary`](#todays-summary) but, like, the day before.

### Footnotes

<a name="waka-flocka-flame-footnote"><sup>1</sup></a> Get it? Cause that's [Waka Flocka Flame](https://en.wikipedia.org/wiki/Waka_Flocka_Flame) and I like bad jokes. You get it.
