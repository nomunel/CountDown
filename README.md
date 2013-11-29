CountDown
=========
## Sample
https://github.com/nomunel/CountDown/blob/master/sample.html
```
<p id="js_countdown3" class="imgTimer"></p>
<script>
var countdown3 = new ui.CountDown({
    timeElm: js_countdown3,
    startTime: new Date('2013/09/04 13:00:00'),
    endTime: new Date('2013/09/04 13:00:02'),
    cssControl: true,
    hmsType: {h:false, m:true, s:true}
});
</script>
```


## 引数

### timeElm
タイマーを表示したい要素を指定
```
timeElm: js_countdown3,
```
```
timeElm: document.getElementById('js_countdown3'),
```
```
timeElm: document.getElementsByClassName('js_countdown3')[0],
```
指定した要素の子要素として
```
<span class="h></span>
<span class="m></span>
<span class="s></span>
```
が生成され、その中に数値が入ります。
区切りやビジュアル表現は、CSSで制御します。


### startTime
Dateオブジェクトで、カウントダウン開始日時を指定
```
startTime: new Date('2013/09/04 13:00:00'),
```


### endTime
Dateオブジェクトで、カウントダウン終了日時を指定
```
endTime: new Date('2013/09/04 13:00:02'),
```


### cssControl
cssControlオプションを true にすると、数値ではなく
```
<span class="num" title="{0-9}"></span>
<span class="num" title="{0-9}"></span>
```
が生成されます。
時間を画像で表現したい場合に用います。


### hmsType
時分秒（h/m/s）の表示・非表示を個別に制御できます。
```
hmsType: {h:false, m:true, s:true}
```
