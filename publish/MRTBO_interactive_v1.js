(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"MRTBO_interactive_v1_atlas_1", frames: [[1839,0,154,93],[1330,930,392,93],[1839,95,150,93],[0,0,1837,514],[0,516,1911,412],[0,930,1328,194]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_5 = function() {
	this.initialize(ss["MRTBO_interactive_v1_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["MRTBO_interactive_v1_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["MRTBO_interactive_v1_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["MRTBO_interactive_v1_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["MRTBO_interactive_v1_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.intro_txt = function() {
	this.initialize(ss["MRTBO_interactive_v1_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.an_Video = function(options) {
	this.initialize();
	this._element = new $.an.Video(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.an_Video = function(options) {
	this.initialize();
	this._element = new $.an.Video(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.an_Video = function(options) {
	this.initialize();
	this._element = new $.an.Video(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.btn_next = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// txt
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(164.6,18.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// tri
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFC900").ss(2,1,1).p("AB/AAIgRANIjsDAIAAl+IAAgbg");
	this.shape.setTransform(280.925,41.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC900").s().p("Ah+ixIAAgbID9DMIgRANIjsDAg");
	this.shape_1.setTransform(280.925,41.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// box
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFC900").ss(2,1,1).p("AtymeIblAAQA/AAAABnIAAJvQAABng/AAI7lAAQg/AAAAhnIAApvQAAhnA/AAg");
	this.shape_2.setTransform(220.825,41.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AtyGfQg/AAAAhnIAApvQAAhnA/AAIblAAQA/AAAABnIAAJvQAABng/AAg");
	this.shape_3.setTransform(220.825,41.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(125.2,-1,191.3,85);


(lib.btn_begin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// txt
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(17.1,18.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// tri
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFC900").ss(2,1,1).p("AB/AAIj9DNIAAmZg");
	this.shape.setTransform(280.925,41.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC900").s().p("Ah+jMID9DMIj9DNg");
	this.shape_1.setTransform(280.925,41.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// box
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFC900").ss(2,1,1).p("A2zmeMAtnAAAQBpAAAABnIAAJvQAABnhpAAMgtnAAAQhpAAAAhnIAApvQAAhnBpAAg");
	this.shape_2.setTransform(158.525,41.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("A2zGfQhpAAAAhnIAApvQAAhnBpAAMAtnAAAQBpAAAABnIAAJvQAABnhpAAg");
	this.shape_3.setTransform(158.525,41.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.1,-1,314.9,85);


(lib.btn_back = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// txt
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(166.35,18.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// tri
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFC900").ss(2,1,1).p("AB/AAIgRANIjsDAIAAl+IAAgbg");
	this.shape.setTransform(280.925,41.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC900").s().p("Ah+ixIAAgbID9DMIgRANIjsDAg");
	this.shape_1.setTransform(280.925,41.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// box
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFC900").ss(2,1,1).p("AtymeIblAAQA/AAAABnIAAJvQAABng/AAI7lAAQg/AAAAhnIAApvQAAhnA/AAg");
	this.shape_2.setTransform(220.825,41.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AtyGfQg/AAAAhnIAApvQAAhnA/AAIblAAQA/AAAABnIAAJvQAABng/AAg");
	this.shape_3.setTransform(220.825,41.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(125.2,-1,191.3,85);


// stage content:
(lib.MRTBO_interactive_v1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {intro_1:0,intro_2:3,intro_3:6};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,3,6];
	// timeline functions:
	this.frame_0 = function() {
		canvas.style.zIndex = "1";
		this.stop();
		this.btn_begin.addEventListener("click", goBegin.bind(this));
		
		
		function goBegin()
		{
			this.gotoAndStop("intro_2");
			var boop = createjs.Sound.play('btn_sound1',{loop:0});
		}
	}
	this.frame_3 = function() {
		this.btn_next.addEventListener("click", goNext.bind(this));
		this.btn_back.addEventListener("click", goBack.bind(this));
		
		
		function goNext()
		{
			this.gotoAndStop("intro_3");
			var boop = createjs.Sound.play('btn_sound2',{loop:0});
		}
		
		function goBack()
		{
			this.gotoAndStop("intro_1");
			var boop = createjs.Sound.play('btn_sound2',{loop:0});
		}
	}
	this.frame_6 = function() {
		this.btn_next.addEventListener("click", goNext.bind(this));
		this.btn_back.addEventListener("click", goBack.bind(this));
		
		
		function goNext()
		{
			this.gotoAndStop("values");
			var boop = createjs.Sound.play('btn_sound2',{loop:0});
		}
		
		function goBack()
		{
			this.gotoAndStop("intro_2");
			var boop = createjs.Sound.play('btn_sound2',{loop:0});
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(3).call(this.frame_6).wait(3));

	// btn
	this.btn_begin = new lib.btn_begin();
	this.btn_begin.name = "btn_begin";
	this.btn_begin.setTransform(959,1116.5,1,1,0,0,0,157.5,42.5);
	new cjs.ButtonHelper(this.btn_begin, 0, 1, 1);

	this.btn_back = new lib.btn_back();
	this.btn_back.name = "btn_back";
	this.btn_back.setTransform(125.8,1115.5,1,1,0,0,180,220.8,41.5);
	new cjs.ButtonHelper(this.btn_back, 0, 1, 1);

	this.btn_next = new lib.btn_next();
	this.btn_next.name = "btn_next";
	this.btn_next.setTransform(1730.5,1116.5,1,1,0,0,0,157.5,42.5);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_begin}]}).to({state:[{t:this.btn_next},{t:this.btn_back}]},3).to({state:[{t:this.btn_next},{t:this.btn_back}]},3).wait(3));

	// txt
	this.instance = new lib.intro_txt();
	this.instance.setTransform(112,131);

	this.instance_1 = new lib.CachedBmp_6();
	this.instance_1.setTransform(518.15,823.65,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_7();
	this.instance_2.setTransform(518.15,823.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).wait(3));

	// txt_box
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("EhtyATsQhpAAAAhkMAAAgkPQAAhkBpAAMDbmAAAQBnAAAABkMAAAAkPQAABkhnAAg");
	this.shape.setTransform(959.25,934.275);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(6));

	// video
	this.instance_3 = new lib.an_Video({'id': 'instance_3', 'src':'videos/intro_shot1.mp4', 'autoplay':true, 'controls':true, 'muted':false, 'loop':true, 'poster':'', 'preload':true, 'class':'video'});

	this.instance_3.setTransform(960,600,4.8,4,0,0,0,200,150);

	this.instance_4 = new lib.an_Video({'id': 'instance_4', 'src':'videos/intro_shot2.mp4', 'autoplay':true, 'controls':true, 'muted':false, 'loop':true, 'poster':'', 'preload':true, 'class':'video'});

	this.instance_4.setTransform(960,600,4.8,4,0,0,0,200,150);

	this.instance_5 = new lib.an_Video({'id': 'instance_5', 'src':'videos/intro_shot3.mp4', 'autoplay':true, 'controls':true, 'muted':false, 'loop':true, 'poster':'', 'preload':true, 'class':'video'});

	this.instance_5.setTransform(960,600,4.8,4,0,0,0,200,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},3).wait(3));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(957.6,598,964.8000000000001,604);
// library properties:
lib.properties = {
	id: '8667A83863847241B67D53F1741D7F20',
	width: 1920,
	height: 1200,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/MRTBO_interactive_v1_atlas_1.png", id:"MRTBO_interactive_v1_atlas_1"},
		{src:"sounds/btn_sound2.mp3", id:"btn_sound2"},
		{src:"sounds/btn_sound1.mp3", id:"btn_sound1"},
		{src:"sounds/btn_open.mp3", id:"btn_open"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js", id:"an.Video"},
		{src:"components/video/src/video.js", id:"an.Video"},
		{src:"components/video/src/video.js", id:"an.Video"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['8667A83863847241B67D53F1741D7F20'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;