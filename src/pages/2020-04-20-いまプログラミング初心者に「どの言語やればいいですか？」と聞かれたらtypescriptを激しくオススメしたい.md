---
templateKey: blog-post
title: いまプログラミング初心者に「どの言語やればいいですか？」と聞かれたらTypeScriptを激しくオススメしたい
date: 2020-04-20T14:28:07.128Z
featuredimage: /img/mamechi1110016_tp_v.jpg
tags:
  - TypeScript
  - ポエム
---
![](/img/mamechi1110016_tp_v.jpg)

（※画像は__[ぱくたそ https://www.pakutaso.com/20191102315post-24144.html](https://www.pakutaso.com/20191102315post-24144.html)__ 様のフリー素材です）

プログラミング初心者にどの言語から勉強してもらったら一番良いか、というテーマでぼんやり考えることがある。まだまだ自分自身が初心者に毛の生えた様な人間だが、おっさんになってからプログラミングを始めた身としては色んな人にプログラミングをやってみてもらいたいと思うのでこの問題についてはよく考える。

自分自身は一番最初はJavaから教えてもらった。Javaという選択肢は悪くなくて、型があるし、C言語系の文法を持ってる言語としては割と癖が少ないほうだし、WEBの開発をやる場合にはするっとPHPに移行できる。オブジェクト指向なのもよく、仕事で使う言語なんてどうせどれもオブジェクト指向だからやって損することは無い。また、Javaの環境構築に慣れてればAndroidの開発にも抵抗なく入れるだろうし、KotlinとかScalaとかGradleとかそのへんの割とイケてるおちんぎん高めの界隈にも入り込める。他にもC#はJavaを意識して作られてるのですごいJavaっぽいところがあり、C#でゲーム作りたいとか思ってる人にもまあまあいいと思う。マインクラフトはJavaで作られたという話だからJava自体ゲーム作れるらしい。

実際、自分はJavaのチュートリアルを終えたらそのままPHPを仕事で使うようになった。オブジェクト指向に慣れてたから自社フレームワークを頑張って読み解く事もできた。ネイティブアプリをObjective-CとかAndroid Javaで書くときも、最初にJavaやってなかったら死亡してたと思う。ASP.NETのWEBアプリをC#で書いたときもJavaの経験が生きた。MVCのフレームワークでテンプレートエンジンとか使うときもJSPで慣れてたからなんとかやれた。Javaそのものを仕事で使うことはあまりなかったが、Javaのおかげでプログラミングに良い入門の仕方ができたと思う。

しかし、今自分が、これからプログラミング始めようという初心者に対して「Javaがオススメだよ！」と言うかと問われたら、多分言わない。むしろ「Javaはやめとけ」と言うだろう。なんでかと言うとプログラミングそのものの楽しさを味わえるようになるまでの手間が大きいからだ。Javaは初心者がやるにはおまじないが多すぎるし環境作りも大変だ。サクッとプログラミングを始めたいなら動的型付け言語が向いてる。今ならPythonが良さそうだと思う。流行ってるから情報がたくさんあるし、各社WEBサービスのWEB API使ったりだとか好きなサイトのスクレイピングとかができるようになるとぐっとプログラミングが楽しくなる。

じゃあPythonをオススメするのかと問われたら、やっぱり最初の言語としてはおすすめしない。Javaの勉強をしながらPHPを少しだけ仕事でやったことがあるのだが、そういう半端な状態だとデータには「型」があるのだということがわからない。結果、バグの多いコードを書いてしまった。初心者こそ、データには型があるということをしっかり理解すべきだし、そこを理解できたらあとはどんな言語でも自分で学べるようになると思う。そういう意味ではPythonもPHPも同じなので、最初にしっかり勉強する言語としては動的型付け言語はあまり良いとは思えない。

だからやっぱり静的型付け言語が良いんだけど、前述の通りJavaは悪くないけどオススメできない。かと言ってスクリプト言語並に導入が簡単でプログラミングそのものを楽しめる言語は何か、、、とか考えると実はそんなに無いような気がする、という結論になっていた。だから、プログラミング初心者の人にどの言語やればいいですか？　と聞かれたら、まあとりあえず食いっぱぐれないPHPとかJavaScriptをやると良いんじゃないかな？　みたいなことを言ってお茶を濁していた。

しかし時代は変わった。というのに今更気づいた。TypeScriptだ。まあJavaScriptみたいに書いても動いてしまうのだけど、両方のやり方で書き分けられるというのもミソというかポイントだと思う。型を書くことの恩恵を身を持って体感できるからだ。そしてTypeScriptはAltJSなのでJavaScriptでできることはたいてい全てできるわけだから、WEBアプリ書けるしスマホアプリ作れる（ReactNativeとかで）しブラウザで動くゲームを作ることもできる。デスクトップアプリもElectronで作れる。NodeかDenoでサーバーサイドもできる。つまり初心者が思いつく「プログラミングであれやりたい！」が大抵できてしまう。これはすごいことだ。できることベースで言えばJavaScriptも同じなのだが、JavaScriptは癖が強いし動的型付け言語なので、自分の基準からするとしっかりとプログラミングを覚える言語として最適ではない。ところがTypeScriptはいい感じの言語だ。できることがたくさんあって、しかも静的型付け（もできる）言語となれば初心者にはうってつけで、オブジェクト指向だから仕事で使う系のプログラミングに慣れる事もできる。型の概念が身につくから、動的型付けのスクリプト言語をやるときもしっかりしたコードが書けるようになる（はず）。JavaScriptのスーパーセットだからもちろん関数型言語みたいな書き方もできる。TypeScriptは本当に色々な道へと初心者を誘ってくれる。TypeScriptさえやっておけば大体どの道に進むこともできそうな感じなのだ。最近は STS(Static TypeScript)というものも発明されたらしい（[https://www.infoq.com/jp/news/2019/11/static-typescript-msft-paper/](https://www.infoq.com/jp/news/2019/11/static-typescript-msft-paper/)）。将来的にはIoTにも使えるようになりそうだし、マシン語を直接吐き出す言語としても活躍しそうな予感がする。

というわけで、現時点で自分が初心者にオススメする言語は完全にTypeScript一択。TypeScriptやっとけば間違いない。仕事もある。たのしいプログラミングもできる。なんでもできる。初心者は騙されたと思ってTypeScriptやるべき。というか自分がTypeScriptもっとやりたい。TypeScriptで仕事とれるようにがんばります。