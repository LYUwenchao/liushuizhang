
;$(function(){
	var c = new Intro('content');
	var d = new Intro('gallery');
	var e = new Intro('page');
	c.load('<p>当你打开网页，好奇这是什么网站</p>',1000);
	c.setClass("p:last", [{
		"name": "height",
		"val": "35px"
	}]);
	c.addHtml("p","&nbsp;<span class='fa  fa-question'></span>&nbsp;");//此代码执行完m=4000
	c.setClass("span:last", [{
		"name": "color",
		"val": "#66cc00"
	},{
		"name":"font-size",
		"val":"35px"
	}]);
	c.load('<p>耐心点儿，想象着</p>');
	c.load('<p>在一个晴朗的午后</p>');
	c.addClass("html","bgimg",3000);
	c.load('<p>八音盒传来清脆的声音</p>',3000);
	c.load("<button class='pausePlay' onclick='toggleSound()'><span id='toggle' class='preserve3D'><i class='fa fa-music'></i></span></button>",200);
	c.load("<audio id=\'music\' loop=\'loop\' autoplay=\'autoplay\'><source src=\'mp3/bgm.mp3\'/><source src=\'mp3/bgm.ogg\'/></audio>",200);
	c.loadup('<a class="board" href="home.html"><img src="images/jump.png"></a>',500);
	c.load('<p>忽然，起风了</p>',3000);
	c.load('<img class="dandelion1" src="images/dandelion1.png">',2000);
	c.load('<img class="dandelion2" src="images/dandelion2.png">',500);
	c.load('<img class="dandelion3" src="images/dandelion3.png">',500);
	c.load('<img class="dandelion4" src="images/dandelion2.png">',500);
	c.setClass("#content", [{
		"name": "height",
		"val": "auto"
	}],1000);
	c.load('<p>我打开画册</p>');
	c.load('<p>想和你聊点什么</p>');
	d.setClass("#gallery", [{
		"name": "height",
		"val": winHeight
	},{
		"name":"border",
		"val":"5px solid #fff"
	}],1000);
	d.setClass(".pics", [{
		"name":"display",
		"val":"block"
	}],1000);
	c.load('<p>&nbsp;&nbsp;</p>');
	c.load('<p>九百多年前，北宋画家张择端</p>');
	c.load('<p>以北宋汴京城市面貌和</p>');
	d.addHtml("div",'<img src="images/slide1.png">')
	d.showPic();
	c.load('<p>社会各阶层人民生活状况为素材</p>');	
	c.load('<p>用长卷形式</p>');
	d.movePic(0);
	d.addHtml("div",'<img src="images/slide2.png">')
	d.showPic();
	c.load('<p>绘制了一幅传世风俗画</p>');
	c.load('<p>&mdash;《清明上河图》</p>');
	d.movePic(20);
	c.load('<p>&nbsp;&nbsp;</p>');
	c.load('<p>还是九百年前，孟元老，以散文笔记形式</p>');
	d.addHtml("div",'<img src="images/slide3.jpg">');
	d.showPic();
	c.load('<p>记录其生活的汴京</p>');
	c.load('<p>上至王公贵族，下至庶民百姓</p>');
	c.load('<p>日常生活的情景</p>');
	c.load('<p>&mdash;《东京梦华录》</p>');
	d.movePic(40);
	c.load('<p>&nbsp;&nbsp;</p>');
	c.load('<p>两百多年前，曹雪芹</p>');
	d.addHtml("div",'<img src="images/slide4.jpg">');
	d.showPic();
	c.load('<p>依托他早年在南京亲历的繁华旧梦</p>');
	c.load('<p>用市井白话写成一部小说</p>');
	c.load('<p>成就了中国古典小说最巅峰之作</p>');
	c.load('<p>&mdash;《红楼梦》</p>');
	c.load('<p>“满纸荒唐言，一把辛酸泪”</p>',3000);
	c.load('<p>“都云作者痴，谁解其中味”</p>');
	d.movePic(60);
	c.load('<p>&nbsp;&nbsp;</p>');
	c.load('<p>六月，江南某个小村</p>');
	c.load('<p>一位年近八旬的老人在稻田里忙碌</p>');
	d.addHtml("div",'<img src="images/slide5.jpg">');
	d.showPic();
	c.load('<p>老人这一生经历了很多</p>');
	c.load('<p>战火，流离，饥荒，改革开放，农业税减免</p>');
	c.load('<p>老人佝偻的背影，布满老茧的双手</p>');
	c.load('<p>埋藏了很多故事</p>');
	c.load('<p>历史很美妙</p>');
	c.load('<p>但历史留给他们的笔墨却很少很少</p>');
	d.movePic(80);
	c.load('<p>&nbsp;&nbsp;</p>');
	c.load('<p>数年以前，有一小男孩</p>');
	c.load('<p>上了火车，那是趟绿皮火车</p>');
	d.addHtml("div",'<img src="images/slide6.jpg">');
	d.showPic();
	c.load('<p>求学的日子是美好而短暂的</p>');
	c.load('<p>一晃四年过去，他步入社会开始工作</p>');
	d.movePic(100);
	c.load('<p>绿皮火车变成了白色和谐号</p>');
	d.addHtml("div",'<img src="images/slide7.jpg">');
	d.showPic();
	c.load('<p>一个大冬天，他要早起赶火车</p>');
	c.load('<p>他开始抱怨，生活太累了，工作太苦了</p>');
	c.load('<p>可他出了门，看见</p>');
	d.movePic(120);
	c.load('<p>环卫工已经扫干净了大半条马路</p>');
	d.addHtml("div",'<img src="images/slide8.jpg">');
	d.showPic();
	c.load('<p>公交司机早已经上岗了</p>');	

	c.load('<p>他想到这个时候，妈妈应该早起来了</p>');
	d.movePic(140);
	d.addHtml("div",'<img src="images/slide9.jpg">');
	d.showPic();
	c.load('<p>因为他妈妈经常告诉他：</p>');
	c.load('<p>“生活，生活，人生下来就是要干活的”</p>');
	c.load('<p>他总是在想</p>');
	d.movePic(160);
	c.load('<p>这片大地，历经战火依然保留</p>');
	d.addHtml("div",'<img src="images/slide10.jpg">');
	d.showPic();
	c.load('<p>这个民族，经历兴衰依然长存</p>');
	c.load('<p>到底是因为那些被载入史册的伟大人物</p>');
	c.load('<p>还是因为世世代代平凡勤劳的人们呢</p>');
	c.load('<p>&nbsp;&nbsp;</p>');
	d.movePic(180);
	d.scalePic();
	d.loadup('<img class="cover1" src="images/cover1.jpg">');
	d.setClass("img:last", [{
		"name":"height",
		"val":"100%"
	}],1000);
	d.loadup('<img class="cover2" src="images/cover2.png">');
	d.setClass("img:last", [{
		"name":"height",
		"val":"100%"
	}],1000);
	c.load('<p>我合上画册</p>');
	d.addIdClass("#gallery","rotate");
	c.load('<p>说一说这个网站吧</p>');
	c.load('<p>流水账，在词典中一条释义为</p>');
	d.setClass(".mask", [{
		"name":"height",
		"val":winHeight
	}],1000);
	c.load('<p>“不加分析的叙述和记载”</p>');
	e.loadup('<img src="images/head.png" alt="流水账" width="80%">');
	c.load('<p>&nbsp;&nbsp;</p>');
	c.load('<p>流水账网是一个很小很简单的平台</p>');
	c.load('<p>希望在这个平台</p>');
	c.load('<p>让文字回到其最原始的功能&mdash;记录</p>');
	c.load('<p>记录普通的人，讲述平凡的事</p>');
	c.load('<p>流水账网也是一个朴素的平台</p>');
	c.load('<p>在这里，没有分析，没有主观引导</p>');
	c.load('<p>只是将原始的素材稍加整理</p>');
	c.load('<p style="height:35px">就像<span class="fa  fa-hand-o-right"></span></p>');
	e.loadup('<p>草在结它的种子</p>',3500);
	e.loadup('<p>风在摇它的叶子</p>');
	e.loadup('<p>我们站着</p>');
	e.loadup('<p>不说话</p>');
	e.loadup('<p>就十分美好</p>');
	e.loadup('<img class="leaf" src="images/leaf.png">',500);
	e.setClass(".leaf", [{
		"name":"top",
		"val":"0"
	}]);
	e.loadup('<a href="home.html"><img src="images/board.png"></a>',6000)
});
var m = 0;
if (window.innerHeight)
winHeight = window.innerHeight-50;
else if ((document.body) && (document.body.clientHeight))
winHeight = document.body.clientHeight-30;
var Intro=function(dom){
	this._dom = dom
};
Intro.prototype={
	constructor:Intro,
	load:function(code,second){
		var dom = this._dom;
		var o = this;
		var _second = second ? second : 2000;
		_second = m+_second;
		setTimeout(function(){
			var i= $('#'+dom).height()
			$(window).scrollTop(i);
			$('#'+dom).append(code);
		},_second);
		m=_second;
	},
	loadup:function(code,second){
		var dom = this._dom;
		var o = this;
		var _second = second ? second : 2000;
		_second = m+_second;
		setTimeout(function(){
			$('#'+dom).append(code);
		},_second);
		m=_second;
	},
	setClass:function(dom,styles,second){
		var _second = second ? second : 500;
		_second = m+_second;
		setTimeout(function(){
			for (var i = 0; i < styles.length; i++) {
				var _name=styles[i].name;
				var _val=styles[i].val;
				$(dom).css(_name,_val);
			};

		},_second);
		m = _second;
	},
	addClass:function(dom,clsName,second){
		var _second = second ? second : 2000;
		_second=m+_second;
		setTimeout(function() {
			var doms=document.getElementsByTagName(dom);
			var _dom=doms[doms.length-1];
			_dom.className=clsName;
			// $(dom).addClass(className);
		}, _second);
		m=_second;
	},
	addIdClass:function(dom,clsName,second){
		var _second = second ? second : 2000;
		_second=m+_second;
		setTimeout(function() {
			$(dom).addClass(clsName);
		}, _second);
		m=_second;
	},
	addHtml:function(dom,code,speed){
		if (speed) {
			var second = m+2000-speed;
		}else{
			var second = m+2000;
		}	
		setTimeout(function(){
			var doms=document.getElementsByTagName(dom);
			var _dom=doms[doms.length-1];
			_dom.innerHTML=_dom.innerHTML+code;
		},second);
		m=second;
	},
	showPic:function(second){
		var _second = second ? second : 200;
		_second = m+_second;
		setTimeout(function(){
			$('img:last').fadeIn("slow");
		},_second);
		m=_second;
	},
	movePic:function(i,second){
		var _second = second ? second : 200;
		_second = m+_second;
		setTimeout(function(){
			$("img:last").css("width","35%");
			$("img:last").css("bottom","0");
			$("img:last").css("left",i);
		},_second);
		m=_second;
	},
	scalePic:function(second){
		var _second = second ? second : 200;
		_second = m+_second;
		setTimeout(function(){
			$(".pics img").css("width","5%");
		},_second);
		m=_second;
	}

};
  function toggleSound() {
    var music = document.getElementById("music");
    var toggle = document.getElementById("toggle");

    if (music.paused) {
      music.play();
      toggle.className='preserve3D';
    }
    else {
      music.pause();
      toggle.className='';
    }
  }
  function changeVolP(){
    var video=document.getElementById('music');
    if (video.volume>0.9) {
      alert("音量已最大")
    }else{
      video.volume=video.volume+0.1;
    }       
  }
  function changeVolM(){
    var video=document.getElementById('music');
    if (video.volume<0.1) {
      alert("音量已最小")
    }else{
      video.volume=video.volume-0.1;
    }       
  }