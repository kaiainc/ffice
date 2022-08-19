(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,1920,1200]]},
		{name:"index_atlas_2", frames: [[1606,374,209,185],[1026,0,578,692],[1606,0,289,372],[0,0,1024,1024]]}
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



(lib.CachedBmp_2 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bolt_1 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.cloud_1 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.map_1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,104.5,92.5), null);


(lib.pin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pin, new cjs.Rectangle(0,0,289,346), null);


(lib.path = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9999FF").ss(8,1,1).p("EiMBAZXQFHjMIok2QRRptRnoTQYprpV1nOQbRpCVRhjQLMgzJIB8QIrB2IPEoQHSEFIzHXQF9FAL3LGQJ7JUcsI8QI+CzJxCbQE5BNDGAq");
	this.shape.setTransform(896.175,194.2693);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.path, new cjs.Rectangle(-4,-4,1800.4,396.6), null);


(lib.cloud_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.cloud_1();
	this.instance.setTransform(0,0,0.2107,0.2107);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cloud_1_1, new cjs.Rectangle(0,0,215.8,215.8), null);


(lib.bolt_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bolt_1();
	this.instance.setTransform(0,0,0.1556,0.1558);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45,58);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(52.1,46.2,1,1,0,0,0,52.1,46.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,104.5,92.5), null);


(lib.storm_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.cloud_1_1();
	this.instance.setTransform(107.9,107.9,1,1,0,0,0,107.9,107.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.0195,scaleY:1.0195,x:110,y:112.55},23).to({scaleX:1,scaleY:1,x:107.9,y:107.9},24).wait(1));

	// Layer_2
	this.instance_1 = new lib.bolt_1_1("synched",0);
	this.instance_1.setTransform(114.5,156.9,1,1,0,0,0,22.5,28.9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36).to({alpha:1},0).wait(2).to({alpha:0},0).wait(2).to({regX:22.6,regY:29,rotation:45,x:90.95,y:150.3,alpha:1},0).wait(2).to({regX:22.5,regY:28.9,rotation:0,x:114.5,y:156.9,alpha:0},0).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220,222.6);


(lib.storm_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.cloud_1_1();
	this.instance.setTransform(107.9,107.9,1,1,0,0,0,107.9,107.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.0195,scaleY:1.0195,x:110,y:112.55},23).to({scaleX:1,scaleY:1,x:107.9,y:107.9},24).wait(1));

	// Layer_2
	this.instance_1 = new lib.bolt_1_1("synched",0);
	this.instance_1.setTransform(114.5,156.9,1,1,0,0,0,22.5,28.9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({alpha:1},0).wait(2).to({alpha:0},0).wait(2).to({regX:22.6,regY:29,rotation:45,x:90.95,y:150.3,alpha:1},0).wait(2).to({regX:22.5,regY:28.9,rotation:0,x:114.5,y:156.9,alpha:0},0).wait(39));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220,222.6);


(lib.storm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.cloud_1_1();
	this.instance.setTransform(107.9,107.9,1,1,0,0,0,107.9,107.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.0195,scaleY:1.0195,x:110,y:112.55},23).to({scaleX:1,scaleY:1,x:107.9,y:107.9},24).wait(1));

	// Layer_2
	this.instance_1 = new lib.bolt_1_1("synched",0);
	this.instance_1.setTransform(114.5,156.9,1,1,0,0,0,22.5,28.9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({alpha:1},0).wait(2).to({alpha:0},0).wait(2).to({regX:22.6,regY:29,rotation:45,x:90.95,y:150.3,alpha:1},0).wait(2).to({regX:22.5,regY:28.9,rotation:0,x:114.5,y:156.9,alpha:0},0).wait(19));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220,222.6);


// stage content:
(lib.FFICE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// storm
	this.instance = new lib.storm();
	this.instance.setTransform(1507.35,445.25,1.1112,1.1112,0,0,0,107.9,108);

	this.instance_1 = new lib.storm_3();
	this.instance_1.setTransform(1483.3,357.05,0.8239,0.8239,0,0,0,107.9,107.9);

	this.instance_2 = new lib.storm_2();
	this.instance_2.setTransform(1623,416.95,0.9976,0.9976,0,0,0,108,108);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(960));

	// plane
	this.instance_3 = new lib.Symbol2();
	this.instance_3.setTransform(55.65,650,0.6569,0.6569,-29.9989,0,0,52.1,46.2);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:46.3,scaleX:1,scaleY:1,rotation:-28.4774,guide:{path:[55.7,650,74.2,638.8,98.2,625.1]},alpha:1},23).to({regY:46.2,scaleX:0.9999,scaleY:0.9999,rotation:-0.8822,guide:{path:[98.3,625.1,111.8,617.4,127.1,608.8,237.5,546.7,350.2,493.5,507.9,419,647.5,372.8,790.7,325.4,908.1,310.3]}},417).to({regX:52.2,rotation:24.4042,guide:{path:[908.1,310.2,933.8,306.9,958.2,305.1,1029.8,300,1088.3,312.4,1111.1,317.3,1133.4,325.1]}},111).to({regY:46.3,rotation:45.8378,guide:{path:[1133.4,325.1,1165.4,336.3,1196.4,353.8,1243,379.9,1299.3,427,1316.2,441.2,1340.7,463.2]}},120).to({regX:52.3,regY:46.4,scaleX:0.9998,scaleY:0.9998,rotation:20.6058,guide:{path:[1340.7,463.2,1371.2,490.6,1413.3,530.1,1476.8,589.6,1660.4,646.8,1697.2,658.3,1736.1,668.8]}},216).to({regX:52.2,regY:46.2,scaleX:0.5567,scaleY:0.5567,rotation:14.9995,guide:{path:[1736.1,668.8,1757.9,674.7,1780.4,680.2,1811.6,688,1831.4,692.1]},alpha:0},48).wait(25));

	// pins
	this.instance_4 = new lib.pin();
	this.instance_4.setTransform(1832.85,656.1,0.2661,0.2661,0,0,0,144.5,173.1);

	this.instance_5 = new lib.pin();
	this.instance_5.setTransform(46.4,644.1,0.2661,0.2661,0,0,0,144.5,173.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(960));

	// path_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66FFCC").ss(8,1,1).p("EiMBAZcQFHjMIok2QRRpsRnoTQYprqV1nOQbRpBVRhkQdYiFcAI/QWaHMUfN5QOpJ6MPMSQGHGJDMEK");
	this.shape.setTransform(935.225,497.3499);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(960));

	// path_2
	this.instance_6 = new lib.path();
	this.instance_6.setTransform(935.15,497.8,1,1,0,0,0,896.1,194.2);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(433).to({alpha:1},7).wait(520));

	// map
	this.instance_7 = new lib.map_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(960));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(960,600,960,600);
// library properties:
lib.properties = {
	id: '36DBD9E392D6604F830CD2CCA94A103B',
	width: 1920,
	height: 1200,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png", id:"index_atlas_1"},
		{src:"images/index_atlas_2.png", id:"index_atlas_2"}
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
an.compositions['36DBD9E392D6604F830CD2CCA94A103B'] = {
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