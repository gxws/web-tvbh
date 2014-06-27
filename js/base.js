/*!
 * base
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
	 * 基础模块 - 交互逻辑
	 * @class base
	 * @since p51
	 */
	var	$win	= $(window),
		$doc	= $(document),
		loc		= window.location,
		WS		= window.WS || (window.WS = {}),
		base	= WS.base || (WS.base = {}),	//接口程序
		init	= {};	//启动时加载程序

/**************************** BEGIN p51 ****************************/

	/**
	 * 初始化事件
	 * @method base.events
	 * @since p51
	 * @return {none}
	 */
	init.events = function(){
		/*
		$doc.on('keydown', function(e){	//按键功能
			//alert(e.keyCode);
			switch(e.keyCode){
				case 48:	//0刷新当前页面
					loc.reload();
					break;
				case 57:
					loc.href = 'index.html';	//9跳转至列表页
					break;
			}
		});
		*/
	};

	/**
	 * 焦点图
	 * @method base.focus
	 * @since p51
	 * @return {none}
	 */
	init.focus = function(){
		if(!$('.J_x_focus').size())return false;
		var $spans, _run, index,
			$f		= $('.J_x_focus'),
			$lis	= $f.find('ul li'),
			$p		= $f.find('p'),
			size	= $lis.size(),
			speed	= 3000
			html	= '';
		$lis.each(function(){
			html	+= '<span></span>';
		});
		$p.html(($spans = $(html)));
		(_run = function(){
			var j = index === undefined ? 0 : (index + 1) % size;
			$lis.eq(j).show().siblings('li').hide();
			$spans.eq(j).addClass('on').siblings('span').removeClass('on');
			index = j;
			setTimeout(_run, speed);
		})();
	};

	/**
	 * 产品订购页
	 * @method base.dinggou
	 * @since p51
	 * @return {none}
	 */
	init.dinggou = function(){
		if(!$('.J_x_dinggou').size())return false;
		var $dg		= $('.J_x_dinggou'),
			$value	= $dg.find('.value'),
			$hidden	= $dg.find('.hidden'),
			price	= + $dg.find('.price').text(),
			$total	= $dg.find('.total'),
			num		= + $hidden.val(),
			min		= 1,
			max		= 99;

		$value.html(num);

		$dg.on('click', '.minus', function(){_count(-1);});
		$dg.on('click', '.add', function(){_count(1);});

		function _count(n){
			var j = num + n;
			if(j < min || j > max)return false;
			$value.html(j);
			$hidden.val(j);
			$total.text(price * j);
			num = j;
		}

	};

	

/**************************** END p51 ****************************/

	return $.extend(base, $.loader(init));

})(window);