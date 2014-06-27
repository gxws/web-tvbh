/*!
 * baseAjax
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2013/12/4
 */

/**
 * 基础模块
 * @module base
 * @since p51
 */
(function(window, undefined){

	/**
	 * 基础模块 - 业务逻辑
	 * @class baseAjax
	 * @since p51
	 */
	var	$win	= $(window),
		$doc	= $(document),
		loc		= window.location,
		WS		= window.WS || (window.WS = {}),
		base	= WS.base || (WS.base = {}),	//接口程序
		init	= {};	//启动时加载程序

/**************************** BEGIN p51 ****************************/



/**************************** END p51 ****************************/

	return $.extend(base, $.loader(init));

})(window);