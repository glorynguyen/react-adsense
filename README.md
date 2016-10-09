# react-adsence


> react-adsence is a React-component for Google AdSence / Baidu advertisement.

[![Build Status](https://travis-ci.org/hustcc/react-adsence.svg?branch=master)](https://travis-ci.org/hustcc/react-adsence) [![npm](https://img.shields.io/npm/v/react-adsence.svg?style=flat-square)](https://www.npmjs.com/package/react-adsence) [![npm](https://img.shields.io/npm/dt/react-adsence.svg?style=flat-square)](https://www.npmjs.com/package/react-adsence) [![npm](https://img.shields.io/npm/l/react-adsence.svg?style=flat-square)](https://www.npmjs.com/package/react-adsence)


# 1. Install

> **npm install react-adsence**


# 2. Usage

```js
import React from 'react';
import AdSence from 'react-adsence';

<AdSence.Google client='ca-pub-7292810486004926'
                slot='7806394673' />

// or

<AdSence.Google client='ca-pub-7292810486004926'
                slot='7806394673'
                style={{width: 500, height: 300, float: 'left'}}
                format='' />
```


# 3. TODO

 - `Baidu` advertisement supported.
 - `Google` sync adsence supported.


# 4. LICENSE

MIT