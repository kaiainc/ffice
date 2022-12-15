let canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation, preloaderDiv;
let comp,lib,images,manifest,ss,queue,ssMetadata, progressBar,loading=0,imagesIDs,imagesSrc;

function init() {
	canvas = document.getElementById("canvas");
	preloaderDiv = document.getElementById("_preload_div_");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
  createjs.MotionGuidePlugin.install();
	comp=AdobeAn.getComposition("32E91FA9E50D334DB59FFB798AF48E01");
  lib=comp.getLibrary();
    /* progressBar = new ldBar(".ldBar") */
    /* document.querySelector(".loadingTxt").style.opacity = 1; */
    
    Promise.all(lib.properties.manifest.map(loadManifestEntry))
        .then(entries => {
          loadImagesIntoAnimate(entries);
          buildSpriteSheets(entries);

        })
        .catch(error => {
          throw error;
            console.log("an error occurred");
        });
}

function loadManifestEntry (manifestEntry) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener('load', (e) => {
        resolve(Object.assign({}, manifestEntry, { image: img }));
    });
    img.addEventListener('error', () => {
       reject("Failed to load image's URL: ${url}");
    });
    /* if(manifestEntry.src.includes("images")){
      console.log(manifestEntry.src);
    } */
    img.src = manifestEntry.src;
    loading++;
    //img.addEventListener('load', () => console.log(100/lib.properties.manifest.length * loading));
  });
}

function loadImagesIntoAnimate(manifestEntries) {
    manifestEntries.forEach(manifestEntry => comp.getImages()[manifestEntry.id] = manifestEntry.image);
}

function buildSpriteSheets(manifestEntries) {
  ss=comp.getSpriteSheet();

  for(i=0; i<lib.ssMetadata.length; i++) {
    const metadataEntry = lib.ssMetadata[i];
    const manifestEntry = manifestEntries.find(entry => entry.id === metadataEntry.name);

    if (manifestEntry === undefined) {
      throw new Error(`An image for manifest entry [${metadataEntry.name}] was not loaded.`);
    }
		ss[metadataEntry.name] = new createjs.SpriteSheet( {"images": [manifestEntry.image], "frames": metadataEntry.frames} )
	}
    const inter = setInterval(()=>{
        if(loading >= lib.properties.manifest.length -1){
            //document.querySelector(".loadingTxt").innerHTML = "creating experience";
            window.setTimeout(()=>{loadTheCanvas();},100);
            //loadTheCanvas();
            clearInterval(inter);
        }
    },20)
    //loadTheCanvas();
}
/* AUDIO */
const assetPath = "sounds/";
let soundNum=0;
const sounds = [
  {src:"Achievement.mp3", id:"Achievement"},
  {src:"AirplaneSeatbeltDingwav.mp3", id:"AirplaneSeatbeltDingwav"},
  {src:"AirplaneBy.mp3", id:"AirplaneBy"},
  {src:"Button15.mp3", id:"Button15"},
  {src:"EarnPoints.mp3", id:"EarnPoints"},
  {src:"bgm.mp3", id:"bgm"},
  {src:"bgm2.mp3", id:"bgm2"},
  {src:"btn_sound.mp3", id:"btn_sound"},
  {src:"RollingThunderStrikes.mp3", id:"RollingThunderStrikes"},
  {src:"SecretAreaUnlock1.mp3", id:"SecretAreaUnlock1"},
  {src:"simplenotificationalert01.mp3", id:"simplenotificationalert01"},
  {src:"SoftFail.mp3", id:"SoftFail"},
  {src:"WinGameCoin.mp3", id:"WinGameCoin"}
 ];
 createjs.Sound.on("fileload", ()=>{
    //console.log("loaded sound" + sounds[soundNum++].src );
  }); // call handleLoad when each sound loads
 createjs.Sound.registerSounds(sounds, assetPath);
/* ----- */
function loadTheCanvas(){
  exportRoot = new lib.ffice_v5a();
	stage = new lib.Stage(canvas);
  preloaderDiv.style.display = 'none';
	canvas.style.display = 'block';
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = lib.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
	}
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsive(true,'both',true,1,[canvas,anim_container,dom_overlay_container]);
	AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
}
function playSound(id, loop, offset) {
	return createjs.Sound.play(id, {'interrupt':createjs.Sound.INTERRUPT_EARLY, 'loop': loop, 'offset': offset});
}





