# react-adsense-ad

> react-adsense-ad is a React-component for Google AdSense advertisement.

[![Build Status](https://travis-ci.org/aj-anuragjain/react-adsense.svg?branch=master)](https://travis-ci.org/aj-anuragjain/react-adsense)
[![npm](https://img.shields.io/npm/v/react-adsense-ad.svg)](https://www.npmjs.com/package/react-adsense-ad)
[![npm](https://img.shields.io/npm/l/react-adsense-ad.svg)](https://www.npmjs.com/package/react-adsense-ad)


# 1. Install

> **npm install --save react-adsense-ad**

Before use Google AdSense, you should add the `script` at the end of HTML.

```html
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
```


# 2. Usage

```jsx
import React from 'react';
import AdSense from 'react-adsense';

// ads with no set-up
<AdSense.Google
  client='Your Publisher Id'
  slot='Ad slot Id'
/>

// ads with custom format
<AdSense.Google
  client='Your Publisher Id'
  slot='Ad slot Id'
  style={{ width: 500, height: 300, float: 'left' }}
  format=''
/>

// responsive and native ads
<AdSense.Google
  client='Your Publisher Id'
  slot='Ad slot Id'
  style={{ display: 'block' }}
  layout='in-article'
  format='fluid'
/>

// auto full width responsive ads
<AdSense.Google
  client='Your Publisher Id'
  slot='Ad slot Id'
  style={{ display: 'block' }}
  format='auto'
  responsive='true'
/>
```


# 3. Props

 - Required props:
   - `client`
   - `slot`
 - Optional props:
   - `className`:
   - `style`:
   - `layout`:
   - `format`:
   - `responsive`:



# LICENSE

MIT@[aj-anuragjain](https://github.com/aj-anuragjain).
