<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

## spore-kit-io

-   **See: [https://github.com/SporeUI/spore-kit/tree/master/packages/io][1]**

# 处理网络交互

### Examples

```javascript
// 统一引入 spore-kit
var $kit = require('spore-kit');
console.info($kit.io.getScript);

// 单独引入 spore-kit-io
var $io = require('spore-kit-io');
console.info($io.getScript);

// 单独引入一个方法
var $getScript = require('spore-kit-io/getScript');
```

## $

封装 iframe post 模式

## getScript

加载script

### Parameters

-   `options` **[object][2]** script选项
    -   `options.src` **[string][3]** script地址
    -   `options.charset` **[string][3]** script编码 (optional, default `'utf-8'`)
    -   `options.onLoad` **[function][4]?** script加载完成的回调函数

[1]: https://github.com/SporeUI/spore-kit/tree/master/packages/io

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[4]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function