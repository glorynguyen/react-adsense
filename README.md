# react-adsense-ads

> react-adsense-ads is a React-component for Google AdSense advertisement.

# 1. Install

> **npm install --save react-adsense-ads**

Before use Google AdSense, you should add the `script` at the end of HTML.

```html
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
```


# 2. Usage

```jsx
import React from 'react';
import AdSense from 'react-adsense-ads';

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

MIT@[glorynguyen](https://github.com/glorynguyen).
