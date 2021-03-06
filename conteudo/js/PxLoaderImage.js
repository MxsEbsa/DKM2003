/*global PxLoader: true, define: true */ 

// PxLoader plugin to load images
function PxLoaderImage(url, tags, priority) {
    var self = this,
        loader = null;

    this.img = new Image();
    this.tags = tags;
    this.priority = priority;

    var onReadyStateChange = function() {
        if (self.img.readyState === 'complete') {
            removeEventHandlers();
            loader.onLoad(self);
        }
    };

    var onLoad = function() {
        removeEventHandlers();
        loader.onLoad(self);
    };

    var onError = function() {
        removeEventHandlers();
        loader.onError(self);
    };

    var removeEventHandlers = function() {
        self.unbind('load', onLoad);
        self.unbind('readystatechange', onReadyStateChange);
        self.unbind('error', onError);
    };

    this.start = function(pxLoader) {
        // we need the loader ref so we can notify upon completion
        loader = pxLoader;

        // NOTE: Must add event listeners before the src is set. We
        // also need to use the readystatechange because sometimes
        // load doesn't fire when an image is in the cache.
        self.bind('load', onLoad);
        self.bind('readystatechange', onReadyStateChange);
        self.bind('error', onError);

        self.img.src = url;
    };

    // called by PxLoader to check status of image (fallback in case
    // the event listeners are not triggered).
    this.checkStatus = function() {
        if (self.img.complete) {
            removeEventHandlers();
            loader.onLoad(self);
        }
    };

    // called by PxLoader when it is no longer waiting
    this.onTimeout = function() {
        removeEventHandlers();
        if (self.img.complete) {
            loader.onLoad(self);
        } else {
            loader.onTimeout(self);
        }
    };

    // returns a name for the resource that can be used in logging
    this.getName = function() {
        return url;
    };

    // cross-browser event binding
    this.bind = function(eventName, eventHandler) {
        if (self.img.addEventListener) {
            self.img.addEventListener(eventName, eventHandler, false);
        } else if (self.img.attachEvent) {
            self.img.attachEvent('on' + eventName, eventHandler);
        }
    };

    // cross-browser event un-binding
    this.unbind = function(eventName, eventHandler) {
        if (self.img.removeEventListener) {
            self.img.removeEventListener(eventName, eventHandler, false);
        } else if (self.img.detachEvent) {
            self.img.detachEvent('on' + eventName, eventHandler);
        }
    };

}

// add a convenience method to PxLoader for adding an image
PxLoader.prototype.addImage = function(url, tags, priority) {
    var imageLoader = new PxLoaderImage(url, tags, priority);
    this.add(imageLoader);

    // return the img element to the caller
    return imageLoader.img;
};

// AMD module support
if (typeof define === 'function' && define.amd) {
    define('PxLoaderImage', [], function() {
        return PxLoaderImage;
    });
}
window.addEventListener("load", function () {
	setTimeout(function (){
		window.scrollTo(0, 1);
	}, 0);
});

function updateScale() {var w = $(window).width(),h = $(window).height(),scaleFinal = 1,scaleX = w / 1024, scaleY = h / 660; if(scaleX < 1 && scaleY < 1){
	if(scaleX < scaleY) scaleFinal = scaleX; else scaleFinal = scaleY;}else{ if(scaleX < 1) scaleFinal = scaleX; else if(scaleY < 1) scaleFinal = scaleY;}$(".container").css({"transform":"scale("+scaleFinal+","+scaleFinal+")"});}
	

$(window).load(function(e){
	var loader = new PxLoader();
	var loadimagens = new Array (
	"capa.jpg"
	);
	for(var i=0; i<loadimagens.length; i++){pathimagens = "img/"+loadimagens[i];loader.addImage(pathimagens);}
	loader.addProgressListener(function(e){console.log(e.resource.getName());});
	loader.addCompletionListener(function(e){
		$("#loading").fadeOut(300,function(){$(this).remove();});
		console.log(loadimagens.length+' imagens carregadas!');
		start();
		updateScale();
	});
	loader.start();
});
