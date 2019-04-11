---
# Page settings
layout: default
keywords:
comments: false

# Hero section
title: はじめに
description: 本チュートリアルでは、TileCloudの地図をウェブサイトに埋め込むための一般的な方法を目的別に紹介します。

# Author box
# author:
#     title: About Author
#     title_url: '#'
#     external_url: true
#     description: Author description

# Micro navigation
micro_nav: true

# Page navigation
page_nav:
    prev:
        content: チュートリアル
        url: '/tutorial/'
    next:
        content: API キーを取得する
        url: './tutorial/signup'

breadcrumbs:
    - title: "チュートリアル"
      url: "/tutorial/"
    - title: "はじめに"
      url: "/tutorial/introduction/"
---

## API キーについて

TileCloud の地図をみなさんのウェブサイトでご利用いただくには、まずはじめにサインアップしていただき、API キーを取得していただく必要があります。

API キーは、TileCloud の地図と紐付けられており、API キーを所得する際には実際に地図をご利用されるサイトの URL もご登録して頂く必要があります。これは、悪意がある第三者による API キーの盗用を防ぐために必要なので、あらかじめご理解をお願いいたします。

ひとつの API キーに対しては、複数の URL を登録していただくことが可能なので、ローカル開発環境やステージング環境なども登録しておくとよいでしょう。

また、ひとつのユーザーアカウントで複数の API キーを取得していただくことも可能です。

## Embed API について

TileCloud は 米国 [Mapbox](https://www.mapbox.com/) 社互換のベクトルタイルという仕組みを採用しており、同社がオープンソースで公開している [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/api/) をそのままご利用いただくことが可能です。

さらに TileCloud では、Embed API という API をご提供しており、これによって JavaScript を書かなくても HTML を記述するだけで、みなさんのウェブサイトに TileCloud も地図を埋め込むことができます。

```html
<div
  class="tilecloud"
  style="width: 100%; height: 250px;"
  data-lat="35.675888"
  data-lng="139.744858"
  data-zoom="12"
>国会議事堂</div>
```

<div
  class="tilecloud"
  style="width: 100%; height: 250px;"
  data-lat="35.675888"
  data-lng="139.744858"
  data-zoom="12"
>国会議事堂</div>

Embed API を利用するには、地図を設置したいページの `</body>` の直前に以下のコードを記述していただくだけでご利用可能です。

```
<script type="text/javascript" src="https://api.tilecloud.io/dev/embed?tilecloud-api-key=YOUR-API-KEY"></script>
```

`YOUR-API-KEY` の部分は、みなさんの API キーと置き換えてください。

秘密の情報をこっそり教えますが、この `YOUR-API-KEY` という API キーは特殊な API キーで、`http://localhost:3000` や `http://localhost:8080` など、一般的によく使われるローカル環境の URL に対してあらかじめ許可されていますので、ユーザーアカウントを取らなくても TileCloud の地図をお試しいただくことが可能です。

## スタイルについて

TileCloud はベクトルタイルという方式の地図を利用しているためスタイルの切り替えが容易できることが大きな特徴の一つです。

Embed API では、`data-style` という属性を使ってスタイルを指定することが可能になっています。

```html
<div
  class="tilecloud"
  style="width: 100%; height: 250px;"
  data-lat="35.675888"
  data-lng="139.744858"
  data-zoom="16"
  data-pitch="60"
  data-style="klokantech-3d"
>国会議事堂</div>
```

<div
  class="tilecloud"
  style="width: 100%; height: 250px;"
  data-lat="35.675888"
  data-lng="139.744858"
  data-zoom="16"
  data-pitch="60"
  data-style="klokantech-3d"
>国会議事堂</div>

## 自由度の高いライセンス

TileCloud の地図は、データに [オープンストリートマップ](https://www.openstreetmap.org/) を使用しており、オープンストリートマップのライセンスに基づき、ユーザーのみなさんは TileCloud の地図を自由に画像としてダウンロードしたり、印刷して配布したりすることも可能です。

また、それ以外にもシステムの多くの部分であらゆるオープンソースプロジェクトに依存おり、私達自身も上述の [Embed API](https://github.com/tilecloud/embed) も含めた多くの部分をオープンソースプロジェクトとして公開しています。