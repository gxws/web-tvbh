/*!
 * baseAjax
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2013/12/4
 */

/**
 * 基础模块
 * @module base
 * @since p94
 */
(function(window, undefined){

	/**
	 * 基础模块 - 业务逻辑
	 * @class baseAjax
	 * @since p94
	 */
	var	$win	= $(window),
		$doc	= $(document),
		loc		= window.location,
		WS		= window.WS || (window.WS = {}),
		base	= WS.base || (WS.base = {}),	//接口程序
		init	= {};	//启动时加载程序

/**************************** BEGIN p94 ****************************/
	//等待订购||支付结果页面跳转
    base.payready = function (url, url1, url2) {
        if (!$('.J_j_dian').size()) return;
        var speed = 6000,
            i   = 0,
            timer = setInterval(function () {
              i++;
              $.get(url, function (d) {
                  if (d.status = 1) {
                      if (d.finished) {
                          clearInterval(timer);
                          loc.href = url1;
                      }
                      else if (i>=10) {                               
                          clearInterval(timer);
                          loc.href = url2;
                      }
                  }
              }, 'json');
            }, speed);
    }


/**************************** END p94 ****************************/

	return $.extend(base, $.loader(init));

})(window);