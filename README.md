# Web版 テキストマイニングツール (Quick Text Mining Tool)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Made with JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
[![Hosted on GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-lightgrey.svg)](https://pages.github.com/)

ブラウザだけで手軽に日本語のテキスト分析ができる、クライアントサイド完結型のテキストマイニングツールです。
アカウント登録やインストールは一切不要。思いついた瞬間に、文章のインサイトを発見できます。

**[➡️ ライブデモを試す](YOUR_GITHUB_PAGES_URL)**

---

## ✨ 主な機能

このツールは、入力された日本語テキストに対して以下の3つの主要な分析をリアルタイムで行います。

* **感情分析:** 文章全体がポジティブ、ネガティブ、またはニュートラルな感情を持っているかを判定します。
* **ワードクラウド:** 文章中で頻繁に出現する単語を、その頻度に応じて文字の大きさで可視化します。
* **頻出単語ランキング:** 特徴的な単語（名詞、動詞、形容詞）を抽出し、出現回数順にランキング表示します。



## 🚀 特徴

* **サーバー不要:** 全ての処理がユーザーのブラウザ内で完結するため、入力したテキストが外部に送信されることはありません。プライバシーとセキュリティが確保されています。
* **即時性:** テキストを貼り付けてボタンを押すだけで、すぐに分析結果を得られます。
* **直感的なUI:** モダンでクリーンなデザインを採用し、誰でも直感的に操作できます。
* **レスポンシブ対応:** PC、タブレット、スマートフォンなど、あらゆるデバイスで快適に利用できます。

## 🛠️ 使用技術

このツールは、以下のモダンなWeb技術を基盤に構築されています。

* **フロントエンド:**
    * HTML5
    * CSS3 (Flexbox, Grid, CSS Variables)
    * JavaScript (ES6+)
* **主要ライブラリ:**
    * [kuromoji.js](https://github.com/takuyaa/kuromoji.js/): 日本語の形態素解析エンジン。文章を単語に分割するために使用します。
    * [wordcloud2.js](https://github.com/timdream/wordcloud2.js/): ワードクラウドを美しく描画するためのライブラリです。

## 使い方

1.  **[ライブデモページ](YOUR_GITHUB_PAGES_URL)** にアクセスします。
2.  分析したい日本語の文章をテキストエリアにコピー＆ペーストします。
3.  「分析する」ボタンをクリックします。
4.  分析結果が画面に表示されるのを確認します。

## 💻 ローカルでの実行方法

このプロジェクトはサーバーサイドの処理を必要としないため、ローカルでの実行は非常に簡単です。

1.  このリポジトリをクローンします:
    ```bash
    git clone [https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git](https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git)
    ```
2.  クローンしたディレクトリに移動します:
    ```bash
    cd YOUR_REPOSITORY
    ```
3.  `index.html` ファイルを直接ブラウザで開きます。

これだけで、ローカル環境でツールを動かすことができます。

## 📄 ライセンス

このプロジェクトは **MITライセンス** の下で公開されています。詳しくは `LICENSE` ファイルをご覧ください。

---