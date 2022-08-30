(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"cutscene_LAX_atlas_1", frames: [[0,0,1280,800],[0,802,1280,800]]},
		{name:"cutscene_LAX_atlas_2", frames: [[0,0,1280,800],[0,802,1280,800]]},
		{name:"cutscene_LAX_atlas_3", frames: [[0,0,1280,800],[0,802,1280,800]]},
		{name:"cutscene_LAX_atlas_4", frames: [[0,0,1280,800],[0,802,1280,800]]}
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



(lib._787_light1 = function() {
	this.initialize(ss["cutscene_LAX_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._787_light2 = function() {
	this.initialize(ss["cutscene_LAX_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._787_light3 = function() {
	this.initialize(ss["cutscene_LAX_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.lax_back = function() {
	this.initialize(ss["cutscene_LAX_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.lax_fore = function() {
	this.initialize(ss["cutscene_LAX_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.lax_mid1 = function() {
	this.initialize(ss["cutscene_LAX_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.lax_mid2 = function() {
	this.initialize(ss["cutscene_LAX_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.lax_skyline = function() {
	this.initialize(ss["cutscene_LAX_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.sky = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.lax_skyline();
	this.instance.setTransform(0,0,1.5015,1.5351);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1921.9,1228.1);


(lib.mid2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.lax_mid2();
	this.instance.setTransform(0,0,1.5015,1.5351);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1921.9,1228.1);


(lib.mid1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.lax_mid1();
	this.instance.setTransform(0,0,1.5015,1.5351);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1921.9,1228.1);


(lib.fore = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.lax_fore();
	this.instance.setTransform(0,0,1.5015,1.5351);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1921.9,1228.1);


(lib.back = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.lax_back();
	this.instance.setTransform(0,0,1.5015,1.5351);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1921.9,1228.1);


(lib._787 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._787_light3();

	this.instance_1 = new lib._787_light1();

	this.instance_2 = new lib._787_light2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_2}]},10).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


// stage content:
(lib.LAX = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _787
	this.instance = new lib._787("synched",0);
	this.instance.setTransform(1435.85,-600.25,2.4753,2.4753,0,0,0,639.9,399.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:640,regY:400,scaleX:2.4561,scaleY:2.4561,rotation:0.0547,x:1435.65,y:-589.05,startPosition:1},0).wait(1).to({scaleX:2.437,scaleY:2.437,rotation:0.1096,x:1435.2,y:-578,startPosition:2},0).wait(1).to({scaleX:2.4178,scaleY:2.4178,rotation:0.1647,x:1434.7,y:-567,startPosition:3},0).wait(1).to({scaleX:2.3985,scaleY:2.3985,rotation:0.22,x:1434.25,y:-555.9,startPosition:4},0).wait(1).to({scaleX:2.3792,scaleY:2.3792,rotation:0.2754,x:1433.8,y:-544.85,startPosition:5},0).wait(1).to({scaleX:2.3598,scaleY:2.3598,rotation:0.331,x:1433.3,y:-533.8,startPosition:6},0).wait(1).to({scaleX:2.3404,scaleY:2.3404,rotation:0.3866,x:1432.85,y:-522.6,startPosition:7},0).wait(1).to({scaleX:2.3209,scaleY:2.3209,rotation:0.4423,x:1432.4,y:-511.5,startPosition:8},0).wait(1).to({scaleX:2.3014,scaleY:2.3014,rotation:0.4982,x:1431.85,y:-500.3,startPosition:9},0).wait(1).to({scaleX:2.2819,scaleY:2.2819,rotation:0.554,x:1431.4,y:-489.15,startPosition:10},0).wait(1).to({scaleX:2.2624,scaleY:2.2624,rotation:0.6099,x:1430.9,y:-477.95,startPosition:11},0).wait(1).to({scaleX:2.2429,scaleY:2.2429,rotation:0.6658,x:1430.4,y:-466.7,startPosition:12},0).wait(1).to({scaleX:2.2234,scaleY:2.2234,rotation:0.7218,x:1429.9,y:-455.6,startPosition:13},0).wait(1).to({scaleX:2.2038,scaleY:2.2038,rotation:0.7776,x:1429.45,y:-444.35,startPosition:14},0).wait(1).to({scaleX:2.1843,scaleY:2.1843,rotation:0.8335,x:1428.95,y:-433.15,startPosition:15},0).wait(1).to({scaleX:2.1648,scaleY:2.1648,rotation:0.8893,x:1428.5,y:-422,startPosition:16},0).wait(1).to({scaleX:2.1454,scaleY:2.1454,rotation:0.945,x:1428.05,y:-410.9,startPosition:17},0).wait(1).to({scaleX:2.126,scaleY:2.126,rotation:1.0006,x:1427.55,y:-399.8,startPosition:18},0).wait(1).to({scaleX:2.1067,scaleY:2.1067,rotation:1.0561,x:1427.05,y:-388.65,startPosition:19},0).wait(1).to({scaleX:2.0874,scaleY:2.0874,rotation:1.1114,x:1426.6,y:-377.6,startPosition:20},0).wait(1).to({scaleX:2.0681,scaleY:2.0681,rotation:1.1666,x:1426.15,y:-366.55,startPosition:21},0).wait(1).to({scaleX:2.0489,scaleY:2.0489,rotation:1.2216,x:1425.7,y:-355.55,startPosition:22},0).wait(1).to({scaleX:2.0298,scaleY:2.0298,rotation:1.2764,x:1425.15,y:-344.55,startPosition:23},0).wait(1).to({scaleX:2.0107,scaleY:2.0107,rotation:1.331,x:1424.75,y:-333.65,startPosition:0},0).wait(1).to({scaleX:1.9918,scaleY:1.9918,rotation:1.3854,x:1424.25,y:-322.75,startPosition:1},0).wait(1).to({scaleX:1.9729,scaleY:1.9729,rotation:1.4395,x:1423.85,y:-311.95,startPosition:2},0).wait(1).to({scaleX:1.9541,scaleY:1.9541,rotation:1.4934,x:1423.35,y:-301.15,startPosition:3},0).wait(1).to({scaleX:1.9353,scaleY:1.9353,rotation:1.5469,x:1422.9,y:-290.4,startPosition:4},0).wait(1).to({scaleX:1.9167,scaleY:1.9167,rotation:1.6002,x:1422.45,y:-279.75,startPosition:5},0).wait(1).to({scaleX:1.8982,scaleY:1.8982,rotation:1.6532,x:1422,y:-269.2,startPosition:6},0).wait(1).to({scaleX:1.8799,scaleY:1.8799,rotation:1.7058,x:1421.5,y:-258.65,startPosition:7},0).wait(1).to({scaleX:1.8616,scaleY:1.8616,rotation:1.7581,x:1421.05,y:-248.15,startPosition:8},0).wait(1).to({scaleX:1.8435,scaleY:1.8435,rotation:1.8101,x:1420.65,y:-237.8,startPosition:9},0).wait(1).to({scaleX:1.8255,scaleY:1.8255,rotation:1.8616,x:1420.25,y:-227.45,startPosition:10},0).wait(1).to({scaleX:1.8076,scaleY:1.8076,rotation:1.9128,x:1419.75,y:-217.2,startPosition:11},0).wait(1).to({scaleX:1.7899,scaleY:1.7899,rotation:1.9636,x:1419.35,y:-207.05,startPosition:12},0).wait(1).to({scaleX:1.7723,scaleY:1.7723,rotation:2.014,x:1418.9,y:-197,startPosition:13},0).wait(1).to({scaleX:1.7549,scaleY:1.7549,rotation:2.064,x:1418.45,y:-186.95,startPosition:14},0).wait(1).to({scaleX:1.7376,scaleY:1.7376,rotation:2.1136,x:1418,y:-177.05,startPosition:15},0).wait(1).to({scaleX:1.7204,scaleY:1.7204,rotation:2.1627,x:1417.65,y:-167.2,startPosition:16},0).wait(1).to({scaleX:1.7034,scaleY:1.7034,rotation:2.2114,x:1417.2,y:-157.5,startPosition:17},0).wait(1).to({scaleX:1.6866,scaleY:1.6866,rotation:2.2596,x:1416.8,y:-147.85,startPosition:18},0).wait(1).to({scaleX:1.6699,scaleY:1.6699,rotation:2.3074,x:1416.4,y:-138.25,startPosition:19},0).wait(1).to({scaleX:1.6534,scaleY:1.6534,rotation:2.3547,x:1416,y:-128.8,startPosition:20},0).wait(1).to({scaleX:1.6371,scaleY:1.6371,rotation:2.4015,x:1415.6,y:-119.4,startPosition:21},0).wait(1).to({scaleX:1.6209,scaleY:1.6209,rotation:2.4478,x:1415.2,y:-110.15,startPosition:22},0).wait(1).to({scaleX:1.6049,scaleY:1.6049,rotation:2.4937,x:1414.8,y:-100.95,startPosition:23},0).wait(1).to({scaleX:1.589,scaleY:1.589,rotation:2.5391,x:1414.4,y:-91.9,startPosition:0},0).wait(1).to({scaleX:1.5734,scaleY:1.5734,rotation:2.584,x:1414.05,y:-82.9,startPosition:1},0).wait(1).to({scaleX:1.5579,scaleY:1.5579,rotation:2.6283,x:1413.7,y:-74.05,startPosition:2},0).wait(1).to({scaleX:1.5425,scaleY:1.5425,rotation:2.6722,x:1413.3,y:-65.25,startPosition:3},0).wait(1).to({scaleX:1.5274,scaleY:1.5274,rotation:2.7156,x:1412.9,y:-56.55,startPosition:4},0).wait(1).to({scaleX:1.5125,scaleY:1.5125,rotation:2.7584,x:1412.6,y:-47.95,startPosition:5},0).wait(1).to({scaleX:1.4977,scaleY:1.4977,rotation:2.8008,x:1412.2,y:-39.5,startPosition:6},0).wait(1).to({scaleX:1.4831,scaleY:1.4831,rotation:2.8426,x:1411.85,y:-31.15,startPosition:7},0).wait(1).to({scaleX:1.4687,scaleY:1.4687,rotation:2.884,x:1411.5,y:-22.9,startPosition:8},0).wait(1).to({scaleX:1.4544,scaleY:1.4544,rotation:2.9248,x:1411.1,y:-14.7,startPosition:9},0).wait(1).to({scaleX:1.4403,scaleY:1.4403,rotation:2.9651,x:1410.75,y:-6.65,startPosition:10},0).wait(1).to({scaleX:1.4265,scaleY:1.4265,rotation:3.0049,x:1410.45,y:1.3,startPosition:11},0).wait(1).to({scaleX:1.4128,scaleY:1.4128,rotation:3.0442,x:1410.1,y:9.15,startPosition:12},0).wait(1).to({scaleX:1.3992,scaleY:1.3992,rotation:3.0829,x:1409.8,y:16.9,startPosition:13},0).wait(1).to({scaleX:1.3859,scaleY:1.3859,rotation:3.1212,x:1409.45,y:24.55,startPosition:14},0).wait(1).to({scaleX:1.3727,scaleY:1.3727,rotation:3.1589,x:1409.15,y:32.15,startPosition:15},0).wait(1).to({regX:639.9,regY:399.9,scaleX:1.3597,scaleY:1.3597,rotation:3.1961,x:1408.75,y:39.5,startPosition:16},0).wait(1).to({regX:640,regY:400,scaleX:1.3454,scaleY:1.3454,rotation:3.1295,x:1408.45,y:47.8,alpha:0.9948,startPosition:17},0).wait(1).to({scaleX:1.3313,scaleY:1.3313,rotation:3.0638,x:1408.1,y:55.9,alpha:0.9896,startPosition:18},0).wait(1).to({scaleX:1.3175,scaleY:1.3175,rotation:2.999,x:1407.8,y:63.85,alpha:0.9846,startPosition:19},0).wait(1).to({scaleX:1.3038,scaleY:1.3038,rotation:2.9351,x:1407.45,y:71.65,alpha:0.9796,startPosition:20},0).wait(1).to({scaleX:1.2903,scaleY:1.2903,rotation:2.8721,x:1407.1,y:79.4,alpha:0.9747,startPosition:21},0).wait(1).to({scaleX:1.277,scaleY:1.277,rotation:2.81,x:1406.8,y:87.05,alpha:0.9698,startPosition:22},0).wait(1).to({scaleX:1.2638,scaleY:1.2638,rotation:2.7489,x:1406.45,y:94.6,alpha:0.965,startPosition:23},0).wait(1).to({scaleX:1.2509,scaleY:1.2509,rotation:2.6886,x:1406.2,y:101.95,alpha:0.9603,startPosition:0},0).wait(1).to({scaleX:1.2382,scaleY:1.2382,rotation:2.6291,x:1405.85,y:109.3,alpha:0.9557,startPosition:1},0).wait(1).to({scaleX:1.2256,scaleY:1.2256,rotation:2.5706,x:1405.5,y:116.5,alpha:0.9511,startPosition:2},0).wait(1).to({scaleX:1.2133,scaleY:1.2133,rotation:2.513,x:1405.2,y:123.55,alpha:0.9466,startPosition:3},0).wait(1).to({scaleX:1.2011,scaleY:1.2011,rotation:2.4562,x:1404.95,y:130.55,alpha:0.9421,startPosition:4},0).wait(1).to({scaleX:1.1892,scaleY:1.1892,rotation:2.4002,x:1404.65,y:137.4,alpha:0.9377,startPosition:5},0).wait(1).to({scaleX:1.1774,scaleY:1.1774,rotation:2.3452,x:1404.35,y:144.2,alpha:0.9334,startPosition:6},0).wait(1).to({scaleX:1.1657,scaleY:1.1657,rotation:2.2909,x:1404.05,y:150.8,alpha:0.9292,startPosition:7},0).wait(1).to({scaleX:1.1543,scaleY:1.1543,rotation:2.2375,x:1403.8,y:157.4,alpha:0.925,startPosition:8},0).wait(1).to({scaleX:1.143,scaleY:1.143,rotation:2.185,x:1403.5,y:163.85,alpha:0.9209,startPosition:9},0).wait(1).to({scaleX:1.1319,scaleY:1.1319,rotation:2.1332,x:1403.3,y:170.2,alpha:0.9169,startPosition:10},0).wait(1).to({scaleX:1.121,scaleY:1.121,rotation:2.0823,x:1402.95,y:176.4,alpha:0.9129,startPosition:11},0).wait(1).to({scaleX:1.1103,scaleY:1.1103,rotation:2.0322,x:1402.7,y:182.6,alpha:0.909,startPosition:12},0).wait(1).to({scaleX:1.0997,scaleY:1.0997,rotation:1.9829,x:1402.5,y:188.65,alpha:0.9051,startPosition:13},0).wait(1).to({scaleX:1.0893,scaleY:1.0893,rotation:1.9344,x:1402.2,y:194.6,alpha:0.9013,startPosition:14},0).wait(1).to({scaleX:1.0791,scaleY:1.0791,rotation:1.8866,x:1402,y:200.5,alpha:0.8976,startPosition:15},0).wait(1).to({scaleX:1.069,scaleY:1.069,rotation:1.8397,x:1401.7,y:206.25,alpha:0.8939,startPosition:16},0).wait(1).to({scaleX:1.0591,scaleY:1.0591,rotation:1.7935,x:1401.5,y:211.9,alpha:0.8903,startPosition:17},0).wait(1).to({scaleX:1.0494,scaleY:1.0494,rotation:1.7481,x:1401.25,y:217.5,alpha:0.8867,startPosition:18},0).wait(1).to({scaleX:1.0398,scaleY:1.0398,rotation:1.7034,x:1401.05,y:223,alpha:0.8832,startPosition:19},0).wait(1).to({scaleX:1.0304,scaleY:1.0304,rotation:1.6595,x:1400.8,y:228.4,alpha:0.8798,startPosition:20},0).wait(1).to({scaleX:1.0212,scaleY:1.0212,rotation:1.6163,x:1400.55,y:233.7,alpha:0.8764,startPosition:21},0).wait(1).to({scaleX:1.0121,scaleY:1.0121,rotation:1.5739,x:1400.3,y:238.9,alpha:0.8731,startPosition:22},0).wait(1).to({scaleX:1.0031,scaleY:1.0031,rotation:1.5322,x:1400.1,y:244,alpha:0.8698,startPosition:23},0).wait(1).to({scaleX:0.9943,scaleY:0.9943,rotation:1.4912,x:1399.9,y:249.05,alpha:0.8666,startPosition:0},0).wait(1).to({scaleX:0.9857,scaleY:0.9857,rotation:1.4509,x:1399.65,y:253.95,alpha:0.8635,startPosition:1},0).wait(1).to({scaleX:0.9772,scaleY:0.9772,rotation:1.4113,x:1399.4,y:258.85,alpha:0.8604,startPosition:2},0).wait(1).to({scaleX:0.9689,scaleY:0.9689,rotation:1.3724,x:1399.25,y:263.65,alpha:0.8573,startPosition:3},0).wait(1).to({scaleX:0.9607,scaleY:0.9607,rotation:1.3342,x:1399.1,y:268.3,alpha:0.8544,startPosition:4},0).wait(1).to({scaleX:0.9527,scaleY:0.9527,rotation:1.2966,x:1398.9,y:272.95,alpha:0.8514,startPosition:5},0).wait(1).to({scaleX:0.9448,scaleY:0.9448,rotation:1.2598,x:1398.7,y:277.45,alpha:0.8485,startPosition:6},0).wait(1).to({scaleX:0.937,scaleY:0.937,rotation:1.2236,x:1398.5,y:281.9,alpha:0.8457,startPosition:7},0).wait(1).to({scaleX:0.9294,scaleY:0.9294,rotation:1.1881,x:1398.35,y:286.25,alpha:0.8429,startPosition:8},0).wait(1).to({scaleX:0.9219,scaleY:0.9219,rotation:1.1532,x:1398.15,y:290.55,alpha:0.8402,startPosition:9},0).wait(1).to({scaleX:0.9146,scaleY:0.9146,rotation:1.1189,x:1397.95,y:294.8,alpha:0.8375,startPosition:10},0).wait(1).to({scaleX:0.9074,scaleY:0.9074,rotation:1.0853,x:1397.8,y:298.9,alpha:0.8349,startPosition:11},0).wait(1).to({scaleX:0.9003,scaleY:0.9003,rotation:1.0523,x:1397.6,y:302.95,alpha:0.8323,startPosition:12},0).wait(1).to({scaleX:0.8934,scaleY:0.8934,rotation:1.0199,x:1397.45,y:306.95,alpha:0.8298,startPosition:13},0).wait(1).to({scaleX:0.8866,scaleY:0.8866,rotation:0.9882,x:1397.25,y:310.8,alpha:0.8273,startPosition:14},0).wait(1).to({scaleX:0.8799,scaleY:0.8799,rotation:0.9571,x:1397.1,y:314.65,alpha:0.8249,startPosition:15},0).wait(1).to({scaleX:0.8733,scaleY:0.8733,rotation:0.9265,x:1396.9,y:318.45,alpha:0.8225,startPosition:16},0).wait(1).to({scaleX:0.8669,scaleY:0.8669,rotation:0.8966,x:1396.8,y:322.05,alpha:0.8201,startPosition:17},0).wait(1).to({scaleX:0.8606,scaleY:0.8606,rotation:0.8672,x:1396.65,y:325.7,alpha:0.8178,startPosition:18},0).wait(1).to({scaleX:0.8545,scaleY:0.8545,rotation:0.8384,x:1396.5,y:329.25,alpha:0.8156,startPosition:19},0).wait(1).to({scaleX:0.8484,scaleY:0.8484,rotation:0.8102,x:1396.35,y:332.75,alpha:0.8134,startPosition:20},0).wait(1).to({scaleX:0.8425,scaleY:0.8425,rotation:0.7825,x:1396.2,y:336.05,alpha:0.8112,startPosition:21},0).wait(1).to({scaleX:0.8367,scaleY:0.8367,rotation:0.7555,x:1396.05,y:339.4,alpha:0.8091,startPosition:22},0).wait(1).to({scaleX:0.831,scaleY:0.831,rotation:0.7289,x:1395.95,y:342.6,alpha:0.807,startPosition:23},0).wait(1).to({scaleX:0.8254,scaleY:0.8254,rotation:0.7029,x:1395.8,y:345.8,alpha:0.805,startPosition:0},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:0.6775,x:1395.6,y:348.9,alpha:0.803,startPosition:1},0).wait(1).to({scaleX:0.8147,scaleY:0.8147,rotation:0.6526,x:1395.55,y:352.05,alpha:0.801,startPosition:2},0).wait(1).to({scaleX:0.8094,scaleY:0.8094,rotation:0.6282,x:1395.4,y:354.95,alpha:0.7991,startPosition:3},0).wait(1).to({scaleX:0.8043,scaleY:0.8043,rotation:0.6043,x:1395.2,y:357.9,alpha:0.7973,startPosition:4},0).wait(1).to({scaleX:0.7993,scaleY:0.7993,rotation:0.581,x:1395.1,y:360.8,alpha:0.7954,startPosition:5},0).wait(1).to({scaleX:0.7944,scaleY:0.7944,rotation:0.5582,x:1395,y:363.6,alpha:0.7937,startPosition:6},0).wait(1).to({scaleX:0.7896,scaleY:0.7896,rotation:0.5358,x:1394.9,y:366.3,alpha:0.7919,startPosition:7},0).wait(1).to({scaleX:0.785,scaleY:0.785,rotation:0.514,x:1394.8,y:369,alpha:0.7902,startPosition:8},0).wait(1).to({scaleX:0.7804,scaleY:0.7804,rotation:0.4927,x:1394.6,y:371.65,alpha:0.7885,startPosition:9},0).wait(1).to({scaleX:0.7759,scaleY:0.7759,rotation:0.4719,x:1394.55,y:374.2,alpha:0.7869,startPosition:10},0).wait(1).to({scaleX:0.7716,scaleY:0.7716,rotation:0.4515,x:1394.4,y:376.7,alpha:0.7853,startPosition:11},0).wait(1).to({scaleX:0.7673,scaleY:0.7673,rotation:0.4316,x:1394.35,y:379.15,alpha:0.7838,startPosition:12},0).wait(1).to({scaleX:0.7632,scaleY:0.7632,rotation:0.4122,x:1394.25,y:381.5,alpha:0.7822,startPosition:13},0).wait(1).to({scaleX:0.7591,scaleY:0.7591,rotation:0.3933,x:1394.15,y:383.85,alpha:0.7808,startPosition:14},0).wait(1).to({scaleX:0.7551,scaleY:0.7551,rotation:0.3748,x:1394.05,y:386.1,alpha:0.7793,startPosition:15},0).wait(1).to({scaleX:0.7513,scaleY:0.7513,rotation:0.3568,x:1394,y:388.35,alpha:0.7779,startPosition:16},0).wait(1).to({scaleX:0.7475,scaleY:0.7475,rotation:0.3392,x:1393.9,y:390.5,alpha:0.7765,startPosition:17},0).wait(1).to({scaleX:0.7438,scaleY:0.7438,rotation:0.3221,x:1393.8,y:392.6,alpha:0.7752,startPosition:18},0).wait(1).to({scaleX:0.7403,scaleY:0.7403,rotation:0.3054,x:1393.7,y:394.6,alpha:0.7739,startPosition:19},0).wait(1).to({scaleX:0.7368,scaleY:0.7368,rotation:0.2892,x:1393.55,y:396.6,alpha:0.7726,startPosition:20},0).wait(1).to({scaleX:0.7334,scaleY:0.7334,rotation:0.2734,x:1393.5,y:398.6,alpha:0.7714,startPosition:21},0).wait(1).to({scaleX:0.7301,scaleY:0.7301,rotation:0.258,x:1393.45,y:400.5,alpha:0.7702,startPosition:22},0).wait(1).to({scaleX:0.7269,scaleY:0.7269,rotation:0.243,x:1393.35,y:402.3,alpha:0.769,startPosition:23},0).wait(1).to({scaleX:0.7238,scaleY:0.7238,rotation:0.2285,x:1393.3,y:404.1,alpha:0.7679,startPosition:0},0).wait(1).to({scaleX:0.7207,scaleY:0.7207,rotation:0.2144,x:1393.2,y:405.8,alpha:0.7668,startPosition:1},0).wait(1).to({scaleX:0.7178,scaleY:0.7178,rotation:0.2007,x:1393.15,y:407.5,alpha:0.7657,startPosition:2},0).wait(1).to({scaleX:0.715,scaleY:0.715,rotation:0.1873,x:1393.05,y:409.1,alpha:0.7647,startPosition:3},0).wait(1).to({scaleX:0.7122,scaleY:0.7122,rotation:0.1744,x:1393,y:410.7,alpha:0.7636,startPosition:4},0).wait(1).to({scaleX:0.7095,scaleY:0.7095,rotation:0.1619,x:1392.9,y:412.3,alpha:0.7627,startPosition:5},0).wait(1).to({scaleX:0.7069,scaleY:0.7069,rotation:0.1498,x:1392.85,y:413.75,alpha:0.7617,startPosition:6},0).wait(1).to({scaleX:0.7044,scaleY:0.7044,rotation:0.1381,x:1392.8,y:415.2,alpha:0.7608,startPosition:7},0).wait(1).to({scaleX:0.702,scaleY:0.702,rotation:0.1267,x:1392.75,y:416.6,alpha:0.7599,startPosition:8},0).wait(1).to({scaleX:0.6996,scaleY:0.6996,rotation:0.1158,x:1392.7,y:417.95,alpha:0.7591,startPosition:9},0).wait(1).to({scaleX:0.6973,scaleY:0.6973,rotation:0.1052,x:1392.65,y:419.25,alpha:0.7582,startPosition:10},0).wait(1).to({scaleX:0.6951,scaleY:0.6951,rotation:0.0949,x:1392.6,y:420.5,alpha:0.7574,startPosition:11},0).wait(1).to({scaleX:0.693,scaleY:0.693,rotation:0.0851,x:1392.55,y:421.65,alpha:0.7567,startPosition:12},0).wait(1).to({scaleX:0.691,scaleY:0.691,rotation:0.0756,x:1392.5,y:422.85,alpha:0.7559,startPosition:13},0).wait(1).to({scaleX:0.6891,scaleY:0.6891,rotation:0.0665,x:1392.45,y:423.95,alpha:0.7552,startPosition:14},0).wait(1).to({scaleX:0.6872,scaleY:0.6872,rotation:0.0577,x:1392.4,y:425.05,alpha:0.7545,startPosition:15},0).wait(1).to({scaleX:0.6854,scaleY:0.6854,rotation:0.0493,x:1392.35,y:426.05,alpha:0.7539,startPosition:16},0).wait(1).to({scaleX:0.6836,scaleY:0.6836,rotation:0.0412,x:1392.3,y:427.05,alpha:0.7532,startPosition:17},0).wait(1).to({scaleX:0.682,scaleY:0.682,rotation:0.0335,x:1392.25,y:428.05,alpha:0.7526,startPosition:18},0).wait(1).to({scaleX:0.6804,scaleY:0.6804,rotation:0.0261,y:428.95,alpha:0.752,startPosition:19},0).wait(1).to({scaleX:0.6789,scaleY:0.6789,rotation:0.0191,x:1392.2,y:429.8,alpha:0.7515,startPosition:20},0).wait(1).to({scaleX:0.6775,scaleY:0.6775,rotation:0.0124,x:1392.15,y:430.65,alpha:0.751,startPosition:21},0).wait(1).to({scaleX:0.6761,scaleY:0.6761,rotation:0.006,y:431.4,alpha:0.7505,startPosition:22},0).wait(1).to({regX:640.1,regY:400.1,scaleX:0.6748,scaleY:0.6748,rotation:0,x:1392.05,y:432.15,alpha:0.75,startPosition:23},0).wait(1));

	// lax_fore_png
	this.instance_1 = new lib.fore("synched",0);
	this.instance_1.setTransform(961.05,375.15,1.5496,1.5496,0,0,0,961,614.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:960.9,regY:614,scaleX:1.2831,scaleY:1.2831,x:960.95,y:939.15},167,cjs.Ease.quadInOut).wait(1));

	// lax_mid1_png
	this.instance_2 = new lib.mid1("synched",0);
	this.instance_2.setTransform(961.05,319.15,1.5496,1.5496,0,0,0,961,614.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:960.8,regY:613.9,scaleX:1.4338,scaleY:1.4449,x:960.95,y:703.15},167,cjs.Ease.sineInOut).wait(1));

	// lax_mid2_png
	this.instance_3 = new lib.mid2("synched",0);
	this.instance_3.setTransform(961.05,319.15,1.5496,1.5496,0,0,0,961,614.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:960.9,regY:614,scaleX:1.3747,scaleY:1.3747,x:961,y:651.15},167,cjs.Ease.sineInOut).wait(1));

	// lax_back_png
	this.instance_4 = new lib.back("synched",0);
	this.instance_4.setTransform(961.05,319.15,1.5496,1.5496,0,0,0,961,614.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:960.9,regY:614,scaleX:1.3456,scaleY:1.3456,y:619.1},167,cjs.Ease.sineInOut).wait(1));

	// lax_skyline_png
	this.instance_5 = new lib.sky("synched",0);
	this.instance_5.setTransform(523.05,792.75,1.4538,1.4538,0,0,0,961,614.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:960.9,regY:614,scaleX:1.4517,scaleY:1.4517,x:524.9,y:571.1},167,cjs.Ease.sineInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(86,-990.1,2934.3,2717.2);
// library properties:
lib.properties = {
	id: '6FEEDD49F9EA7642803FCB6C2B0F4266',
	width: 1920,
	height: 1200,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/cutscene_LAX_atlas_1.png?1661819802825", id:"cutscene_LAX_atlas_1"},
		{src:"images/cutscene_LAX_atlas_2.png?1661819802825", id:"cutscene_LAX_atlas_2"},
		{src:"images/cutscene_LAX_atlas_3.png?1661819802825", id:"cutscene_LAX_atlas_3"},
		{src:"images/cutscene_LAX_atlas_4.png?1661819802825", id:"cutscene_LAX_atlas_4"}
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
an.compositions['6FEEDD49F9EA7642803FCB6C2B0F4266'] = {
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