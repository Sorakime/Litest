# Litest 2.0.0 Beta 3 Alpha 1 for Mac

## できること
- 時刻の確認
- 簡単な計算(Calc)
- 検索(Search)
- 以上のものをコマンドラインで実行(Commands)

という感じです。

Beta 3のまだ初期アルファ版なのでこれくらいで許してください・・・

## 概要
|　| |
|-:|:-|
|名前|Litest|
|バージョン|2.0.0 Beta 3 Alpha 1|
|ビルド|2105.23|
|開発者|Sorakime|
|フレームワーク|Electron|
|プラットフォーム|Linux(arm64) macOS Windows|
|ビルドしたソフト|`electron-builder`|
|環境|64ビットCPU 500MB以上の空き領域 たて1000ピクセル以上のディスプレイ|
|||
|ビルドPC|[iMac (21.5-inch, Late 2009)最低モデル](https://support.apple.com/kb/SP576?locale=ja_JP&viewlocale=ja_JP)|
||RAM 4GBから12GBへ増設済み|
|OS|macOS 10.13.6 High Sierra|
|Node.js|14.15.4|
|Electron|12.0.9|
|`electron-builder`|22.10.54|

## アプリケーション
- Calc
- Commands
- Search
- Settings

名前はそのまま。電卓、コマンド、検索、設定。

ここから、アプリケーションに関する解説していきます。

### Calc
電卓。特に何も面白味はない。

<img src="https://user-images.githubusercontent.com/69241694/119615033-e76c9b80-be39-11eb-82dc-6dcaa3a90751.png" alt="Calc">

普通につかえばいいだけ。

名前はそのまま。電卓、コマンド、検索、設定。しかし、キーボードでの入力は不可。それとバグがめっちゃ多いのも難点。まぁ正式版までにはちゃんとするんで。。。

変更点は特にないです。

### Commands
いたって普通のシェル(大嘘)

<img src="https://user-images.githubusercontent.com/69241694/119615976-061f6200-be3b-11eb-9358-33dad23287a6.png" alt="Commands">

変更点としては、文字を明るく(`#ffffff`)して太くし、背景を真っ黒(`#000000`)にして見やすくデザインよく

### Search

普通に検索すればいいだけ。

<img src="https://user-images.githubusercontent.com/69241694/119617388-c48fb680-be3c-11eb-9276-7b16983e7da2.png" alt="Search">

変更点はUIとか、あとエンター押下で移動できるようになりました。

Searchという表記消しました。

### Settings

壁紙の設定オンリー。なんかバグってるから直す。

![Settings](https://user-images.githubusercontent.com/69241694/119617795-23edc680-be3d-11eb-93e5-4abdc570e463.png)

つかえばわかる。ちなみに、`/config/config.json`に壁紙のパスというかなんというかは書かれています。内臓の3つの壁紙以外は指定できません。これはしばらく変わらない予定。

---

どうでもいいけど、約100%ダークモード対応です。まぁ、ライトモードの時微妙になってる所はSettingsにある。一つ。`<code>`のところ色が暗いくらいかな。

以上
