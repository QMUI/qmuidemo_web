var comments = [[{"description":"适配多倍屏的 CSS 选择器\n\n","commentRange":{"start":86,"end":90},"context":{"type":"mixin","name":"screenResolution","code":"\n  @media (-webkit-min-device-pixel-ratio: $num),\n    (min--moz-device-pixel-ratio: $num),\n    (min-device-pixel-ratio: $num),\n    (min-resolution: #{$num}dppx),\n    (min-resolution: #{$num*96}dpi) {\n    @content;\n  }\n","line":{"start":91,"end":99}},"group":["设备适配"],"parameter":[{"type":"Number","name":"num","description":"需要适配的屏幕倍数"}],"author":["Clear, Molice, Zhoon, Kayo，Jeff"],"access":"public","content":"","require":[],"file":{"path":"_adaptation.scss","name":"_adaptation.scss"},"usedBy":[{"description":"在移动设备上生成 1px 宽的边框，direction 支持 all, top, bottom, left, right, horizontal, vertical 7个 direction 值，position 支持 outside 和 inside 两个值\n\n","context":{"type":"mixin","name":"onePixelBorder","code":"\n  @include borderStyleForOnePixel($direction, $color);\n  border-radius: $borderRadius;\n  @include screenResolution(2) {\n    position: relative;\n    border: 0;\n    &:after {\n      content: \"\";\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 200%;\n      height: 200%;\n      border-radius: $borderRadius * 2;\n      @include borderStyleForOnePixel($direction, $color);\n      transform: scale(.5);\n      transform-origin: 0 0;\n      @if $position == inside {\n        @include box_sizing(border-box);\n      }\n      pointer-events: none;\n    }\n  }\n  @include screenResolution(3) {\n    &:after {\n      width: 300%;\n      height: 300%;\n      border-radius: $borderRadius * 3;\n      transform: scale(.3333);\n    }\n  }\n","line":{"start":169,"end":200}}},{"description":"在移动设备上生成 1px 宽的边框，direction 支持 all, top, bottom, left, right, horizontal, vertical 7个 direction 值，position 支持 outside 和 inside 两个值\n\n","context":{"type":"mixin","name":"onePixelBorder","code":"\n  @include borderStyleForOnePixel($direction, $color);\n  border-radius: $borderRadius;\n  @include screenResolution(2) {\n    position: relative;\n    border: 0;\n    &:after {\n      content: \"\";\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 200%;\n      height: 200%;\n      border-radius: $borderRadius * 2;\n      @include borderStyleForOnePixel($direction, $color);\n      transform: scale(.5);\n      transform-origin: 0 0;\n      @if $position == inside {\n        @include box_sizing(border-box);\n      }\n      pointer-events: none;\n    }\n  }\n  @include screenResolution(3) {\n    &:after {\n      width: 300%;\n      height: 300%;\n      border-radius: $borderRadius * 3;\n      transform: scale(.3333);\n    }\n  }\n","line":{"start":169,"end":200}}}]},{"description":"适配 Pad 的 CSS 选择器，例如有响应式布局中适配 Pad 的代码可以包在这里\n\n","commentRange":{"start":101,"end":104},"context":{"type":"mixin","name":"screenForPad","code":"\n  @media (min-width:$screen_width_pad) {\n    @content;\n  }\n  @media \\0screen {\n    @content;\n  }\n","line":{"start":105,"end":112}},"group":["设备适配"],"author":["Clear, Molice, Zhoon, Kayo，Jeff"],"access":"public","content":"","require":[],"file":{"path":"_adaptation.scss","name":"_adaptation.scss"}},{"description":"适配手机的 CSS 选择器，与 screenForPad 方法对应，可以用于包裹只在 Phone 版使用的代码，不在 Pad 版使用的样式\n\n","commentRange":{"start":114,"end":117},"context":{"type":"mixin","name":"screenForPhone","code":"\n  @media (max-width:$screen_width_pad) {\n    @content;\n  }\n","line":{"start":118,"end":122}},"group":["设备适配"],"author":["Clear, Molice, Zhoon, Kayo，Jeff"],"access":"public","content":"","require":[],"file":{"path":"_adaptation.scss","name":"_adaptation.scss"}},{"description":"适配 IE 10 及以上版本的 CSS 选择器，需要针对 IE10 或以上版本的样式可以写在这里\n\n","commentRange":{"start":124,"end":127},"context":{"type":"mixin","name":"screenForIE10AndLater","code":"\n  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n    @content;\n  }\n","line":{"start":128,"end":132}},"group":["设备适配"],"author":["Clear, Molice, Zhoon, Kayo，Jeff"],"access":"public","content":"","require":[],"file":{"path":"_adaptation.scss","name":"_adaptation.scss"}},{"description":"单独适配 IE 8 CSS 选择器，需要仅针对 IE 8 的样式可以写在这里\n\n","commentRange":{"start":134,"end":137},"context":{"type":"mixin","name":"forIE8","code":"\n  @media \\0screen {\n    @content;\n  }\n","line":{"start":138,"end":142}},"group":["设备适配"],"author":["Clear, Molice, Zhoon, Kayo，Jeff"],"access":"public","content":"","file":{"path":"_adaptation.scss","name":"_adaptation.scss"}},{"description":"单独适配 IE 9 CSS 选择器，需要仅针对 IE 9（不包括 IE 10 等更高版本） 的样式可以写在这里\n\n","commentRange":{"start":144,"end":147},"context":{"type":"mixin","name":"forIE9","code":"\n  @media all and (min-width:0\\0) and (min-resolution: .001dpcm) {\n    @content;\n  }\n","line":{"start":148,"end":152}},"group":["设备适配"],"author":["Clear, Molice, Zhoon, Kayo，Jeff"],"access":"public","content":"","require":[],"file":{"path":"_adaptation.scss","name":"_adaptation.scss"}}],[{"description":"产生正方形的宽高\n\n","commentRange":{"start":11,"end":14},"context":{"type":"mixin","name":"square","code":"\n  width: $length;\n  height: $length;\n","line":{"start":15,"end":18}},"parameter":[{"type":"Measure","name":"length","description":"宽高的长度"}],"author":["Kayo"],"group":["样式特效"],"access":"public","require":[],"file":{"path":"tool/_effect.scss","name":"_effect.scss"},"usedBy":[{"description":"用以生成十字架图标\n\n","context":{"type":"mixin","name":"cross","code":"\n  position: relative;\n  @include square($crossLength);\n  &:before,\n  &:after {\n    content: \"\";\n    font-size: 0;\n    line-height: 0;\n    position: absolute;\n    background-color: $crossLineColor;\n  }\n  &:before {\n    left: getLengthMaxIntegerCenter($crossLength,$crossLineThickness);\n    top: 0;\n    width: $crossLineThickness;\n    height: 100%;\n  }\n  &:after {\n    left: 0;\n    top: getLengthMaxIntegerCenter($crossLength,$crossLineThickness);\n    width: 100%;\n    height: $crossLineThickness;\n  }\n","line":{"start":101,"end":124}}}]},{"description":"利用 absolute 把指定元素水平垂直居中布局，适用于已知元素宽高的情况下\n\n","commentRange":{"start":20,"end":24},"context":{"type":"mixin","name":"absoluteCenter","code":"\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin: (-$height)/2 0 0 (-$width)/2;\n","line":{"start":25,"end":30}},"parameter":[{"type":"Measure","name":"width","description":"元素的宽度"},{"type":"Measure","name":"height","description":"元素的高度"}],"author":["Kayo"],"group":["样式特效"],"access":"public","require":[],"file":{"path":"tool/_effect.scss","name":"_effect.scss"}},{"description":"CSS Border 三角形\n\n","commentRange":{"start":42,"end":50},"context":{"type":"mixin","name":"triangle","code":"\n  @extend %triangleCommonStyle;\n  @if not($function_mobileOnly) {\n    _border-color: $ie6borderColor;\n    _filter: chroma(color=$ie6borderColor);\n  }\n  /* 向上小三角 */\n  @if $direction == top {\n    border-width: $height $width / 2;\n    border-top: 0;\n    border-bottom-color: $borderColor;\n    @if not($function_mobileOnly) {\n      _border-bottom-color: $borderColor;\n    }\n  }\n  /* 向下小三角 */\n  @else if $direction == bottom {\n    border-width: $height $width / 2;\n    border-bottom: 0;\n    border-top-color: $borderColor;\n    @if not($function_mobileOnly) {\n      _border-top-color: $borderColor;\n    }\n  }\n  /* 向左小三角 */\n  @else if $direction == left {\n    border-width: $width / 2 $height ;\n    border-left: 0;\n    border-right-color: $borderColor;\n    @if not($function_mobileOnly) {\n      _border-right-color: $borderColor;\n    }\n  }\n  /* 向右小三角 */\n  @else if $direction == right {\n    border-width: $width / 2 $height;\n    border-right: 0;\n    border-left-color: $borderColor;\n    @if not($function_mobileOnly) {\n      _border-left-color: $borderColor;\n    }\n  }\n","line":{"start":51,"end":93}},"parameter":[{"type":"Measure","name":"width","description":"三角形的底边的宽"},{"type":"Measure","name":"height","description":"三角形的高"},{"type":"String","name":"direction","description":"三角形的方向（即与底边相对的顶点指向的方向）"},{"type":"Color","name":"borderColor","description":"三角形的边框色"},{"type":"Color","name":"ie6borderColor","description":"IE6 不支持 border-color: transparent,而 border 三角形利用了这个特性，因此如果需要兼容 IE6，则需要填写 $ie6borderColor，颜色值一般为三角形背后元素的颜色。","defaultValue":"#f00"}],"throw":["由于方法内包含了有 $width / 2 的计算，因此如果 $width 的值为奇数，则实际上计算出的三角形会偏小，建议 $width 不要使用奇数。"],"author":["Kayo"],"group":["样式特效"],"access":"public","require":[],"file":{"path":"tool/_effect.scss","name":"_effect.scss"}},{"description":"用以生成十字架图标\n\n","commentRange":{"start":95,"end":100},"context":{"type":"mixin","name":"cross","code":"\n  position: relative;\n  @include square($crossLength);\n  &:before,\n  &:after {\n    content: \"\";\n    font-size: 0;\n    line-height: 0;\n    position: absolute;\n    background-color: $crossLineColor;\n  }\n  &:before {\n    left: getLengthMaxIntegerCenter($crossLength,$crossLineThickness);\n    top: 0;\n    width: $crossLineThickness;\n    height: 100%;\n  }\n  &:after {\n    left: 0;\n    top: getLengthMaxIntegerCenter($crossLength,$crossLineThickness);\n    width: 100%;\n    height: $crossLineThickness;\n  }\n","line":{"start":101,"end":124}},"parameter":[{"type":"Measure","name":"crossLength","description":"十字架的大小","defaultValue":"26px"},{"type":"Measure","name":"crossLineThickness","description":"十字架线条的粗细","defaultValue":"2px"},{"type":"Color","name":"crossLineColor","description":"十字架的颜色","defaultValue":"#2685d2"}],"author":["Kayo"],"group":["样式特效"],"access":"public","require":[{"type":"mixin","name":"square"},{"type":"function","name":"getLengthMaxIntegerCenter"},{"type":"function","name":"getLengthMaxIntegerCenter"}],"file":{"path":"tool/_effect.scss","name":"_effect.scss"}},{"description":"使得指定的元素产生 Block Formatting Contexts 或 hasLayout\n\n","commentRange":{"start":126,"end":128},"context":{"type":"mixin","name":"bfc","code":"\n  overflow: hidden;\n  zoom: 1;\n","line":{"start":129,"end":132}},"author":["Kayo"],"group":["样式特效"],"access":"public","file":{"path":"tool/_effect.scss","name":"_effect.scss"}},{"description":"在移动设备上生成 1px 宽的边框，direction 支持 all, top, bottom, left, right, horizontal, vertical 7个 direction 值，position 支持 outside 和 inside 两个值\n\n","commentRange":{"start":161,"end":168},"context":{"type":"mixin","name":"onePixelBorder","code":"\n  @include borderStyleForOnePixel($direction, $color);\n  border-radius: $borderRadius;\n  @include screenResolution(2) {\n    position: relative;\n    border: 0;\n    &:after {\n      content: \"\";\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 200%;\n      height: 200%;\n      border-radius: $borderRadius * 2;\n      @include borderStyleForOnePixel($direction, $color);\n      transform: scale(.5);\n      transform-origin: 0 0;\n      @if $position == inside {\n        @include box_sizing(border-box);\n      }\n      pointer-events: none;\n    }\n  }\n  @include screenResolution(3) {\n    &:after {\n      width: 300%;\n      height: 300%;\n      border-radius: $borderRadius * 3;\n      transform: scale(.3333);\n    }\n  }\n","line":{"start":169,"end":200}},"parameter":[{"type":"String","name":"direction","description":"边框的方向，支持 all（所有方向），top（上边框），right（右边框），bottom（下边框），left（左边框），horizontal（左右边框），vertical（上下边框）","defaultValue":"all"},{"type":"Color","name":"color","description":"边框的颜色"},{"type":"String","name":"position","description":"边框的位置，支持 outside 和 inside","defaultValue":"outside"},{"type":"Number","name":"borderRadius","description":"边框的圆角","defaultValue":"0"}],"throw":["在多倍屏下，本方法会利用元素的 ::after 做效果，因此需要注意使用了该方法后 ::after 则尽量避免添加样式，以免影响效果"],"author":["Kayo"],"group":["样式特效"],"access":"public","require":[{"type":"mixin","name":"screenResolution"},{"type":"mixin","name":"screenResolution"}],"file":{"path":"tool/_effect.scss","name":"_effect.scss"}}],[{"description":"获取 CSS 长度值属性（例如：margin，padding，border-width 等）在某个方向的值\n\n","commentRange":{"start":10,"end":31},"context":{"type":"function","name":"getLengthDirectionValue","code":"\n  // 声明变量\n  $top: 0;\n  $right: 0;\n  $bottom: 0;\n  $left: 0;\n  // 获取 $property 列表值中值的个数，从而判断是哪种 CSS length 的写法\n  $propertyLength: length($property);\n  @if $propertyLength == 1 {\n    $top: $property;\n    $right: $property;\n    $bottom: $property;\n    $left: $property;\n  } @else if $propertyLength == 2 {\n    $top: nth($property, 1);\n    $right: nth($property, 2);\n    $bottom: nth($property, 1);\n    $left: nth($property, 2);\n  } @else if $propertyLength == 3 {\n    $top: nth($property, 1);\n    $right: nth($property, 2);\n    $bottom: nth($property, 3);\n    $left: nth($property, 2);\n  } @else if $propertyLength == 4 {\n    $top: nth($property, 1);\n    $right: nth($property, 2);\n    $bottom: nth($property, 3);\n    $left: nth($property, 4);\n  } @else {\n    @return 0;\n  }\n\n  // 根据参数中的方向值输出需要的结果\n  @if $direction == top {\n    @return $top;\n  } @else if $direction == right {\n    @return $right;\n  } @else if $direction == bottom {\n    @return $bottom;\n  } @else if $direction == left {\n    @return $left;\n  } @else if $direction == horizontal {\n    @if $left != $right {\n      @warn \"左边（#{$left}）与右边（#{$right}）的值并不相等，不应该直接使用 horizontal 这个方向\";\n    }\n    @return $left;\n  } @else if $direction == vertical {\n    @if $top != $bottom {\n      @warn \"上边（#{$top}）与下边（#{$bottom}）的值并不相等，不应该直接使用 vertical 这个方向\";\n    }\n    @return $top;\n  } @else {\n    @return 0;\n  }\n","line":{"start":32,"end":86}},"parameter":[{"type":"String","name":"property","description":"记录着长度值的 SASS 变量"},{"type":"String","name":"direction","description":"需要获取的方向，可选值为 top，right，bottom，left，horizontal，vertical，其中 horizontal 和 vertical 分别需要长度值的左右或上下方向值相等，否则会报 Warning。"}],"example":[{"type":"scss","code":"// UI 界面的一致性往往要求相似外观的组件保持距离、颜色等元素统一，例如：\n// 搜索框和普通输入框分开两种结构处理，但希望搜索框的搜索 icon 距离左边的空白与\n// 普通输入框光标距离左边的空白保持一致，就需要获取普通输入框的 padding-left\n$textField_padding: 4px 5px;\n.dm_textField {\n  padding: $textField_padding;\n}\n.dm_searchInput {\n  position: relative;\n  ...\n}\n.dm_searchInput_icon {\n  position: absolute;\n  left: getLengthDirectionValue($textField_padding, left);\n  ...\n}"}],"author":["Kayo"],"group":["数值计算"],"access":"public","require":[],"file":{"path":"tool/_calculate.scss","name":"_calculate.scss"}},{"description":"获取两个 CSS 长度值的中间值并取整，通常可用于子元素在父元素中需要居中时计算两者高度差\n\n","commentRange":{"start":88,"end":92},"context":{"type":"function","name":"getLengthMaxIntegerCenter","code":"\n  $center: ($parent - $child) / 2;\n  // 注意这里的取整使用 ceil 而不是 floor 并不是随意写的，这是模拟现代浏览器对于小数点长度值的表现而定的。\n  // 例如，margin-top: 10.5px 在现代浏览器中会表现为 margin-top: 11px 而不是 margin-top: 10px\n  // 又例如，margin-top: -10.5px 在现代浏览器的表现等同于 margin-top: -10px 而不是 margin-top: -11px\n  // 即小数长度值会被当成不小于该小数的下一个整数去处理，也就是 ceil 的效果。所以不要随意改成 floor，其他长度值方法也应该如此处理\n  @return ceil($center);\n","line":{"start":93,"end":100}},"parameter":[{"type":"Number | String","name":"parent","description":"较大的长度值"},{"type":"Number | String","name":"child","description":"较小的长度值"}],"author":["Kayo"],"group":["数值计算"],"access":"public","require":[],"file":{"path":"tool/_calculate.scss","name":"_calculate.scss"},"usedBy":[{"description":"用以生成十字架图标\n\n","context":{"type":"mixin","name":"cross","code":"\n  position: relative;\n  @include square($crossLength);\n  &:before,\n  &:after {\n    content: \"\";\n    font-size: 0;\n    line-height: 0;\n    position: absolute;\n    background-color: $crossLineColor;\n  }\n  &:before {\n    left: getLengthMaxIntegerCenter($crossLength,$crossLineThickness);\n    top: 0;\n    width: $crossLineThickness;\n    height: 100%;\n  }\n  &:after {\n    left: 0;\n    top: getLengthMaxIntegerCenter($crossLength,$crossLineThickness);\n    width: 100%;\n    height: $crossLineThickness;\n  }\n","line":{"start":101,"end":124}}},{"description":"用以生成十字架图标\n\n","context":{"type":"mixin","name":"cross","code":"\n  position: relative;\n  @include square($crossLength);\n  &:before,\n  &:after {\n    content: \"\";\n    font-size: 0;\n    line-height: 0;\n    position: absolute;\n    background-color: $crossLineColor;\n  }\n  &:before {\n    left: getLengthMaxIntegerCenter($crossLength,$crossLineThickness);\n    top: 0;\n    width: $crossLineThickness;\n    height: 100%;\n  }\n  &:after {\n    left: 0;\n    top: getLengthMaxIntegerCenter($crossLength,$crossLineThickness);\n    width: 100%;\n    height: $crossLineThickness;\n  }\n","line":{"start":101,"end":124}}}]},{"description":"获取数值的n次幂的值\n\n","commentRange":{"start":102,"end":109},"context":{"type":"function","name":"pow","code":"\n  $result: 1;\n  @if $pow > 0 {\n    @for $i from 1 through $pow {\n      $result: $result * $number;\n    }\n  } @else if $pow < 0 {\n    @for $i from $pow to 0 {\n      $result: $result / $number;\n    }\n  }\n  @return $result;\n","line":{"start":110,"end":122}},"parameter":[{"type":"Number","name":"number","description":"底数"},{"type":"Number","name":"pow","description":"幂数"}],"example":[{"type":"scss","code":"pow(10, 5) => 100000\npow(10, -1) => 0.1"}],"author":["Kayo"],"group":["数值计算"],"access":"public","require":[],"file":{"path":"tool/_calculate.scss","name":"_calculate.scss"},"usedBy":[{"description":"将数值格式化为指定小数位数的数字。\n\n","context":{"type":"function","name":"toFixed","code":"\n  $result: null;\n  @if $type == round {\n    $result: round($number * pow(10, $precision)) / pow(10, $precision);\n  } @else if $type == floor {\n    $result: floor($number * pow(10, $precision)) / pow(10, $precision);\n  } @else if $type == ceil {\n    $result: ceil($number * pow(10, $precision)) / pow(10, $precision);\n  } @else {\n    @warn \"type参数输入有误,请选择输入'round'、'floor'、'ceil'其中一个\";\n    $result: $number;\n  }\n  @return $result;\n","line":{"start":137,"end":150}}},{"description":"将数值格式化为指定小数位数的数字。\n\n","context":{"type":"function","name":"toFixed","code":"\n  $result: null;\n  @if $type == round {\n    $result: round($number * pow(10, $precision)) / pow(10, $precision);\n  } @else if $type == floor {\n    $result: floor($number * pow(10, $precision)) / pow(10, $precision);\n  } @else if $type == ceil {\n    $result: ceil($number * pow(10, $precision)) / pow(10, $precision);\n  } @else {\n    @warn \"type参数输入有误,请选择输入'round'、'floor'、'ceil'其中一个\";\n    $result: $number;\n  }\n  @return $result;\n","line":{"start":137,"end":150}}},{"description":"将数值格式化为指定小数位数的数字。\n\n","context":{"type":"function","name":"toFixed","code":"\n  $result: null;\n  @if $type == round {\n    $result: round($number * pow(10, $precision)) / pow(10, $precision);\n  } @else if $type == floor {\n    $result: floor($number * pow(10, $precision)) / pow(10, $precision);\n  } @else if $type == ceil {\n    $result: ceil($number * pow(10, $precision)) / pow(10, $precision);\n  } @else {\n    @warn \"type参数输入有误,请选择输入'round'、'floor'、'ceil'其中一个\";\n    $result: $number;\n  }\n  @return $result;\n","line":{"start":137,"end":150}}},{"description":"将数值格式化为指定小数位数的数字。\n\n","context":{"type":"function","name":"toFixed","code":"\n  $result: null;\n  @if $type == round {\n    $result: round($number * pow(10, $precision)) / pow(10, $precision);\n  } @else if $type == floor {\n    $result: floor($number * pow(10, $precision)) / pow(10, $precision);\n  } @else if $type == ceil {\n    $result: ceil($number * pow(10, $precision)) / pow(10, $precision);\n  } @else {\n    @warn \"type参数输入有误,请选择输入'round'、'floor'、'ceil'其中一个\";\n    $result: $number;\n  }\n  @return $result;\n","line":{"start":137,"end":150}}},{"description":"将数值格式化为指定小数位数的数字。\n\n","context":{"type":"function","name":"toFixed","code":"\n  $result: null;\n  @if $type == round {\n    $result: round($number * pow(10, $precision)) / pow(10, $precision);\n  } @else if $type == floor {\n    $result: floor($number * pow(10, $precision)) / pow(10, $precision);\n  } @else if $type == ceil {\n    $result: ceil($number * pow(10, $precision)) / pow(10, $precision);\n  } @else {\n    @warn \"type参数输入有误,请选择输入'round'、'floor'、'ceil'其中一个\";\n    $result: $number;\n  }\n  @return $result;\n","line":{"start":137,"end":150}}},{"description":"将数值格式化为指定小数位数的数字。\n\n","context":{"type":"function","name":"toFixed","code":"\n  $result: null;\n  @if $type == round {\n    $result: round($number * pow(10, $precision)) / pow(10, $precision);\n  } @else if $type == floor {\n    $result: floor($number * pow(10, $precision)) / pow(10, $precision);\n  } @else if $type == ceil {\n    $result: ceil($number * pow(10, $precision)) / pow(10, $precision);\n  } @else {\n    @warn \"type参数输入有误,请选择输入'round'、'floor'、'ceil'其中一个\";\n    $result: $number;\n  }\n  @return $result;\n","line":{"start":137,"end":150}}},{"description":"计算 sin 三角函数\n\n","context":{"type":"function","name":"sin","code":"\n  $sin: 0;\n  $angle: rad($angle);\n  @for $i from 0 through 10 {\n    $sin: $sin + pow(-1, $i) * pow($angle, (2 * $i + 1)) / factorial(2 * $i + 1);\n  }\n  @return $sin;\n","line":{"start":198,"end":205}}},{"description":"计算 sin 三角函数\n\n","context":{"type":"function","name":"sin","code":"\n  $sin: 0;\n  $angle: rad($angle);\n  @for $i from 0 through 10 {\n    $sin: $sin + pow(-1, $i) * pow($angle, (2 * $i + 1)) / factorial(2 * $i + 1);\n  }\n  @return $sin;\n","line":{"start":198,"end":205}}},{"description":"计算 cos 三角函数\n\n","context":{"type":"function","name":"cos","code":"\n  $cos: 0;\n  $angle: rad($angle);\n  @for $i from 0 through 10 {\n    $cos: $cos + pow(-1, $i) * pow($angle, 2 * $i) / factorial(2 * $i);\n  }\n  @return $cos;\n","line":{"start":214,"end":221}}},{"description":"计算 cos 三角函数\n\n","context":{"type":"function","name":"cos","code":"\n  $cos: 0;\n  $angle: rad($angle);\n  @for $i from 0 through 10 {\n    $cos: $cos + pow(-1, $i) * pow($angle, 2 * $i) / factorial(2 * $i);\n  }\n  @return $cos;\n","line":{"start":214,"end":221}}}]},{"description":"将数值格式化为指定小数位数的数字。\n\n","commentRange":{"start":124,"end":136},"context":{"type":"function","name":"toFixed","code":"\n  $result: null;\n  @if $type == round {\n    $result: round($number * pow(10, $precision)) / pow(10, $precision);\n  } @else if $type == floor {\n    $result: floor($number * pow(10, $precision)) / pow(10, $precision);\n  } @else if $type == ceil {\n    $result: ceil($number * pow(10, $precision)) / pow(10, $precision);\n  } @else {\n    @warn \"type参数输入有误,请选择输入'round'、'floor'、'ceil'其中一个\";\n    $result: $number;\n  }\n  @return $result;\n","line":{"start":137,"end":150}},"parameter":[{"type":"Number","name":"number","description":"待格式化的数值"},{"type":"Number","name":"precision","description":"精确度(精确到小数点后几位)","defaultValue":"0"},{"type":"String","name":"type","description":"格式化方式(\"round\":\"四舍五入\",\"floor\":\"向下取整\",\"ceil\":\"向上取整\")","defaultValue":"round"}],"example":[{"type":"scss","code":"toFixed(3.1415926535898) => 3.14\ntoFixed(3.1415926535898, 4, floor) => 3.1415\ntoFixed(3.1415926535898, 4, ceil) => 3.1416\ntoFixed(-3.1415926535898, 4, floor) => -3.1416\ntoFixed(-3.1415926535898, 4, ceil) => -3.1415\ntoFixed(3.1415926535898px) => 3.14px"}],"author":["Kayo"],"group":["数值计算"],"access":"public","require":[{"type":"function","name":"pow"},{"type":"function","name":"pow"},{"type":"function","name":"pow"},{"type":"function","name":"pow"},{"type":"function","name":"pow"},{"type":"function","name":"pow"}],"file":{"path":"tool/_calculate.scss","name":"_calculate.scss"}},{"description":"阶乘计算\n\n","commentRange":{"start":152,"end":157},"context":{"type":"function","name":"factorial","code":"\n  $value: 1;\n  @if $number > 0 {\n    @for $i from 1 through $number {\n      $value: $value * $i;\n    }\n  }\n  @return $value;\n","line":{"start":158,"end":166}},"parameter":[{"type":"Number","name":"number","description":"待进行阶乘计算的数值"}],"example":[{"type":"scss","code":"factorial(4) => 4 * 3 * 2 * 1 => 24"}],"author":["Kayo"],"group":["数值计算"],"access":"public","require":[],"file":{"path":"tool/_calculate.scss","name":"_calculate.scss"},"usedBy":[{"description":"计算 sin 三角函数\n\n","context":{"type":"function","name":"sin","code":"\n  $sin: 0;\n  $angle: rad($angle);\n  @for $i from 0 through 10 {\n    $sin: $sin + pow(-1, $i) * pow($angle, (2 * $i + 1)) / factorial(2 * $i + 1);\n  }\n  @return $sin;\n","line":{"start":198,"end":205}}},{"description":"计算 cos 三角函数\n\n","context":{"type":"function","name":"cos","code":"\n  $cos: 0;\n  $angle: rad($angle);\n  @for $i from 0 through 10 {\n    $cos: $cos + pow(-1, $i) * pow($angle, 2 * $i) / factorial(2 * $i);\n  }\n  @return $cos;\n","line":{"start":214,"end":221}}}]},{"description":"获取 π 的值（11位小数精度）\n\n","commentRange":{"start":168,"end":170},"context":{"type":"function","name":"pi","code":"\n  @return 3.14159265359;\n","line":{"start":171,"end":173}},"author":["Kayo"],"group":["数值计算"],"access":"public","file":{"path":"tool/_calculate.scss","name":"_calculate.scss"},"usedBy":[{"description":"通过角度计算弧度\n\n","context":{"type":"function","name":"rad","code":"\n  $unit: unit($angle);\n  $unitless: $angle / ($angle * 0 + 1);\n  @if $unit == deg {\n    $unitless: $unitless / 180 * pi();\n  }\n  @return $unitless;\n","line":{"start":182,"end":189}}}]},{"description":"通过角度计算弧度\n\n","commentRange":{"start":175,"end":181},"context":{"type":"function","name":"rad","code":"\n  $unit: unit($angle);\n  $unitless: $angle / ($angle * 0 + 1);\n  @if $unit == deg {\n    $unitless: $unitless / 180 * pi();\n  }\n  @return $unitless;\n","line":{"start":182,"end":189}},"parameter":[{"type":"Number","name":"angle","description":"需要被转换为弧度的角度值"}],"example":[{"type":"scss","code":"rad(180deg) -> 3.14159\nrad(45deg) -> 0.7854"}],"author":["Kayo"],"group":["数值计算"],"access":"public","require":[{"type":"function","name":"pi"}],"file":{"path":"tool/_calculate.scss","name":"_calculate.scss"},"usedBy":[{"description":"计算 sin 三角函数\n\n","context":{"type":"function","name":"sin","code":"\n  $sin: 0;\n  $angle: rad($angle);\n  @for $i from 0 through 10 {\n    $sin: $sin + pow(-1, $i) * pow($angle, (2 * $i + 1)) / factorial(2 * $i + 1);\n  }\n  @return $sin;\n","line":{"start":198,"end":205}}},{"description":"计算 cos 三角函数\n\n","context":{"type":"function","name":"cos","code":"\n  $cos: 0;\n  $angle: rad($angle);\n  @for $i from 0 through 10 {\n    $cos: $cos + pow(-1, $i) * pow($angle, 2 * $i) / factorial(2 * $i);\n  }\n  @return $cos;\n","line":{"start":214,"end":221}}}]},{"description":"计算 sin 三角函数\n\n","commentRange":{"start":191,"end":197},"context":{"type":"function","name":"sin","code":"\n  $sin: 0;\n  $angle: rad($angle);\n  @for $i from 0 through 10 {\n    $sin: $sin + pow(-1, $i) * pow($angle, (2 * $i + 1)) / factorial(2 * $i + 1);\n  }\n  @return $sin;\n","line":{"start":198,"end":205}},"parameter":[{"type":"Number","name":"angle","description":"需要进行 sin 计算的角度值"}],"example":[{"type":"scss","code":"sin(45deg) -> 0.70711\nsin(90deg) -> 1"}],"author":["Kayo"],"group":["数值计算"],"access":"public","require":[{"type":"function","name":"rad"},{"type":"function","name":"pow"},{"type":"function","name":"pow"},{"type":"function","name":"factorial"}],"file":{"path":"tool/_calculate.scss","name":"_calculate.scss"},"usedBy":[{"description":"计算 tan 三角函数\n\n","context":{"type":"function","name":"tan","code":"\n  @return sin($angle) / cos($angle);\n","line":{"start":230,"end":232}}}]},{"description":"计算 cos 三角函数\n\n","commentRange":{"start":207,"end":213},"context":{"type":"function","name":"cos","code":"\n  $cos: 0;\n  $angle: rad($angle);\n  @for $i from 0 through 10 {\n    $cos: $cos + pow(-1, $i) * pow($angle, 2 * $i) / factorial(2 * $i);\n  }\n  @return $cos;\n","line":{"start":214,"end":221}},"parameter":[{"type":"Number","name":"angle","description":"需要进行 cos 计算的角度值"}],"example":[{"type":"scss","code":"cos(45deg) -> 0.70711\ncos(90deg) -> 0"}],"author":["Kayo"],"group":["数值计算"],"access":"public","require":[{"type":"function","name":"rad"},{"type":"function","name":"pow"},{"type":"function","name":"pow"},{"type":"function","name":"factorial"}],"file":{"path":"tool/_calculate.scss","name":"_calculate.scss"},"usedBy":[{"description":"计算 tan 三角函数\n\n","context":{"type":"function","name":"tan","code":"\n  @return sin($angle) / cos($angle);\n","line":{"start":230,"end":232}}}]},{"description":"计算 tan 三角函数\n\n","commentRange":{"start":223,"end":229},"context":{"type":"function","name":"tan","code":"\n  @return sin($angle) / cos($angle);\n","line":{"start":230,"end":232}},"parameter":[{"type":"Number","name":"angle","description":"需要进行 tan 计算的角度值"}],"example":[{"type":"scss","code":"tan(45deg) -> 1\ntan(50deg) -> 1.19175"}],"author":["Kayo"],"group":["数值计算"],"access":"public","require":[{"type":"function","name":"sin"},{"type":"function","name":"cos"}],"file":{"path":"tool/_calculate.scss","name":"_calculate.scss"}}],[{"description":"清除浮动\n\n","commentRange":{"start":11,"end":14},"context":{"type":"placeholder","name":"clear","code":"\n  @if not($function_mobileOnly) {\n    *zoom: 1;\n  }\n  &:after {\n    clear: both;\n    content: \".\";\n    display: block;\n    line-height: 0;\n    font-size: 0;\n    visibility: hidden;\n    @if not($function_mobileOnly) {\n      overflow: hidden;\n    }\n  }\n","line":{"start":15,"end":30}},"group":["布局"],"author":["Clear, Molice, Zhoon, Kayo，Jeff"],"access":"public","require":[],"file":{"path":"_adaptation.scss","name":"_adaptation.scss"}}],[{"description":"单行省略号\n\n","commentRange":{"start":32,"end":35},"context":{"type":"placeholder","name":"text-ellipsis","code":"\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  word-break: break-all;\n  //在IE9的<td>中，如果之前已经设置了word-wrap:break-word，则这里的white-space:nowrap会失效，所以要在这里加上word-wrap:normal来以防万一\n  word-wrap: normal;\n","line":{"start":36,"end":43}},"group":["外观"],"author":["Clear, Molice, Zhoon, Kayo，Jeff"],"access":"public","file":{"path":"_adaptation.scss","name":"_adaptation.scss"}},{"description":"多行省略号\n\n","commentRange":{"start":49,"end":55},"context":{"type":"mixin","name":"text-multiLine-ellipsis","code":"\n  line-height: $lineHeight;\n  overflow: hidden;\n  height: $lineHeight * $line;\n  // stylelint-disable\n  display: -webkit-box;\n  display: -moz-box;\n  text-overflow: ellipsis;\n  -webkit-line-clamp: $line;\n  -moz-line-clamp: $line;\n  line-clamp: $line;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  // stylelint-enable\n  box-orient: vertical;\n","line":{"start":56,"end":71}},"group":["外观"],"parameter":[{"type":"Number","name":"line","description":"文字的行数"},{"type":"Measure","name":"lineHeight","description":"文字行高"}],"throw":["不支持多行省略的浏览器降级处理为结尾处没有省略号，直接裁剪掉。"],"author":["Clear, Molice, Zhoon, Kayo，Jeff"],"access":"public","require":[],"file":{"path":"_adaptation.scss","name":"_adaptation.scss"}},{"description":"在长单词或 URL 地址内部进行换行，适用于以中文为主混有英文的文字排版\n\n","commentRange":{"start":73,"end":76},"context":{"type":"placeholder","name":"text-breakWord","code":"\n  word-wrap: break-word;\n  word-break: break-word;\n","line":{"start":77,"end":80}},"group":["外观"],"author":["Clear, Molice, Zhoon, Kayo，Jeff"],"access":"public","file":{"path":"_adaptation.scss","name":"_adaptation.scss"}},{"description":"半透明背景颜色\n\n","commentRange":{"start":154,"end":159},"context":{"type":"mixin","name":"bgWithOpacity","code":"\n  background-color: rgba($color,$alpha);\n  @include forIE8 {\n    filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#{ie-hex-str(rgba($color,$alpha))},endcolorstr=#{ie-hex-str(rgba($color, $alpha))});\n  }\n","line":{"start":160,"end":165}},"group":["外观"],"parameter":[{"type":"Color","name":"color","description":"背景色的颜色值"},{"type":"Number","name":"alpha","description":"背景色的透明度"}],"author":["Clear, Molice, Zhoon, Kayo，Jeff"],"access":"public","require":[],"file":{"path":"_adaptation.scss","name":"_adaptation.scss"}},{"description":"跨浏览器的渐变背景，垂直渐变，自上而下\n\n","commentRange":{"start":167,"end":174},"context":{"type":"mixin","name":"gradient-vertical","code":"\n  background-image: linear-gradient(to bottom, $start-color $start-percent, $end-color $end-percent);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#{ie-hex-str($start-color)}\", endColorstr=\"#{ie-hex-str($end-color)}\", GradientType=0); // IE9 and down\n","line":{"start":175,"end":179}},"group":["外观"],"parameter":[{"type":"Color","name":"start-color","description":"渐变的开始颜色","defaultValue":"#555"},{"type":"Color","name":"end-color","description":"渐变的结束颜色","defaultValue":"#333"},{"type":"Number","name":"start-percent","description":"渐变的开始位置，需要以百分号为单位","defaultValue":"0%"},{"type":"Number","name":"end-percent","description":"渐变的结束位置，需要以百分号为单位","defaultValue":"100%"}],"author":["Clear, Molice, Zhoon, Kayo，Jeff"],"access":"public","require":[],"file":{"path":"_adaptation.scss","name":"_adaptation.scss"}},{"description":"跨浏览器的渐变背景，水平渐变，自左而右\n\n","commentRange":{"start":181,"end":188},"context":{"type":"mixin","name":"gradient-horizontal","code":"\n  background-image: linear-gradient(to right, $start-color $start-percent, $end-color $end-percent);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#{ie-hex-str($start-color)}\", endColorstr=\"#{ie-hex-str($end-color)}\", GradientType=1); // IE9 and down\n","line":{"start":189,"end":193}},"group":["外观"],"parameter":[{"type":"Color","name":"start-color","description":"渐变的开始颜色","defaultValue":"#555"},{"type":"Color","name":"end-color","description":"渐变的结束颜色","defaultValue":"#333"},{"type":"Number","name":"start-percent","description":"渐变的开始位置，需要以百分号为单位","defaultValue":"0%"},{"type":"Number","name":"end-percent","description":"渐变的结束位置，需要以百分号为单位","defaultValue":"100%"}],"author":["Clear, Molice, Zhoon, Kayo，Jeff"],"access":"public","require":[],"file":{"path":"_adaptation.scss","name":"_adaptation.scss"}},{"description":"跨浏览器的渐变背景，带角度\n\n","commentRange":{"start":195,"end":203},"context":{"type":"mixin","name":"gradient-on-axis","code":"\n  background-image: linear-gradient($axis-degree, $start-color $start-percent, $end-color $end-percent);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#{ie-hex-str($start-color)}\", endColorstr=\"#{ie-hex-str($end-color)}\", GradientType=0); // IE9 and down\n","line":{"start":204,"end":208}},"group":["外观"],"parameter":[{"type":"Degree","name":"axis-degree","description":"渐变的轴","defaultValue":"135deg"},{"type":"Color","name":"start-color","description":"渐变的开始颜色","defaultValue":"#555"},{"type":"Color","name":"end-color","description":"渐变的结束颜色","defaultValue":"#333"},{"type":"Number","name":"start-percent","description":"渐变的开始位置，需要以百分号为单位","defaultValue":"0%"},{"type":"Number","name":"end-percent","description":"渐变的结束位置，需要以百分号为单位","defaultValue":"100%"}],"author":["Clear, Molice, Zhoon, Kayo，Jeff"],"access":"public","require":[],"file":{"path":"_adaptation.scss","name":"_adaptation.scss"}},{"description":"跨浏览器的渐变背景，垂直渐变，自上而下，支持三个渐变点\n\n","commentRange":{"start":210,"end":219},"context":{"type":"mixin","name":"gradient-vertical-threeColor","code":"\n  background-image: linear-gradient(to bottom, $start-color $start-percent, $middle-color $middle-percent, $end-color $end-percent);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#{ie-hex-str($start-color)}\", endColorstr=\"#{ie-hex-str($end-color)}\", GradientType=0); // IE9 and down\n","line":{"start":220,"end":224}},"group":["外观"],"parameter":[{"type":"Color","name":"start-color","description":"渐变的开始颜色","defaultValue":"#555"},{"type":"Color","name":"middle-color","description":"渐变的中间颜色","defaultValue":"#444"},{"type":"Color","name":"end-color","description":"渐变的结束颜色","defaultValue":"#333"},{"type":"Number","name":"start-percent","description":"渐变的开始位置，需要以百分号为单位","defaultValue":"0%"},{"type":"Number","name":"start-percent","description":"渐变的中间位置，需要以百分号为单位","defaultValue":"50%"},{"type":"Number","name":"end-percent","description":"渐变的结束位置，需要以百分号为单位","defaultValue":"100%"}],"author":["Clear, Molice, Zhoon, Kayo，Jeff"],"access":"public","require":[],"file":{"path":"_adaptation.scss","name":"_adaptation.scss"}},{"description":"跨浏览器的渐变背景，水平渐变，自左而右\n\n","commentRange":{"start":226,"end":235},"context":{"type":"mixin","name":"gradient-horizontal-threeColor","code":"\n  background-image: linear-gradient(to right, $start-color $start-percent, $middle-color $middle-percent, $end-color $end-percent);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#{ie-hex-str($start-color)}\", endColorstr=\"#{ie-hex-str($end-color)}\", GradientType=1); // IE9 and down\n","line":{"start":236,"end":240}},"group":["外观"],"parameter":[{"type":"Color","name":"start-color","description":"渐变的开始颜色","defaultValue":"#555"},{"type":"Color","name":"middle-color","description":"渐变的中间颜色","defaultValue":"#444"},{"type":"Color","name":"end-color","description":"渐变的结束颜色","defaultValue":"#333"},{"type":"Number","name":"start-percent","description":"渐变的开始位置，需要以百分号为单位","defaultValue":"0%"},{"type":"Number","name":"start-percent","description":"渐变的中间位置，需要以百分号为单位","defaultValue":"50%"},{"type":"Number","name":"end-percent","description":"渐变的结束位置，需要以百分号为单位","defaultValue":"100%"}],"author":["Clear, Molice, Zhoon, Kayo，Jeff"],"access":"public","require":[],"file":{"path":"_adaptation.scss","name":"_adaptation.scss"}}],[{"description":"字符串 replace 方法，用于在字符串中用一些字符替换另一些字符\n\n","commentRange":{"start":11,"end":20},"context":{"type":"function","name":"str-replace","code":"\n  $index: str-index($string, $search);\n\n  @if $index {\n    @return str-slice($string, 1, $index - 1) + $replace + str-replace(str-slice($string, $index + str-length($search)), $search, $replace);\n  }\n\n  @return $string;\n","line":{"start":21,"end":29}},"parameter":[{"type":"String","name":"string","description":"需要进行查找的字符串"},{"type":"String","name":"search","description":"规定需要被替换的子字符串"},{"type":"String","name":"replace","description":"替换文本","defaultValue":"''"}],"example":[{"type":"scss","code":"str-replace(\"QMUI Web\", \" Web\") => \"QMUI\"\nstr-replace(\"QMUI Web\", \"Web\", \"iOS\") => \"QMUI iOS\"\nstr-replace(\"QMUI Web\", \"Web\", \"Android\") => \"QMUI Android\""}],"author":["Kayo"],"group":["sass 原生增强"],"access":"public","require":[],"file":{"path":"tool/_enhance.scss","name":"_enhance.scss"}},{"description":"加亮颜色（以百分比的形式加入加色）\n\n","commentRange":{"start":31,"end":34},"context":{"type":"function","name":"tint","code":"\n  @return mix(white, $color, $percentage);\n","line":{"start":35,"end":37}},"parameter":[{"type":"Color","name":"color","description":"需要被加亮的颜色值"},{"type":"Number","name":"percentage","description":"需要增加的白色的百分比"}],"author":["Kayo"],"group":["sass 原生增强"],"access":"public","require":[],"file":{"path":"tool/_enhance.scss","name":"_enhance.scss"}},{"description":"加暗颜色（以百分比的形式加入黑色）\n\n","commentRange":{"start":39,"end":42},"context":{"type":"function","name":"shade","code":"\n  @return mix(black, $color, $percentage);\n","line":{"start":43,"end":45}},"parameter":[{"type":"Color","name":"color","description":"需要被加暗的颜色值"},{"type":"Number","name":"percentage","description":"需要增加的黑色的百分比"}],"author":["Kayo"],"group":["sass 原生增强"],"access":"public","require":[],"file":{"path":"tool/_enhance.scss","name":"_enhance.scss"}}]]