[![Greenkeeper badge](https://badges.greenkeeper.io/jaebradley/wakatimecli.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/jaebradley/wakatimecli.svg?branch=master)](https://travis-ci.org/jaebradley/wakatimecli)
[![npm](https://img.shields.io/npm/v/wakatime-cli.svg)](https://www.npmjs.com/package/wakatime-cli)
[![npm](https://img.shields.io/npm/dt/wakatime-cli.svg)](https://www.npmjs.com/package/wakatime-cli)

# wakatime-cli

* [`Introduction`](#introduction)
* [`Installation`](#installation)
* [`Usage`](#usage)
  * [`Setup`](#setup)
  * [`Today's Summary`](#todays-summary)
  * [`Yesterday's Summary`](#yesterdays-summary)

## Introduction

![waka-flocka-flame](https://media.giphy.com/media/4FRN8FpBdaJYA/giphy.gif)<sup>[1](#waka-flocka-flame-footnote)</sup>

As a mega-nerd (proven by my use of the term, "mega-nerd"), I am a big fan of [the `WakaTime` service](https://wakatime.com) for tracking my coding.

But I think it'd be pretty damn cool if I could see some of my stats in the `Terminal` via a CLI.

![alt-text](https://imgur.com/nfJ4clj.png)

## Installation

```bash
npm install wakatime-cli -g
```

## Usage

### Setup

```bash
waka setup
```

![setup](https://imgur.com/ygTGX4u.png)

The `wakatimecli` uses [the `WakaTime` API](https://wakatime.com/developers) to get data. One of the easiest ways to authenticate requests is by using your `WakaTime` API key, which can be retrieved by going to your `WakaTime` user profile.

Then, use the `waka setup` command to set your API key for the `wakatimecli` project, which will store your key using [`node-keytar`](https://github.com/atom/node-keytar) (so in `Keychain` on OSX, for example).

### Today's Summary

```bash
waka today
```

![alt-text](https://imgur.com/nfJ4clj.png)

Outputs the summary stats (total time recorded, editors, languages, and projects) for the current day using [the `summaries` API](https://wakatime.com/developers#summaries).

### Yesterday's Summary

```bash
waka yesterday
```

Like [`Today's Summary`](#todays-summary) but, like, the day before.

### Footnotes

<a name="waka-flocka-flame-footnote"><sup>1</sup></a> Get it? Cause that's [Waka Flocka Flame](https://en.wikipedia.org/wiki/Waka_Flocka_Flame) and I like bad jokes. You get it.
