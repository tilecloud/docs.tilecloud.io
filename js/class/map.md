---
# Page settings
layout: default
keywords:
comments: false

# Hero section
title: Map
description: Geolonia の JavaScript API の概要を説明いたします。

micro_nav: true

# Page navigation
page_nav:
    prev:
      content: クラスリファレンス
      url: '/js/class/'
    next:
      content: Marker
      url: '/js/class/Marker/'

breadcrumbs:
    - title: JavaScript API
      url: /js/
    - title: クラスリファレンス
      url: /js/class/
---

## Marker

Geolonia の JavaScript API の `Marker` クラスは、Mapbox GL JS の `Marker` クラスを拡張したクラスで互換性があります。

https://docs.mapbox.com/mapbox-gl-js/api/#map

### 使い方

```javascript
const map = new geolonia.Map(options)
```

### パラメータ

`options` には、地図を表示するための HTML 要素を指す CSS セレクタまたは HTMLElement または、以下の要素を含むオブジェクトを指定することができます。

#### options

| 名前 | 概要 | 型 | 初期値 |
|---|---|---|---|
| `container` | 地図を設置する HTML 要素を指す CSS セレクタ、または `HTMLElement` オブジェクトを指定してください。 | `HTMLElement` または `string` |  |
