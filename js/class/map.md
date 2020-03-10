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

[https://docs.mapbox.com/mapbox-gl-js/api/#map](https://docs.mapbox.com/mapbox-gl-js/api/#map)

### 使い方

```javascript
const map = new geolonia.Map(options: Object)
```


### 例

#### 地図を表示する

Geolonia の JavaScript API は、[Embed API](/embed-api/) と組み合わせて使用することができます。

```html
<div id="map"
  data-lat="35.632546"
  data-lng="139.881328"
  data-zoom="16"
  data-style="geolonia/midnight"
  data-marker="off"
></div>

<script>
  const map = new geolonia.Map()
</script>
```

[CodePen](https://codepen.io/pen?template=xxGYbjL)

 #### カスタムマーカーを表示する。
