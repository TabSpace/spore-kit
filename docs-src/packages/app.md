<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

## spore-kit-app

-   **See: [https://github.com/SporeUI/spore-kit/tree/master/packages/app][1]**

# 处理与客户端相关的交互

### Examples

```javascript
// 统一引入 spore-kit
var $kit = require('spore-kit');
console.info($kit.app.callUp);

// 单独引入 spore-kit-app
var $app = require('spore-kit-app');
console.info($app.callUp);

// 单独引入一个方法
var $callUp = require('spore-kit-app/callUp');
```

## callUp

此方法用于呼起本地客户端，呼起失败时，跳转到客户端下载地址或者中间页

-   首先需要客户端提供一个协议地址 protocol
-   然后通过浏览器访问该地址或者 iframe 访问该协议地址来触发客户端的打开动作
-   在设定好的超时时间 (waiting) 到达时进行检查
-   由于 IOS 下，跳转到 APP，页面 JS 会被阻止执行
-   所以如果超时时间大大超过了预期时间范围，可断定 APP 已被打开，此时触发 onTimeout 回调事件函数
-   对于 IOS，此时如果从 APP 返回页面，就可以通过 waitingLimit 时间差来判断是否要执行 fallback 回调事件函数
-   Android 下，跳转到 APP，页面 JS 会继续执行
-   此时无论 APP 是否已打开，都会触发 onFallback 事件与 fallback 回调事件函数
-   fallback 默认操作是跳转到 fallbackUrl 客户端下载地址或者中间页地址
-   这样对于没有安装 APP 的移动端，页面会在超时事件发生时，直接跳转到 fallbackUrl

### Parameters

-   `options` **[Object][2]** 
    -   `options.protocol` **[String][3]** 客户端APP呼起协议地址
    -   `options.fallbackUrl` **[String][3]** 客户端下载地址或者中间页地址
    -   `options.action` **[Function][4]** 自定义呼起客户端的方式
    -   `options.startTime` **[Number][5]** 呼起客户端的开始时间(ms)，以时间数值作为参数 (optional, default `newDate().getTime()`)
    -   `options.waiting` **[Number][5]** 呼起超时等待时间(ms) (optional, default `800`)
    -   `options.waitingLimit` **[Number][5]** 超时后检查回调是否在此时间限制内触发(ms) (optional, default `50`)
    -   `options.fallback` **[Function][4]** 默认回退操作 (optional, default `function(){window.location=fallbackUrl;}`)
    -   `options.onFallback` **[Function][4]** 呼起操作未能成功执行时触发的回调事件函数 (optional, default `null`)
    -   `options.onTimeout` **[Function][4]** 呼起超时触发的回调事件函数 (optional, default `null`)

### Examples

```javascript
callUp({
	startTime: Date.now(),
	waiting: 800,
	waitingLimit: 50,
	protocol : scheme,
	fallbackUrl : download,
	onFallback : function () {
		// should download
	}
});
```

[1]: https://github.com/SporeUI/spore-kit/tree/master/packages/app

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[4]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[5]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number
