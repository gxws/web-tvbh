/*!
 * base
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
	 * 基础模块 - 交互逻辑
	 * @class base
	 * @since p94
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

		$('.J_c_focus').focus();		
		$doc.on('keydown', function(e){	//按键功能
			//alert(e.keyCode);
			switch(e.keyCode){
				// case 48:	//0刷新当前页面
				// 	loc.reload();
				// 	break;
				// case 57:
				// 	loc.href = 'index.html';	//9跳转至列表页
				// 	break;
			}
		});
		
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
			speed	= 5000
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

/**************************** BEGIN p94 ****************************/
	/**
	 * 初始化事件
	 * @method base.events
	 * @since p94
	 * @return {none}
	 */
	init.P94events = function(){
		$doc.on('click','.J_j_checkbox',function(){
			var $this = $(this),
			    $smt  = $('.J_j_smt'),
			    $input = $smt.find('input'),
			    $noBtn = $smt.find('.disabled'),
			    tag = $this.hasClass('on');
			$this[tag ? 'removeClass' : 'addClass']('on').siblings('input[type=checkbox]').prop('checked',!tag)
			$input.css({display: tag ? 'none' : 'inline-block'});
			$noBtn.css({display: tag ? 'inline-block' : 'none'});
		}).on('click','.J_j_radio_btn',function(){
			var $this  = $(this),
			    $active = $('.J_j_ac').find('.active');
			if($active.size()){
				if($this.hasClass('active')) return;
				base.gSum($this)
				$this.addClass('active');
				$active.removeClass('active');
			}
		});
		base.gSum($('.J_j_radio_btn').eq(0))
	}
/**
 * 加载中动画
 * @method base.dIan
 * @since p94
 * @return {none}
 */
	init.dIan = function(){//加载中动画
		var $dian = $('.J_j_dian'),
				i = 0,
				str='.';
		if($dian.size()){
			timer = setInterval(function(){
				i++;
				str+='.';
				if(i>5){
					str='.';
					i=0;
				}
				$dian.text(str);
			},500);
		}
	}
/**
 * 页面加载获取默认金额
 * @method base.gSum
 * @since p94
 * @return {none}
 */
	base.gSum = function($obj){
		var $dfn  = $obj.find('.money'),
		    $val  = $(' input[data-type=val]');
		$val && $val.attr('name',$dfn.attr('data-name')).attr('value',$dfn.attr('data-value'));
	}
/**************************** END p94 ****************************/

/**************************** BEGIN p95 ****************************/
	/**
	 * 初始化事件
	 * @method base.events
	 * @since p95
	 * @return {none}
	 */
	init.P95events = function(){
		$doc.on('click','.J_c_p95con',function(){
			var $this = $(this);
			$this.addClass('onti');
			$('.J_c_p95probox').css('display','none');
			$('.J_c_p95conbox').css('display','block');
			$('.J_c_p95pro').removeClass('onti');
		}).on('click','.J_c_p95pro',function(){
			var $this = $(this);
			$this.addClass('onti');
			$('.J_c_p95conbox').css('display','none');
			$('.J_c_p95probox').css('display','block');
			$('.J_c_p95con').removeClass('onti');
		});
	}
/**************************** END p95 ****************************/

	return $.extend(base, $.loader(init));

})(window);