export default function (fun, delay) {
    // 记录上一次函数触发的时间
    var timer = null;
    var debounced = function () {
      var ctx = this;
      var args = arguments;
      // 清除上一次延时器
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        fun.apply(ctx, args);
      }, delay);
    };
    return debounced;
  }
 