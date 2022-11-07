(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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


(lib.SUB = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgGAGQgCgCAAgEQABgDADgDQADgCACAAQAEAAACACQADADgBADQgBAEgDACQgDADgDAAQgDAAgCgDg");
	this.shape.setTransform(242.9,12.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAYIAKgHQAHAJAKAAQAFAAAEgCQAGgDABgGQABgFgFgCQgCgCgIgCQgLgDgEgCQgHgEACgLQABgJAJgGQAIgFAJAAQARAAAGAMIgLAHQgEgIgJAAQgGAAgDACQgFADgBAEQAAAIAQADQAKACAFADQAGAFgCAKQgBALgKAFQgIAGgKAAQgTAAgHgNg");
	this.shape_1.setTransform(237.85,9.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxA1IAOhpIAoAAQATAAANALQARAPgEAaQgEAagUAPQgRAMgSAAgAgjAqIAYAAQASAAANgLQANgKADgVQADgUgKgLQgKgJgTgBIgYAAg");
	this.shape_2.setTransform(229.439,8.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglAoQgOgQAEgYQADgXASgPQARgRAXAAQAYAAALARIgMAIQgIgNgRAAQgQAAgOANQgNANgDARQgCATAJAMQAKANARAAQATAAANgPIAJAIQgRATgZAAQgXAAgNgQg");
	this.shape_3.setTransform(218.964,8.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdAYIAKgHQAGAJALAAQAFAAAFgCQAFgDABgGQABgFgFgCQgCgCgIgCQgLgDgEgCQgHgEACgLQABgJAJgGQAIgFAKAAQAQAAAGAMIgLAHQgEgIgJAAQgGAAgDACQgFADgBAEQAAAIAQADQAKACAFADQAGAFgCAKQgBALgJAFQgJAGgKAAQgTAAgHgNg");
	this.shape_4.setTransform(205.7,9.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdAYIAKgHQAGAJALAAQAFAAAEgCQAGgDABgGQABgFgEgCQgEgCgGgCQgMgDgEgCQgHgEABgLQACgJAJgGQAIgFAJAAQASAAAFAMIgLAHQgEgIgKAAQgFAAgEACQgEADgBAEQAAAIAPADQALACAFADQAGAFgCAKQgBALgKAFQgIAGgLAAQgSAAgHgNg");
	this.shape_5.setTransform(199.35,9.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcAaQgIgKACgQQACgPAMgLQAMgKAOAAQAPAAAIAKQAIAKgCAQIgBADIg4AAQAAAKAFAGQAGAHAJAAQANAAAKgKIAIAGQgNAPgTAAQgRAAgIgLgAgLgTQgHAFgCAIIArAAQABgIgFgFQgFgGgKAAQgIAAgHAGg");
	this.shape_6.setTransform(192.226,9.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAPAkIAGgpQADgTgQAAQgVAAgEAaIgEAiIgMAAIAHg0IACgRIALAAIgBALIAAAAQADgFAHgEQAGgEAIAAQAOAAAGAIQAFAIgCAMIgGArg");
	this.shape_7.setTransform(183.7517,9.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNA1IAKhFIALAAIgJBFgAgBglQgCgDABgEQAAgDACgDQADgCAEAAQADAAACACQADADgBADQAAAEgDADQgDACgEAAQgEAAgBgCg");
	this.shape_8.setTransform(178.2643,8.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdAYIAKgHQAGAJALAAQAFAAAEgCQAGgDABgGQABgFgEgCQgEgCgGgCQgMgDgEgCQgHgEABgLQACgJAJgGQAIgFAJAAQASAAAFAMIgLAHQgEgIgKAAQgFAAgEACQgEADgBAEQAAAIAPADQALACAFADQAGAFgCAKQgBALgKAFQgIAGgLAAQgSAAgHgNg");
	this.shape_9.setTransform(172.8,9.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdAcQgFgIACgNIAGgqIALAAIgGApQgCATAQAAQAVAAADgaIAFgiIAMAAIgIA0IgBARIgLAAIABgLQgEAFgGAEQgHAEgIAAQgNAAgGgIg");
	this.shape_10.setTransform(165.8233,9.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgnA1IAPhpIAgAAQAPAAAIAGQAKAGgCAOQgCATgUAFQAKABAGAHQAGAHgBALQgDAPgOAIQgLAGgRAAgAgYAqIAVAAQAKAAAHgFQAJgFABgJQACgLgIgEQgFgFgLAAIgVAAgAgRgHIARAAQAXAAADgSQACgQgXAAIgSAAg");
	this.shape_11.setTransform(156.8167,8.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAPAkIAGgpQADgTgQAAQgVAAgEAaIgEAiIgMAAIAHg0IACgRIALAAIgBALIAAAAQADgFAHgEQAGgEAIAAQAOAAAGAIQAFAIgCAMIgGArg");
	this.shape_12.setTransform(143.6017,9.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgdAbQgKgLADgQQACgPAMgLQAMgKAPAAQARAAAJAKQAJALgCAPQgDARgMAKQgMAKgPAAQgQAAgJgKgAgOgRQgIAHgCAKQgBALAFAHQAGAIAMAAQAKAAAIgIQAIgHABgLQACgKgGgHQgGgIgLAAQgKAAgIAIg");
	this.shape_13.setTransform(135.1421,9.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgdAYIAKgHQAGAJALAAQAFAAAEgCQAGgDABgGQAAgFgDgCQgEgCgHgCQgLgDgEgCQgHgEABgLQACgJAJgGQAIgFAJAAQARAAAGAMIgLAHQgEgIgKAAQgFAAgDACQgFADgBAEQAAAIAPADQALACAFADQAGAFgCAKQgBALgKAFQgIAGgKAAQgTAAgHgNg");
	this.shape_14.setTransform(123.2,9.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgcAaQgIgKACgQQACgPAMgLQAMgKAOAAQAPAAAIAKQAIAKgCAQIgBADIg4AAQAAAKAFAGQAGAHAJAAQANAAAKgKIAIAGQgNAPgTAAQgRAAgIgLgAgLgTQgHAFgCAIIArAAQABgIgFgFQgFgGgKAAQgIAAgHAGg");
	this.shape_15.setTransform(116.0761,9.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgNAnQgCgEABgNIAGgmIgQAAIABgJIAQAAIACgUIAMAAIgEAUIAWAAIgCAJIgVAAIgDAjQgCAIABADQACAFAFAAQAGAAAGgCIgCALQgGACgIAAQgKAAgEgHg");
	this.shape_16.setTransform(109.65,8.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgaAfQgGgFABgKQACgQARgEQAKgDASgBIAEAAIABgCQACgPgSAAQgLAAgKAIIgGgIQAMgLAQAAQAQAAAGAIQAGAGgCAPIgFAeIAAAMIgLAAIAAgKIAAAAQgKAMgOAAQgLAAgHgGgAgSAPQgCAMAQAAQAIAAAHgHQAGgFABgJIABgFIgMAAQgXAAgCAOg");
	this.shape_17.setTransform(102.5683,9.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgYAkIAIg0IACgRIALAAIgCALIABAAQADgFAFgEQAIgEAIAAIAFABIgDALIgGgBQgTABgEAZIgFAig");
	this.shape_18.setTransform(96.725,9.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNAnQgCgEABgNIAGgmIgQAAIABgJIAQAAIACgUIAMAAIgEAUIAWAAIgCAJIgVAAIgDAjQgCAIABADQABAFAHAAQAFAAAGgCIgCALQgGACgIAAQgLAAgDgHg");
	this.shape_19.setTransform(87.25,8.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgaAfQgGgFABgKQACgQARgEQAKgDASgBIAEAAIABgCQACgPgSAAQgLAAgKAIIgGgIQAMgLAQAAQAQAAAGAIQAGAGgCAPIgFAeIAAAMIgLAAIAAgKIAAAAQgKAMgOAAQgLAAgHgGgAgSAPQgCAMAQAAQAIAAAHgHQAGgFABgJIABgFIgMAAQgXAAgCAOg");
	this.shape_20.setTransform(80.1683,9.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgcAaQgIgKACgQQACgPAMgLQAMgKAOAAQAPAAAIAKQAIAKgCAQIgBADIg4AAQAAAKAFAGQAGAHAJAAQANAAAKgKIAIAGQgNAPgTAAQgRAAgIgLgAgLgTQgHAFgCAIIArAAQABgIgFgFQgFgGgKAAQgIAAgHAGg");
	this.shape_21.setTransform(72.3761,9.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgYAkIAIg0IACgRIALAAIgCALIABAAQADgFAFgEQAIgEAIAAIAFABIgDALIgGgBQgTABgEAZIgFAig");
	this.shape_22.setTransform(66.025,9.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgqAoIAKgJQAJAMAPAAQAaAAAEgcIABgJQgKANgQAAQgQAAgJgKQgKgJADgQQACgRAMgKQALgKAQAAQAIAAAGADQAHAEACAHIACgMIAMAAIgKBCQgCATgMAKQgLAKgRAAQgVAAgMgOgAgNgiQgIAHgCALQgBALAGAGQAGAHALAAQAKAAAIgHQAIgHABgKQACgMgGgHQgGgHgLAAQgKAAgIAIg");
	this.shape_23.setTransform(58.125,11.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAPAkIAGgpQADgTgQAAQgVAAgEAaIgEAiIgMAAIAHg0IACgRIALAAIgBALIAAAAQADgFAHgEQAGgEAIAAQAOAAAGAIQAFAIgCAMIgGArg");
	this.shape_24.setTransform(45.3517,9.75);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgNA1IAKhFIALAAIgJBFgAgBglQgCgDABgEQAAgDACgDQADgCAEAAQADAAACACQADADgBADQAAAEgDADQgDACgEAAQgEAAgBgCg");
	this.shape_25.setTransform(39.8643,8.05);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AALA5IgcglIgFAlIgMAAIAQhxIALAAIgKBJIAjgdIARAAIglAfIAfAmg");
	this.shape_26.setTransform(30.225,7.675);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgaAbQgJgLADgQQACgPALgLQAMgKAPAAQARAAAJALIgLAIQgGgIgKAAQgLAAgHAIQgHAHgCAKQgBALAFAHQAGAIAKAAQALAAAHgIIAIAIQgLALgQAAQgQAAgJgKg");
	this.shape_27.setTransform(22.9216,9.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgdAbQgKgLADgQQACgPAMgLQAMgKAPAAQARAAAJAKQAJALgCAPQgDARgMAKQgMAKgPAAQgQAAgJgKgAgOgRQgIAHgCAKQgBALAFAHQAGAIAMAAQAKAAAIgIQAIgHABgLQACgKgGgHQgGgIgLAAQgKAAgIAIg");
	this.shape_28.setTransform(14.4421,9.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgeA1IAOhpIAOAAIgOBeIAwAAIgCALg");
	this.shape_29.setTransform(6.45,8.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SUB, new cjs.Rectangle(0,0,474.7,19), null);


(lib.SeattleBankboxwhitevector = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmUFZIAAqxIMpAAIAAKxg");
	mask.setTransform(40.5,34.475);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAPAzIgSglIgNAQIAAAVIgMAAIAAhlIAMAAIAAA/IAcgjIAOAAIgWAaIAZAvg");
	this.shape.setTransform(71.45,36.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQAmIAAg1QAAgMgLAAQgIAAgMALIAAA2IgLAAIAAhKIALAAIAAAJQALgKAJAAQAKAAAGAFQAGAGAAALIAAA1g");
	this.shape_1.setTransform(64.975,37.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWAhQgGgFAAgKQAAgNALgFQAJgIAXgEIAAgDQAAgNgNAAQgMAAgGAMIAAAAIgKgGIABAAQAGgQAUAAQAKAAAIAFQAIAGAAAMIAAAjIACAQIAAACIgMAAIAAgKQgMALgLAAQgJAAgHgGgAgQASQgBAEAEAEQADADAFAAQALAAAJgMIAAgSQgfAFAAAOg");
	this.shape_2.setTransform(58.7,38);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiA0IAAhnIAlAAQANAAAIAIQAIAHAAALQAAARgQAGQAIACAGAHQAFAHAAAJQgBAdgkAAgAgVAoIAUAAQAXAAAAgRQAAgUgZAAIgSAAgAgVgHIATAAQAKAAAGgFQAFgFAAgHQAAgQgSAAIgWAAg");
	this.shape_3.setTransform(51.975,36.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AABAnQgMAAgJgJQgKgLAAgTQAAgRAJgKQAIgLANAAQAMAAAIAIQAIAJAAARIAAAHIguAAQAAALAGAIQAGAHAHAAQAOAAAGgMIABgBIAIAFIABAAIgBABQgKARgSAAgAARgGQAAgKgFgGQgEgGgIAAQgQAAgCAWIAjAAIAAAAg");
	this.shape_4.setTransform(62.275,25.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgFAwIAAhfIALAAIAABfg");
	this.shape_5.setTransform(57.575,24.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgDAtQgFgCAAgIIAAg0IgLAAIAAgKIALAAIAAgUIAKAAIAAAUIARAAIAAAKIgRAAIAAAzQACAFAGgBIAJAAIABAAIAAAJIgBAAQAAACgLAAQgIgBgDgDg");
	this.shape_6.setTransform(53.7,24.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgDAtQgEgBAAgJIAAg0IgMAAIAAgKIAMAAIAAgUIAKAAIAAAUIARAAIAAAKIgRAAIAAAzQAAAFAHgBIAKAAIAAAAIAAAJIAAAAQgDACgJAAQgIgBgDgDg");
	this.shape_7.setTransform(49.325,24.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWAiQgGgGAAgKQAAgMALgGQAJgHAXgEIAAgEQAAgNgNAAQgNAAgFAMIAAAAIgKgFIAAgBQAJgQATAAQAKAAAHAGQAJAGAAALIAAAkIABAQIAAAAIgLAAIgBgJQgKALgNAAQgJAAgHgFgAgQASQAAAFADADQAEADAEAAQALAAAJgMIAAgSQgfAEAAAPg");
	this.shape_8.setTransform(43.85,25.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUAeQgKgLAAgTQAAgRAJgKQAIgLANAAQAMAAAIAIQAIAJAAARIAAAHIguAAQAAALAGAIQAGAHAIAAQANAAAGgMIABgBIAJAFIAAABQgKARgTAAQgNAAgJgJgAARgGQgBgWgQAAQgRAAgBAWIAjAAIAAAAg");
	this.shape_9.setTransform(37.325,25.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgjAaIAAgBIALgDIABAAQAIAUARAAQAKAAAGgFQAFgFAAgIQAAgLgbgLQgdgKAAgRQAAgMAJgHQAJgIAOAAQAYAAAJAaIAAAAIgLACIAAAAIAAAAQgGgRgRAAQgSAAAAAPQAAAHAJAFQAEACAOAGQAOAGAGADQAJAIAAALQAAANgHAIQgKAKgRAAQgZAAgMgbg");
	this.shape_10.setTransform(30.05,24.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgWAaQg/gSgzgCQAAAAAAgBQgBAAAAAAQAAAAABAAQAAAAAAgBQAUgMAigKQA3gRAoAOQArAPAtAGQAXAEANABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQhJAWg1AAQgRAAgQgCg");
	this.shape_11.setTransform(13.75,62.9105);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhpAbQgmgHgegLIAAgCQAsgIAzgRQAngNAdgCQAggDAxAQQBWAcAQAEQABAAAAABQAAABAAAAQAAAAAAAAQgBABAAAAQgMgBgZABQgzAChCANQgXAFgbAAQgjAAgngIg");
	this.shape_12.setTransform(43.7942,65.4816);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhIAQQgYgGgTgKIAAAAQAWAAAYgEIA7gOQAcgIA0ALQAaAFATAHQABAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAQgJAAgdAEQglAHgnAJQgOAEgQAAQgUAAgXgGg");
	this.shape_13.setTransform(34.5875,58.7089);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ACkEwQgaAAgngMQgKgDg9gXQhbgkgsAAQgiAAgoAJIgfAIQgRADgMAAQgVAAgTgCIgPgEIgMgEIAAogIJpAAIAAJhgAETEPIAAoeIolAAIAAHlIAhACQAQAAAkgKQAsgKAmgBQAfABAqAMQAVAGA1AUQAtASAYAIQAjALAUgBg");
	this.shape_14.setTransform(50.075,30.5);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SeattleBankboxwhitevector, new cjs.Rectangle(0,0,81,69), null);


(lib.MemberFDICwhite = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ai7BzIAAjlIF3AAIAADlg");
	mask.setTransform(18.75,11.525);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTBJIAAiRIAnAAIAACRg");
	this.shape.setTransform(24.05,15.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNASQgHgGAAgLQAAgKAGgGQAGgHAJAAQAJAAAFAHQAGAGAAAKIgdAAQAAAPALAAQAJAAABgKIAIAAQgCARgRAAQgJAAgGgFgAgHgFIAQAAQAAgKgIAAQgIAAAAAKg");
	this.shape_1.setTransform(11.025,3.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUABQAAgJAGgHQAGgHAIAAQAKAAAFAHQAGAGAAAKIgdAAQAAAPALAAQAIAAACgKIAIAAQgCARgRAAQgWAAAAgWgAgHgFIAQAAQAAgKgJAAQgHAAAAAKg");
	this.shape_2.setTransform(30.375,3.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAWIAAgGQAGAAACgCQABAAAAgFIAAgRQAAgEgCgBQgCgBgFAAIAAgGIATAAIAAAGQAGgIAGAAQAKAAAAALQAAAIgHAAQgGAAAAgGQAAgEAFgCIgEgBQgJABAAAPIAAAKQAAAEAAABIAIABIAAAGg");
	this.shape_3.setTransform(35.25,3.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHAZIgEAFIgFAAIAAguQAAgGgBgBQgBgBgGAAIAAgHIATAAIAAAXQAGgGAGAAQAIAAAFAGQAFAHAAAJQAAALgFAGQgFAHgJAAQgHAAgGgHgAgFAJQAAAPAIAAQAJAAAAgQQAAgOgJAAQgIAAAAAPg");
	this.shape_4.setTransform(24.975,3.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgoBJIAAiRIBRAAIAAAiIgpAAIAAAWIAmAAIAAAhIgmAAIAAA4g");
	this.shape_5.setTransform(4.225,15.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAQAWIAAgGQAEAAABgCQAAAAABAAQAAAAAAgBQAAAAAAgBQAAgBAAgBIAAgPQAAgJgGAAQgKAAAAAOIAAAKQAAABAAABQAAABAAAAQAAABAAAAQAAAAABAAQABACAEAAIAAAGIgXAAIAAgGQAFAAABgCQABgBAAgDIAAgQQAAgHgHgBQgKABAAANIAAAGQAAAGABACQABACAEAAIAAAGIgaAAIAAgGQAHAAABgCQABgBAAgGIAAgOQAAgFgCgBQgBgBgGAAIAAgGIAUAAIAAAHQAHgJAIAAQAHABAFAHQAHgHAIgBQANAAAAAQIAAARQAAABAAABQAAAAAAABQAAAAABABQAAAAAAAAIAHABIAAAGg");
	this.shape_6.setTransform(17.975,3.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAJAfIAAgHIAJgCQABAAAAgGIAAghIgSAwIgHAAIgQgwIAAAiQAAAEACACQABABAGAAIAAAHIgcAAIAAgHQAGAAACgCQABgBAAgFIAAggQAAgFgCgBQgBgBgGAAIAAgHIAcAAIANAmIAOgmIAcAAIAAAHQgGAAgCACQgCABAAAFIAAAhQAAAEACABQABABAHAAIAAAHg");
	this.shape_7.setTransform(4.2,3.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggA2QgWgWAAgfQAAgfAXgWQAWgVAfAAQASgBAPAHIAAAnQgSgMgNAAQgQAAgLAMQgLALAAARQAAAQALALQAKAKARABQAPgBAQgKIAAAmQgMAKgWgBQgfAAgWgUg");
	this.shape_8.setTransform(32.025,15.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag+BJIAAiRIAzAAQAiAAAUAUQAVAUAAAgQAAAkgXATQgWASgnAAgAgWgmIAABNQAuAAAAgnQAAgSgMgLQgKgKgRABg");
	this.shape_9.setTransform(15.25,15.7);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MemberFDICwhite, new cjs.Rectangle(0,0,37.5,23.1), null);


(lib.LEGAL = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgEAFIAAgJIAIAAIAAAJg");
	this.shape.setTransform(441.3,10.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAbIAAgFIADAAQAEAAACgCQACgCACgFIgPgoIAHAAIALAfIAMgfIAHAAIgQAqQgDAHgCADQgEADgHAAIgDgBg");
	this.shape_1.setTransform(438.525,10.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDAcIAAg3IAGAAIAAA3g");
	this.shape_2.setTransform(435.7,8.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAcIAAg2IAGAAIAAAFIABAAQABgDAEgCQADgBADAAQAIAAAEAFQAFAGAAAKQAAAJgFAFQgEAGgIAAQgDAAgDgCQgEgBgBgDIAAAUgAgIgSQgDAFAAAHQAAAGADAEQADAFAFAAQAEAAAEgFQADgEAAgGQAAgHgDgFQgEgEgEAAQgFAAgDAEg");
	this.shape_3.setTransform(432.575,10.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAcIAAg2IAGAAIAAAFIABAAQABgDAEgCQADgBADAAQAIAAAEAFQAFAGAAAKQAAAJgFAFQgEAGgIAAQgDAAgDgCQgEgBgBgDIAAAUgAgIgSQgDAFAAAHQAAAGADAEQADAFAFAAQAEAAAEgFQADgEAAgGQAAgHgDgFQgEgEgEAAQgFAAgDAEg");
	this.shape_4.setTransform(427.975,10.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNASQgDgEAAgEQgBgGAEgDQADgCAJgCIALgBIAAgCQAAgJgJAAQgIAAAAAJIgIAAQABgGAEgEQAEgEAHgBQAQAAAAAQIAAAPIABAKIgHAAIAAgGQgFAIgJgBQgGABgEgEgAAAACQgFABgCABQgBABAAAAQAAABgBAAQAAABAAABQAAAAAAABQAAADACACQADACADAAQAFAAADgEQADgDAAgGIAAgCIgKABg");
	this.shape_5.setTransform(423.3,9.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAbIAAgFIADAAQAEAAACgCQACgCACgFIgPgoIAHAAIALAfIAMgfIAHAAIgQAqQgDAHgCADQgEADgHAAIgDgBg");
	this.shape_6.setTransform(417.625,10.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNASQgDgEAAgEQAAgGADgDQAEgCAIgCIALgBIAAgCQAAgJgJAAQgIAAAAAJIgHAAQgBgGAFgEQAEgEAHgBQAPAAAAAQIAAAPIABAKIgFAAIgBgGQgFAIgJgBQgGABgEgEgAAAACQgFABgCABQgBABAAAAQAAABAAAAQgBABAAABQAAAAAAABQAAADACACQADACADAAQAEAAADgEQAEgDAAgGIAAgCIgKABg");
	this.shape_7.setTransform(413.55,9.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAVAVIAAgYQAAgLgIAAQgEAAgDADQgDAEAAAGIAAAWIgGAAIAAgZQAAgFgCgCQgCgDgEAAQgEAAgDAEQgCADAAAGIAAAWIgHAAIAAgoIAGAAIAAAFQAFgGAHAAQAJAAACAIQAEgIAJAAQANAAAAARIAAAYg");
	this.shape_8.setTransform(408.125,9.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLASQgFgEAAgHIAHAAQAAAJAJAAQAEAAADgCQACgBAAgDQAAgEgCgBIgIgDIgJgCQgFgDAAgFQAAgFAFgEQAEgEAGAAQAHABAEAEQAEADAAAHIgHAAQAAgJgIAAQgDAAgDABQAAABgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQAAABABAAIAGACIALADQAFADAAAHQAAAFgFAEQgEACgIAAQgHABgEgEg");
	this.shape_9.setTransform(400.875,9.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAKAVIAAgYQAAgLgJAAQgEAAgDADQgDAEAAAFIAAAXIgHAAIAAgoIAHAAIAAAFQAEgGAHAAQAPAAAAARIAAAYg");
	this.shape_10.setTransform(396.625,9.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAFgFAIgBQAJABAFAFQAFAGAAAJQAAAKgFAGQgFAGgJgBQgIABgFgGgAgIgKQgDAEAAAGQAAAIADADQADAFAFAAQAFAAAEgFQADgDAAgIQAAgGgDgEQgEgFgFAAQgFAAgDAFg");
	this.shape_11.setTransform(392.075,9.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_12.setTransform(388.85,8.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgBAWQgCgCAAgHIAAgWIgHAAIAAgGIAHAAIAAgKIAGAAIAAAKIAIAAIAAAGIgIAAIAAAWIABAFQAAAAABABQAAAAABAAQAAAAABAAQABAAAAABIADgBIAAAGIgEABQgGAAgCgEg");
	this.shape_13.setTransform(386.525,8.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgCAcIAAgnIAFAAIAAAngAgCgTIAAgIIAFAAIAAAIg");
	this.shape_14.setTransform(384.35,8.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNAXQgEgGAAgKQAAgIAEgGQAFgFAHgBQAIABAEAGIAAAAIAAgWIAHAAIAAA4IgHAAIAAgGQgEAHgHAAQgIAAgFgGgAgHgDQgDAEAAAGQAAAIADAEQADAEAEAAQAFAAADgEQADgEAAgIQAAgGgDgEQgDgEgFAAQgEAAgDAEg");
	this.shape_15.setTransform(380.925,8.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAKAVIAAgYQAAgLgJAAQgEAAgDADQgDAEAAAFIAAAXIgHAAIAAgoIAHAAIAAAFQAEgGAHAAQAPAAAAARIAAAYg");
	this.shape_16.setTransform(376.475,9.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAFgFAIgBQAJABAFAFQAFAGAAAJQAAAKgFAGQgFAGgJgBQgIABgFgGgAgIgKQgDAEAAAGQAAAIADADQADAFAFAAQAFAAAEgFQADgDAAgIQAAgGgDgEQgEgFgFAAQgFAAgDAFg");
	this.shape_17.setTransform(371.925,9.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgMAQQgFgGAAgKQAAgIAFgHQAFgFAIgBQAHAAAFAFQAEAFABAGIgHAAQgBgEgCgDQgDgCgEgBQgFAAgDAFQgDAEAAAGQAAAIADADQADAFAFAAQAEAAADgDQACgDABgFIAHAAQgBAIgEAEQgFAFgHgBQgIABgFgGg");
	this.shape_18.setTransform(367.575,9.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNAXQgEgGAAgKQAAgIAEgGQAFgFAHgBQAIABAEAGIAAAAIAAgWIAHAAIAAA4IgHAAIAAgGQgEAHgHAAQgIAAgFgGgAgHgDQgDAEAAAGQAAAIADAEQADAEAEAAQAFAAADgEQADgEAAgIQAAgGgDgEQgDgEgFAAQgEAAgDAEg");
	this.shape_19.setTransform(361.175,8.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAKAVIAAgYQAAgLgJAAQgEAAgDADQgDAEAAAFIAAAXIgHAAIAAgoIAHAAIAAAFQAEgGAHAAQAPAAAAARIAAAYg");
	this.shape_20.setTransform(356.725,9.275);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgNASQgDgEAAgEQgBgGAEgDQADgCAJgCIALgBIAAgCQAAgJgJAAQgIAAAAAJIgIAAQABgGAEgEQAEgEAHgBQAQAAAAAQIAAAPIABAKIgHAAIAAgGQgFAIgJgBQgGABgEgEgAAAACQgFABgCABQgBABAAAAQAAABgBAAQAAABAAABQAAAAAAABQAAADACACQADACADAAQAFAAADgEQADgDAAgGIAAgCIgKABg");
	this.shape_21.setTransform(352.2,9.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgLASQgFgEAAgHIAHAAQAAAJAJAAQAEAAADgCQACgBAAgDQAAgEgCgBIgIgDIgJgCQgFgDAAgFQAAgFAFgEQAEgEAGAAQAHABAEAEQAEADAAAHIgHAAQAAgJgIAAQgDAAgDABQAAABgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQAAABABAAIAGACIALADQAFADAAAHQAAAFgFAEQgEACgIAAQgHABgEgEg");
	this.shape_22.setTransform(346.425,9.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAVAVIAAgYQAAgLgIAAQgEAAgDADQgDAEAAAGIAAAWIgGAAIAAgZQAAgFgCgCQgCgDgEAAQgEAAgDAEQgCADAAAGIAAAWIgHAAIAAgoIAGAAIAAAFQAFgGAHAAQAJAAACAIQAEgIAJAAQANAAAAARIAAAYg");
	this.shape_23.setTransform(341.025,9.275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgKAUIAAgnIAHAAIAAAGQADgHAIABIADAAIAAAGIgDAAQgGAAgCAEQgDADAAAGIAAAUg");
	this.shape_24.setTransform(336.425,9.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgNAQQgEgGAAgKQAAgIAEgHQAGgFAHgBQAHABAEAEQAGADABAHIABAHIgdAAQgBAIAEADQADAEAEAAQAFAAADgCQADgCAAgDIAIAAQgCAFgEAEQgFADgIAAQgHAAgGgFgAAMgDQgBgGgDgDQgDgDgFAAQgEAAgDADQgDADAAAGIAWAAIAAAAg");
	this.shape_25.setTransform(332.5,9.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgBAWQgCgCAAgHIAAgWIgHAAIAAgGIAHAAIAAgKIAGAAIAAAKIAIAAIAAAGIgIAAIAAAWIABAFQAAAAABABQAAAAABAAQAAAAABAAQAAAAABABIADgBIAAAGIgEABQgGAAgCgEg");
	this.shape_26.setTransform(328.975,8.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgDAcIAAg3IAHAAIAAA3g");
	this.shape_27.setTransform(325,8.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgMASQgFgEAAgEQABgGADgDQAEgCAIgCIALgBIAAgCQAAgJgKAAQgHAAgBAJIgHAAQAAgGAFgEQAEgEAGgBQAQAAABAQIAAAPIAAAKIgGAAIgBgGQgEAIgIgBQgHABgDgEgAAAACQgFABgCABQAAABgBAAQAAABgBAAQAAABAAABQAAAAAAABQAAADACACQADACADAAQAFAAADgEQADgDAAgGIAAgCIgKABg");
	this.shape_28.setTransform(321.8,9.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAKAVIAAgYQAAgLgJAAQgEAAgDADQgDAEAAAFIAAAXIgHAAIAAgoIAHAAIAAAFQAEgGAHAAQAPAAAAARIAAAYg");
	this.shape_29.setTransform(317.525,9.275);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAFgFAIgBQAJABAFAFQAFAGAAAJQAAAKgFAGQgFAGgJgBQgIABgFgGgAgIgKQgDAEAAAGQAAAIADADQADAFAFAAQAFAAAEgFQADgDAAgIQAAgGgDgEQgEgFgFAAQgFAAgDAFg");
	this.shape_30.setTransform(312.975,9.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgCAcIAAgnIAGAAIAAAngAgCgTIAAgIIAGAAIAAAIg");
	this.shape_31.setTransform(309.75,8.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgBAWQgCgCAAgHIAAgWIgHAAIAAgGIAHAAIAAgKIAGAAIAAAKIAIAAIAAAGIgIAAIAAAWIABAFQAAAAABABQAAAAABAAQAAAAABAAQABAAAAABIADgBIAAAGIgEABQgGAAgCgEg");
	this.shape_32.setTransform(307.425,8.85);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgCAcIAAgnIAGAAIAAAngAgCgTIAAgIIAGAAIAAAIg");
	this.shape_33.setTransform(305.25,8.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgNAXQgEgGAAgKQAAgIAEgGQAFgFAHgBQAIABAEAGIAAAAIAAgWIAHAAIAAA4IgHAAIAAgGQgEAHgHAAQgIAAgFgGgAgHgDQgDAEAAAGQAAAIADAEQADAEAEAAQAFAAADgEQADgEAAgIQAAgGgDgEQgDgEgFAAQgEAAgDAEg");
	this.shape_34.setTransform(301.825,8.55);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgNAXQgEgGAAgKQAAgIAEgGQAFgFAHgBQAIABAEAGIAAAAIAAgWIAHAAIAAA4IgHAAIAAgGQgEAHgHAAQgIAAgFgGgAgHgDQgDAEAAAGQAAAIADAEQADAEAEAAQAFAAADgEQADgEAAgIQAAgGgDgEQgDgEgFAAQgEAAgDAEg");
	this.shape_35.setTransform(297.225,8.55);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AATAcIgHgRIgYAAIgGARIgHAAIAVg3IAJAAIAWA3gAAKAFIgBgFIgJgXIgHAXIgCAFIATAAg");
	this.shape_36.setTransform(292.35,8.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgEAFIAAgJIAIAAIAAAJg");
	this.shape_37.setTransform(286.95,10.875);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgMAQQgGgGAAgKQAAgIAGgHQAEgFAIgBQAHABAFAEQAFADABAHIAAAHIgdAAQABAIADADQADAEAEAAQAFAAACgCQADgCABgDIAHAAQgBAFgEAEQgFADgIAAQgHAAgFgFgAAMgDQgBgGgDgDQgDgDgFAAQgEAAgDADQgDADgBAGIAXAAIAAAAg");
	this.shape_38.setTransform(283.85,9.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgLAZQgFgEAAgFIAHAAQABADADACQACACADAAQALAAAAgNIAAgEQgFAHgGAAQgIAAgEgGQgFgGAAgIQAAgJAFgGQAEgFAIgBQAHAAAEAIIABAAIAAgHIAGAAIAAAlQAAATgSgBQgGABgFgEgAgHgSQgDAEAAAHQAAAGADADQADAFAEAAQAFAAADgFQADgDABgGQgBgHgDgEQgDgEgFAAQgEAAgDAEg");
	this.shape_39.setTransform(279.25,10.05);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAKAVIAAgYQAAgLgJAAQgEAAgDADQgDAEAAAFIAAAXIgHAAIAAgoIAHAAIAAAFQAEgGAHAAQAPAAAAARIAAAYg");
	this.shape_40.setTransform(274.825,9.275);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgNASQgDgEAAgEQgBgGAEgDQADgCAJgCIALgBIAAgCQAAgJgJAAQgIAAAAAJIgIAAQABgGAEgEQAEgEAHgBQAQAAAAAQIAAAPIABAKIgHAAIAAgGQgFAIgJgBQgGABgEgEgAAAACQgFABgCABQgBABAAAAQAAABgBAAQAAABAAABQAAAAAAABQAAADACACQADACADAAQAFAAADgEQADgDAAgGIAAgCIgKABg");
	this.shape_41.setTransform(270.3,9.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAKAcIAAgYQAAgKgJAAQgEAAgDADQgDADAAAFIAAAXIgHAAIAAg3IAHAAIAAAVQAEgGAHAAQAPAAAAAPIAAAZg");
	this.shape_42.setTransform(266.025,8.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgMAQQgFgGAAgKQAAgIAFgHQAFgFAIgBQAHAAAFAFQAEAFABAGIgHAAQgBgEgCgDQgDgCgEgBQgFAAgDAFQgDAEAAAGQAAAIADADQADAFAFAAQAEAAADgDQACgDABgFIAHAAQgBAIgEAEQgFAFgHgBQgIABgFgGg");
	this.shape_43.setTransform(261.625,9.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAFgFAIgBQAJABAFAFQAFAGAAAJQAAAKgFAGQgFAGgJgBQgIABgFgGgAgIgKQgDAEAAAGQAAAIADADQADAFAFAAQAFAAAEgFQADgDAAgIQAAgGgDgEQgEgFgFAAQgFAAgDAFg");
	this.shape_44.setTransform(255.425,9.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgBAWQgCgCAAgHIAAgWIgHAAIAAgGIAHAAIAAgKIAGAAIAAAKIAIAAIAAAGIgIAAIAAAWIABAFQAAAAABABQAAAAABAAQAAAAABAAQAAAAABABIADgBIAAAGIgEABQgGAAgCgEg");
	this.shape_45.setTransform(251.825,8.85);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgBAWQgCgCAAgHIAAgWIgHAAIAAgGIAHAAIAAgKIAGAAIAAAKIAIAAIAAAGIgIAAIAAAWIABAFQAAAAABABQAAAAABAAQAAAAABAAQABAAAAABIADgBIAAAGIgEABQgGAAgCgEg");
	this.shape_46.setTransform(247.475,8.85);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgMAQQgFgGAAgKQAAgIAFgHQAFgFAIgBQAHAAAFAFQAEAFABAGIgHAAQgBgEgCgDQgDgCgEgBQgFAAgDAFQgDAEAAAGQAAAIADADQADAFAFAAQAEAAADgDQACgDABgFIAHAAQgBAIgEAEQgFAFgHgBQgIABgFgGg");
	this.shape_47.setTransform(244.175,9.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgNAQQgEgGAAgKQAAgIAEgHQAGgFAHgBQAHABAEAEQAGADABAHIAAAHIgcAAQgBAIAEADQADAEAEAAQAFAAADgCQADgCAAgDIAHAAQgBAFgEAEQgFADgIAAQgIAAgFgFgAAMgDQgBgGgDgDQgDgDgFAAQgEAAgDADQgDADAAAGIAWAAIAAAAg");
	this.shape_48.setTransform(239.8,9.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgHAjIAAgFIADABQAFgBAAgHIAAgqIAHAAIAAArQAAAMgLAAIgEgBgAABgbIAAgIIAHAAIAAAIg");
	this.shape_49.setTransform(236.225,9.25);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgFAbQgEgBgBgEIgBAAIAAAGIgGAAIAAg4IAHAAIAAAWQADgGAIgBQAIABAEAFQAFAGAAAIQAAAKgFAGQgEAGgIAAQgDAAgDgCgAgIgDQgDAEAAAGQAAAIADAEQADAEAFAAQAEAAAEgEQADgEAAgIQAAgGgDgEQgEgEgEAAQgFAAgDAEg");
	this.shape_50.setTransform(233.525,8.55);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgQAEIAAgYIAHAAIAAAXQAAAMAJAAQAEAAADgDQADgEAAgGIAAgWIAHAAIAAAoIgHAAIAAgGQgEAHgHAAQgPAAAAgRg");
	this.shape_51.setTransform(228.75,9.375);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgLASQgFgEAAgHIAHAAQAAAJAJAAQAEAAADgCQACgBAAgDQAAgEgCgBIgIgDIgJgCQgFgDAAgFQAAgFAFgEQAEgEAGAAQAHABAEAEQAEADAAAHIgHAAQAAgJgIAAQgDAAgDABQAAABgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQAAABABAAIAGACIALADQAFADAAAHQAAAFgFAEQgEACgIAAQgHABgEgEg");
	this.shape_52.setTransform(224.475,9.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgLASQgFgEAAgHIAHAAQAAAJAJAAQAEAAADgCQACgBAAgDQAAgEgCgBIgIgDIgJgCQgFgDAAgFQAAgFAFgEQAEgEAGAAQAHABAEAEQAEADAAAHIgHAAQAAgJgIAAQgDAAgDABQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQAAABABAAIAGACIALADQAFADAAAHQAAAFgFAEQgEACgIAAQgHABgEgEg");
	this.shape_53.setTransform(218.725,9.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgCAcIAAgnIAGAAIAAAngAgCgTIAAgIIAGAAIAAAIg");
	this.shape_54.setTransform(215.8,8.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgNAXQgEgGAAgKQAAgIAEgGQAFgFAHgBQAIABAEAGIAAAAIAAgWIAHAAIAAA4IgHAAIAAgGQgEAHgHAAQgIAAgFgGgAgHgDQgDAEAAAGQAAAIADAEQADAEAEAAQAFAAADgEQADgEAAgIQAAgGgDgEQgDgEgFAAQgEAAgDAEg");
	this.shape_55.setTransform(210.575,8.55);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAKAVIAAgYQAAgLgJAAQgEAAgDADQgDAEAAAFIAAAXIgHAAIAAgoIAHAAIAAAFQAEgGAHAAQAPAAAAARIAAAYg");
	this.shape_56.setTransform(206.125,9.275);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgMASQgEgEAAgEQAAgGADgDQAEgCAIgCIALgBIAAgCQAAgJgJAAQgIAAAAAJIgHAAQgBgGAFgEQAEgEAHgBQAPAAAAAQIAAAPIABAKIgFAAIgBgGQgFAIgJgBQgGABgDgEgAAAACQgFABgCABQgBABAAAAQAAABAAAAQgBABAAABQAAAAAAABQAAADACACQADACADAAQAEAAADgEQAEgDAAgGIAAgCIgKABg");
	this.shape_57.setTransform(201.6,9.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgRAbIgBgBQAAgIADgFQAEgFAJgGIAJgFQADgEAAgEQAAgFgDgBQgCgDgFAAQgJAAAAALIgIAAQAAgJAFgEQAFgEAHgBQAIABAFADQAEAFAAAHQAAAGgEAFQgDACgHAFQgHAEgDADQgCADAAAEIAcAAIAAAGg");
	this.shape_58.setTransform(195.575,8.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgRAbIgBgBQAAgIADgFQAEgFAJgGIAJgFQADgEAAgEQAAgFgDgBQgCgDgFAAQgJAAAAALIgIAAQAAgJAFgEQAFgEAHgBQAIABAFADQAEAFAAAHQAAAGgEAFQgDACgHAFQgHAEgDADQgCADAAAEIAcAAIAAAGg");
	this.shape_59.setTransform(191.125,8.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgOAhIAWhBIAHAAIgXBBg");
	this.shape_60.setTransform(187,8.725);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgMAYQgFgFAAgHIAHAAQABAEACADQADACAEAAQAFAAACgDQADgEABgFQgBgGgDgDQgCgBgFAAQgHAAgDAGIgHAAIADggIAdAAIAAAHIgXAAIgCARIABAAQAEgFAGAAQAIAAAFAFQAEAEAAAIQAAAIgFAGQgFAEgIAAQgHAAgFgDg");
	this.shape_61.setTransform(183.05,8.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgOAhIAWhBIAHAAIgXBBg");
	this.shape_62.setTransform(178.9,8.725);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AACAbIAAgnIgLAAIAAgFQAGAAADgCQACgCABgFIAHAAIAAA1g");
	this.shape_63.setTransform(174.525,8.65);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AACAbIAAgnIgLAAIAAgFQAGAAADgCQACgCABgFIAHAAIAAA1g");
	this.shape_64.setTransform(170.075,8.65);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgDAdIAAgiIgHAAIAAgGIAHAAIAAgFQAAgMAKAAIAEABIAAAFIgCAAQgGAAAAAHIAAAEIAIAAIAAAGIgIAAIAAAig");
	this.shape_65.setTransform(165.275,8.475);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAFgFAIgBQAJABAFAFQAFAGAAAJQAAAKgFAGQgFAGgJgBQgIABgFgGgAgIgKQgDAEAAAGQAAAIADADQADAFAFAAQAFAAAEgFQADgDAAgIQAAgGgDgEQgEgFgFAAQgFAAgDAFg");
	this.shape_66.setTransform(161.825,9.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgLASQgFgEAAgHIAHAAQAAAJAJAAQAEAAADgCQACgBAAgDQAAgEgCgBIgIgDIgJgCQgFgDAAgFQAAgFAFgEQAEgEAGAAQAHABAEAEQAEADAAAHIgHAAQAAgJgIAAQgDAAgDABQAAABgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQAAABABAAIAGACIALADQAFADAAAHQAAAFgFAEQgEACgIAAQgHABgEgEg");
	this.shape_67.setTransform(155.775,9.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgNASQgEgEAAgEQABgGADgDQAEgCAIgCIALgBIAAgCQAAgJgKAAQgHAAAAAJIgIAAQABgGAEgEQAEgEAGgBQAQAAABAQIAAAPIABAKIgHAAIgBgGQgEAIgIgBQgHABgEgEgAAAACQgFABgCABQAAABgBAAQAAABgBAAQAAABAAABQAAAAAAABQAAADACACQADACADAAQAEAAAEgEQADgDAAgGIAAgCIgKABg");
	this.shape_68.setTransform(151.6,9.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgMAQQgGgGAAgKQAAgIAGgHQAEgFAIgBQAHABAFAEQAFADABAHIAAAHIgdAAQABAIADADQADAEAEAAQAFAAACgCQADgCABgDIAHAAQgBAFgEAEQgFADgIAAQgHAAgFgFgAAMgDQgBgGgDgDQgDgDgFAAQgEAAgDADQgDADgBAGIAXAAIAAAAg");
	this.shape_69.setTransform(145.6,9.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgBAWQgCgCAAgHIAAgWIgHAAIAAgGIAHAAIAAgKIAGAAIAAAKIAIAAIAAAGIgIAAIAAAWIABAFQAAAAABABQAAAAABAAQAAAAABAAQABAAAAABIADgBIAAAGIgEABQgGAAgCgEg");
	this.shape_70.setTransform(142.075,8.85);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgMASQgFgEAAgEQABgGADgDQAEgCAIgCIALgBIAAgCQAAgJgKAAQgHAAgBAJIgHAAQAAgGAFgEQAEgEAGgBQAQAAABAQIAAAPIAAAKIgGAAIgBgGQgEAIgIgBQgHABgDgEgAAAACQgFABgCABQAAABgBAAQAAABgBAAQAAABAAABQAAAAAAABQAAADACACQADACADAAQAFAAADgEQADgDAAgGIAAgCIgKABg");
	this.shape_71.setTransform(138.65,9.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgKAUIAAgnIAHAAIAAAGQADgHAIABIADAAIAAAGIgDAAQgGAAgCAEQgDADAAAGIAAAUg");
	this.shape_72.setTransform(135.525,9.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgQAEIAAgYIAHAAIAAAXQAAAMAJAAQADAAADgDQAEgEAAgGIAAgWIAHAAIAAAoIgHAAIAAgGQgEAHgIAAQgOAAAAgRg");
	this.shape_73.setTransform(131.5,9.375);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgMAQQgFgGAAgKQAAgIAFgHQAFgFAIgBQAHAAAFAFQAEAFABAGIgHAAQgBgEgCgDQgDgCgEgBQgFAAgDAFQgDAEAAAGQAAAIADADQADAFAFAAQAEAAADgDQACgDABgFIAHAAQgBAIgEAEQgFAFgHgBQgIABgFgGg");
	this.shape_74.setTransform(127.125,9.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgMAQQgFgGAAgKQAAgIAFgHQAFgFAIgBQAHAAAFAFQAEAFABAGIgHAAQgBgEgCgDQgDgCgEgBQgFAAgDAFQgDAEAAAGQAAAIADADQADAFAFAAQAEAAADgDQACgDABgFIAHAAQgBAIgEAEQgFAFgHgBQgIABgFgGg");
	this.shape_75.setTransform(122.875,9.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgMASQgFgEAAgEQABgGADgDQADgCAJgCIALgBIAAgCQAAgJgKAAQgHAAgBAJIgHAAQAAgGAFgEQAEgEAGgBQAQAAABAQIAAAPIAAAKIgGAAIgBgGQgEAIgIgBQgHABgDgEgAAAACQgFABgCABQAAABgBAAQAAABAAAAQgBABAAABQAAAAAAABQAAADACACQACACAEAAQAFAAADgEQADgDAAgGIAAgCIgKABg");
	this.shape_76.setTransform(118.5,9.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgHAkQAHgRABgTQgBgSgHgRIAFAAQALARAAASQAAATgLARg");
	this.shape_77.setTransform(113.5,8.975);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgDAcIAAgXIgUggIAIAAIAHALIAIAQIAJgQIAHgLIAIAAIgVAgIAAAXg");
	this.shape_78.setTransform(109.975,8.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgTAcIAAg3IATAAQAKgBAFAFQAFAFAAAIQAAAHgFAEQgFAFgKAAIgLAAIAAAWgAgLAAIALAAQAMAAAAgKQAAgLgMAAIgLAAg");
	this.shape_79.setTransform(105.325,8.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AATAcIgGgRIgZAAIgGARIgHAAIAVg3IAJAAIAVA3gAAKAFIgCgFIgIgXIgHAXIgCAFIATAAg");
	this.shape_80.setTransform(99.9,8.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AACAkQgKgQABgUQgBgTAKgQIAHAAQgJARAAASQAAATAJARg");
	this.shape_81.setTransform(96.15,8.975);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgNAXQgEgGAAgKQAAgIAEgGQAFgFAHgBQAIABAEAGIAAAAIAAgWIAHAAIAAA4IgHAAIAAgGQgEAHgHAAQgIAAgFgGgAgHgDQgDAEAAAGQAAAIADAEQADAEAEAAQAFAAADgEQADgEAAgIQAAgGgDgEQgDgEgFAAQgEAAgDAEg");
	this.shape_82.setTransform(90.675,8.55);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgCAcIAAg3IAGAAIAAA3g");
	this.shape_83.setTransform(87.55,8.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgNAQQgEgGAAgKQAAgIAEgHQAGgFAHgBQAHABAFAEQAEADACAHIABAHIgeAAQAAAIAEADQADAEAFAAQADAAAEgCQACgCABgDIAIAAQgCAFgEAEQgFADgHAAQgIAAgGgFgAAMgDQgBgGgDgDQgDgDgFAAQgEAAgDADQgDADgBAGIAXAAIAAAAg");
	this.shape_84.setTransform(84.35,9.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgDAcIAAgnIAGAAIAAAngAgDgTIAAgIIAGAAIAAAIg");
	this.shape_85.setTransform(81.2,8.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgDAcIAAgXIgUggIAIAAIAHALIAIAQIAJgQIAHgLIAIAAIgVAgIAAAXg");
	this.shape_86.setTransform(77.775,8.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgNAQQgEgGAAgKQAAgIAEgHQAGgFAHgBQAHABAEAEQAFADACAHIABAHIgeAAQAAAIAEADQADAEAFAAQADAAAEgCQACgCABgDIAIAAQgCAFgEAEQgFADgHAAQgIAAgGgFgAAMgDQgBgGgDgDQgDgDgFAAQgEAAgDADQgDADgBAGIAXAAIAAAAg");
	this.shape_87.setTransform(71.3,9.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgLAZQgFgEABgFIAHAAQAAADADACQACACAEAAQAKAAAAgNIAAgEQgEAHgHAAQgIAAgFgGQgEgGAAgIQAAgJAEgGQAFgFAIgBQAHAAAEAIIABAAIAAgHIAGAAIAAAlQAAATgRgBQgIABgEgEgAgHgSQgDAEAAAHQAAAGADADQADAFAEAAQAGAAADgFQADgDAAgGQAAgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_88.setTransform(66.7,10.05);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgMASQgFgEAAgEQAAgGAEgDQADgCAJgCIALgBIAAgCQAAgJgKAAQgHAAgBAJIgGAAQgBgGAFgEQAEgEAGgBQARAAgBAQIAAAPIABAKIgFAAIgCgGQgEAIgIgBQgHABgDgEgAAAACQgFABgCABQAAABgBAAQAAABAAAAQgBABAAABQAAAAAAABQAAADACACQACACAEAAQAFAAADgEQADgDAAgGIAAgCIgKABg");
	this.shape_89.setTransform(62.35,9.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgBAWQgCgCAAgHIAAgWIgHAAIAAgGIAHAAIAAgKIAGAAIAAAKIAIAAIAAAGIgIAAIAAAWIABAFQAAAAABABQAAAAABAAQAAAAABAAQABAAAAABIADgBIAAAGIgEABQgGAAgCgEg");
	this.shape_90.setTransform(59.025,8.85);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AAKAVIAAgYQAAgLgJAAQgEAAgDADQgDAEAAAFIAAAXIgHAAIAAgoIAHAAIAAAFQAEgGAHAAQAPAAAAARIAAAYg");
	this.shape_91.setTransform(55.525,9.275);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgMAQQgGgGAAgKQAAgIAGgHQAEgFAIgBQAHABAEAEQAGADABAHIAAAHIgcAAQAAAIADADQADAEAEAAQAFAAADgCQACgCABgDIAHAAQgBAFgEAEQgFADgIAAQgHAAgFgFgAAMgDQgBgGgDgDQgDgDgFAAQgEAAgDADQgDADAAAGIAWAAIAAAAg");
	this.shape_92.setTransform(51,9.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgMAQQgFgGAAgKQAAgIAFgHQAFgFAIgBQAHAAAFAFQAEAFABAGIgHAAQgBgEgCgDQgDgCgEgBQgFAAgDAFQgDAEAAAGQAAAIADADQADAFAFAAQAEAAADgDQACgDABgFIAHAAQgBAIgEAEQgFAFgHgBQgIABgFgGg");
	this.shape_93.setTransform(46.725,9.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgKAUIAAgnIAHAAIAAAGQADgHAIABIADAAIAAAGIgDAAQgGAAgCAEQgDADAAAGIAAAUg");
	this.shape_94.setTransform(43.425,9.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgMAQQgFgGgBgKQABgIAFgHQAEgFAIgBQAHABAFAEQAFADABAHIAAAHIgdAAQABAIADADQADAEAEAAQAFAAACgCQADgCABgDIAHAAQgBAFgEAEQgFADgIAAQgHAAgFgFgAAMgDQgBgGgDgDQgDgDgFAAQgEAAgDADQgDADgBAGIAXAAIAAAAg");
	this.shape_95.setTransform(39.5,9.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgTAcIAAg3IATAAQAKgBAFAFQAFAFAAAIQAAAHgFAEQgFAFgKAAIgLAAIAAAWgAgLAAIALAAQAMAAAAgKQAAgLgMAAIgLAAg");
	this.shape_96.setTransform(35.125,8.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_97.setTransform(29.65,8.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgMASQgEgEgBgEQAAgGAEgDQAEgCAIgCIALgBIAAgCQAAgJgKAAQgHAAgBAJIgGAAQgBgGAFgEQAEgEAGgBQARAAgBAQIAAAPIABAKIgFAAIgBgGQgFAIgIgBQgHABgDgEgAAAACQgFABgCABQAAABgBAAQAAABAAAAQgBABAAABQAAAAAAABQAAADACACQACACAEAAQAEAAADgEQAEgDAAgGIAAgCIgKABg");
	this.shape_98.setTransform(26.45,9.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgQAEIAAgYIAHAAIAAAXQAAAMAJAAQADAAADgDQAEgEAAgGIAAgWIAHAAIAAAoIgHAAIAAgGQgEAHgIAAQgOAAAAgRg");
	this.shape_99.setTransform(22.15,9.375);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AAKAVIAAgYQAAgLgJAAQgEAAgDADQgDAEAAAFIAAAXIgHAAIAAgoIAHAAIAAAFQAEgGAHAAQAPAAAAARIAAAYg");
	this.shape_100.setTransform(17.575,9.275);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AAKAVIAAgYQAAgLgJAAQgEAAgDADQgDAEAAAFIAAAXIgHAAIAAgoIAHAAIAAAFQAEgGAHAAQAPAAAAARIAAAYg");
	this.shape_101.setTransform(12.975,9.275);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AATAcIgHgRIgYAAIgGARIgHAAIAVg3IAJAAIAWA3gAAKAFIgBgFIgJgXIgHAXIgCAFIATAAg");
	this.shape_102.setTransform(7.95,8.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AAAADIgEAKIgFgDIAHgIIgLgCIACgGIAKAFIgBgLIAFAAIgBALIAKgFIACAGIgLACIAHAIIgFADg");
	this.shape_103.setTransform(3.625,6.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LEGAL, new cjs.Rectangle(0,0,506,16.1), null);


(lib.HEAD = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgPAQQgGgHAAgJQAAgIAGgHQAHgGAIAAQAJAAAGAGQAHAHAAAIQAAAJgHAHQgGAGgJAAQgIAAgHgGg");
	this.shape.setTransform(510.05,18.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAYA6IgYhMIAAAAIgVBMIglAAIgqhzIAmAAIAYBIIAAAAIAVhIIAmAAIAVBIIABAAIAWhIIAkAAIgqBzg");
	this.shape_1.setTransform(496.55,14.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgtAsQgTgRAAgbQAAgaATgSQASgQAbAAQAcAAASAQQATASAAAaQAAAbgTARQgSARgcAAQgbAAgSgRgAgUgUQgIAIAAAMQAAANAIAIQAIAIAMAAQANAAAIgIQAIgIAAgNQAAgMgIgIQgIgJgNAAQgMAAgIAJg");
	this.shape_2.setTransform(479.275,14.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgoA8IAAh0IAkAAIAAATQALgWAWAAIAMABIAAAhQgJgCgGAAQgUAAgGALQgEAIAAATIAAAxg");
	this.shape_3.setTransform(467.6,14.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoA8IAAh0IAkAAIAAATQALgWAWAAIAMABIAAAhQgJgCgGAAQgTAAgHALQgEAIAAATIAAAxg");
	this.shape_4.setTransform(457.85,14.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgtAsQgTgRAAgbQAAgaATgSQASgQAbAAQAcAAASAQQATASAAAaQAAAbgTARQgSARgcAAQgbAAgSgRgAgUgUQgIAIAAAMQAAANAIAIQAIAIAMAAQANAAAIgIQAIgIAAgNQAAgMgIgIQgIgJgNAAQgMAAgIAJg");
	this.shape_5.setTransform(445.175,14.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA3A8IAAhDQAAgUgPAAQgWAAAAAaIAAA9IgjAAIAAg9QAAgLgCgFQgEgKgKAAQgWAAABAdIAAA6IgkAAIAAh0IAiAAIAAAQIABAAQADgIAIgFQAKgGAMAAQAaAAAJAVQAMgVAaAAQApAAgBAzIAABEg");
	this.shape_6.setTransform(427.45,14.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgtAsQgTgRAAgbQAAgaATgSQASgQAbAAQAcAAASAQQATASAAAaQAAAbgTARQgSARgcAAQgbAAgSgRgAgUgUQgIAIAAAMQAAANAIAIQAIAIAMAAQANAAAIgIQAIgIAAgNQAAgMgIgIQgIgJgNAAQgMAAgIAJg");
	this.shape_7.setTransform(409.725,14.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVAqIAAg3IgXAAIAAgdIAXAAIAAgiIAjAAIAAAiIAfAAIAAAdIgfAAIAAAmQAAALACAFQAEAFALAAQALAAADgCIAAAdQgJAEgQAAQgpAAAAgjg");
	this.shape_8.setTransform(397.325,12.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgoA8IAAh0IAkAAIAAATQALgWAWAAIAMABIAAAhQgJgCgGAAQgUAAgGALQgEAIAAATIAAAxg");
	this.shape_9.setTransform(381.2,14.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgtAsQgTgRAAgbQAAgaATgSQASgQAbAAQAcAAASAQQATASAAAaQAAAbgTARQgSARgcAAQgbAAgSgRgAgUgUQgIAIAAAMQAAANAIAIQAIAIAMAAQANAAAIgIQAIgIAAgNQAAgMgIgIQgIgJgNAAQgMAAgIAJg");
	this.shape_10.setTransform(368.525,14.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVBcIAAhYIgXAAIAAgbIAXAAIAAgVQAAgWAJgLQAKgOAaAAQANAAAIACIgCAfQgGgDgFAAQgJAAgEAEQgFAEAAALIAAATIAbAAIAAAbIgbAAIAABYg");
	this.shape_11.setTransform(357.025,10.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRBbIAAi1IAjAAIAAC1g");
	this.shape_12.setTransform(342.15,11.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgrA0QgMgKAAgRQAAgZAcgKQARgFAhAAQAAgJgHgGQgGgGgKAAQgQAAgMAOIgTgUQATgSAeAAQAfAAAMAPQALAOAAAfIAAA6IghAAIAAgOIgBAAQgKARgaAAQgRAAgMgJgAgUAYQgBAGAGAEQAFADAGAAQALAAAIgGQAIgGAAgKIAAgIIgJAAQgjAAABARg");
	this.shape_13.setTransform(332.5,14.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgVAqIAAg3IgXAAIAAgdIAXAAIAAgiIAjAAIAAAiIAfAAIAAAdIgfAAIAAAmQAAALACAFQAEAFALAAQALAAADgCIAAAdQgJAEgQAAQgpAAAAgjg");
	this.shape_14.setTransform(321.125,12.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgRBXIAAhzIAjAAIAABzgAgOgyQgGgGAAgJQAAgJAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAJQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_15.setTransform(313.375,11.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag/BXIAAiqIAiAAIAAAQIAAAAQAFgIAJgFQALgGAKAAQAZAAARARQAPAQAAAbQAAAagOAQQgPAUgYgBQgZAAgLgPIgBAAIAABDgAgVguQgJAIABANQgBANAJAJQAHAGANABQANgBAHgGQAIgJAAgNQAAgNgIgIQgHgJgNAAQgNAAgHAJg");
	this.shape_16.setTransform(303.1,16.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgrA0QgMgKAAgRQAAgZAcgKQARgFAhAAQAAgJgHgGQgHgGgJAAQgQAAgMAOIgTgUQATgSAeAAQAfAAAMAPQALAOAAAfIAAA6IghAAIAAgOIAAAAQgMARgYAAQgSAAgMgJgAgUAYQgBAGAGAEQAFADAHAAQAKAAAIgGQAIgGAAgKIAAgIIgJAAQgiAAAAARg");
	this.shape_17.setTransform(288.6,14.325);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AghAsQgTgRAAgbQAAgaATgSQASgQAbAAQAaAAAPAPIgYAZQgGgJgLAAQgNAAgIAJQgHAIAAAMQAAANAHAIQAIAIANAAQAKAAAHgIIAYAYQgPAQgaAAQgbAAgSgRg");
	this.shape_18.setTransform(276.975,14.325);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgxAtIAWgYQAKANAQAAQAPAAAAgJQAAgGgJgDIgVgFQgegHAAgZQAAgTAQgLQANgJATAAQAdAAAOAPIgVAWQgJgKgMAAQgNAAAAAKQAAAFAJADIAUAFQAfAIAAAZQAAAUgRAKQgPAIgVAAQgeAAgQgQg");
	this.shape_19.setTransform(258.1,14.325);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgRBXIAAhzIAjAAIAABzgAgOgyQgGgGAAgJQAAgJAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAJQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_20.setTransform(249.475,11.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag+BTIAFgdQAIADAIAAQAMAAAFgFQADgDAEgMIADgGIgzh1IAnAAIAdBNIAAAAIAahNIAlAAIg1CGQgIAXgGAGQgLAKgXAAQgOAAgNgEg");
	this.shape_21.setTransform(232.625,17.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgrA0QgMgKAAgRQAAgZAcgKQARgFAhAAQAAgJgHgGQgHgGgJAAQgQAAgNAOIgSgUQATgSAfAAQAeAAAMAPQALAOAAAfIAAA6IghAAIAAgOIAAAAQgLARgZAAQgSAAgMgJgAgUAYQAAAGAFAEQAFADAHAAQAKAAAIgGQAIgGAAgKIAAgIIgJAAQgiAAAAARg");
	this.shape_22.setTransform(219.4,14.325);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgvBLQgPgQAAgbQAAgZAOgRQAPgTAYAAQAZAAALAPIAAAAIAAhNIAkAAIAAC0IghAAIAAgPIAAAAQgFAHgJAFQgLAGgKAAQgaAAgQgRgAgTAKQgHAIAAANQAAANAHAIQAIAIAMAAQAOAAAIgIQAHgIAAgNQAAgNgHgIQgIgJgOAAQgMAAgIAJg");
	this.shape_23.setTransform(205.175,11.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgtAsQgTgRAAgbQAAgaATgSQASgQAbAAQAcAAASAQQATASAAAaQAAAbgTARQgSARgcAAQgbAAgSgRgAgUgUQgIAIAAAMQAAANAIAIQAIAIAMAAQANAAAIgIQAIgIAAgNQAAgMgIgIQgIgJgNAAQgMAAgIAJg");
	this.shape_24.setTransform(190.725,14.325);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgVAqIAAg3IgXAAIAAgdIAXAAIAAgiIAjAAIAAAiIAfAAIAAAdIgfAAIAAAmQAAALACAFQAEAFALAAQALAAADgCIAAAdQgJAEgQAAQgpAAAAgjg");
	this.shape_25.setTransform(178.325,12.75);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgVAqIAAg3IgXAAIAAgdIAXAAIAAgiIAjAAIAAAiIAfAAIAAAdIgfAAIAAAmQAAALACAFQAEAFALAAQALAAADgCIAAAdQgJAEgQAAQgpAAAAgjg");
	this.shape_26.setTransform(161.475,12.75);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAUA8IAAg5QAAgOgCgGQgFgKgLAAQgVAAAAAdIAAA6IgkAAIAAh0IAiAAIAAAQIABAAQAEgIAIgFQAJgGAMAAQAZAAAKAQQAIANAAAaIAABAg");
	this.shape_27.setTransform(149.95,14.175);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgoAsQgTgRAAgbQAAgaATgSQATgQAaAAQAZAAAPAQQAPARAAAbIAAALIhTAAQADALAHAGQAHAGAJAAQAQAAAKgOIAZASQgIALgNAGQgOAGgOAAQgaAAgTgRgAgPgcQgHAHgBAJIAvAAQAAgJgGgHQgHgGgJAAQgKAAgHAGg");
	this.shape_28.setTransform(136.175,14.325);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AA4A8IAAhDQAAgUgQAAQgWAAAAAaIAAA9IgjAAIAAg9QAAgLgCgFQgDgKgLAAQgVAAgBAdIAAA6IgkAAIAAh0IAiAAIAAAQIABAAQAFgIAIgFQAJgGAMAAQAaAAAJAVQAMgVAZAAQApAAABAzIAABEg");
	this.shape_29.setTransform(118.9,14.175);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgVAqIAAg3IgXAAIAAgdIAXAAIAAgiIAjAAIAAAiIAfAAIAAAdIgfAAIAAAmQAAALACAFQAEAFALAAQALAAADgCIAAAdQgJAEgQAAQgpAAAAgjg");
	this.shape_30.setTransform(103.375,12.75);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgxAtIAWgYQALANAOAAQAQAAAAgJQAAgGgKgDIgTgFQgfgHAAgZQAAgTAPgLQAOgJATAAQAdAAAPAPIgXAWQgIgKgMAAQgNAAAAAKQAAAFAJADIAVAFQAeAIAAAZQAAAUgSAKQgOAIgVAAQgeAAgQgQg");
	this.shape_31.setTransform(93.15,14.325);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgoAsQgTgRAAgbQAAgaATgSQATgQAaAAQAZAAAPAQQAPARAAAbIAAALIhTAAQADALAHAGQAHAGAJAAQAQAAAKgOIAZASQgIALgNAGQgOAGgOAAQgaAAgTgRgAgPgcQgHAHgBAJIAvAAQAAgJgGgHQgHgGgJAAQgKAAgHAGg");
	this.shape_32.setTransform(80.725,14.325);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgRA6IgwhzIAnAAIAcBOIABAAIAbhOIAkAAIguBzg");
	this.shape_33.setTransform(67.225,14.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAUA8IAAg5QAAgOgDgGQgDgKgNAAQgUAAAAAdIAAA6IgkAAIAAh0IAiAAIAAAQIABAAQAEgIAIgFQAIgGANAAQAZAAAKAQQAIANAAAaIAABAg");
	this.shape_34.setTransform(53.7,14.175);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgRBXIAAhzIAjAAIAABzgAgOgyQgGgGAAgJQAAgJAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAJQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_35.setTransform(43.725,11.425);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAUA8IAAg5QAAgOgCgGQgFgKgLAAQgVAAAAAdIAAA6IgkAAIAAh0IAiAAIAAAQIABAAQAEgIAIgFQAJgGAMAAQAZAAAKAQQAIANAAAaIAABAg");
	this.shape_36.setTransform(26.65,14.175);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAvBVIgPgkIhBAAIgOAkIgpAAIBJipIAeAAIBKCpgAAUASIgVg1IgUA1IApAAg");
	this.shape_37.setTransform(10.9,11.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD, new cjs.Rectangle(0,0,548.5,28), null);


// stage content:
(lib.SBBizRateCDtoday728x90 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,88];
	// timeline functions:
	this.frame_0 = function() {
		//if(!this.alreadyyExecuted){
		//this.alreadyyExecuted=true;
		//	this.clickthru_btn.on("click", function(evt){
		//  window.open(clickTag, "_blank");
		//});
		//} else {
		//gotoAndPlay(2);
		//}
	}
	this.frame_88 = function() {
		//if(!this.alreadyExecuted){
		//this.alreadyExecuted=true;
		//this.loopNum=1;
		//} else {
		//this.loopNum++;
		//if(this.loopNum==2){
		this.stop();
		//}
		//}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(88).call(this.frame_88).wait(56));

	// HEAD
	this.instance = new lib.HEAD();
	this.instance.setTransform(148.45,195.55,1.0702,1.0831,0,0,0,113.5,148.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({y:175.55,alpha:1},10,cjs.Ease.quadOut).wait(133));

	// SUB
	this.instance_1 = new lib.SUB();
	this.instance_1.setTransform(148.45,230.25,1.0702,1.0831,0,0,0,113.5,148.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({y:210.25,alpha:1},10,cjs.Ease.quadOut).wait(130));

	// LEGAL
	this.instance_2 = new lib.LEGAL();
	this.instance_2.setTransform(129.9,103.2,1,1,0,0,0,102.9,11);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(77).to({_off:false},0).to({y:83.2,alpha:1},10,cjs.Ease.quadOut).wait(57));

	// LOGO
	this.instance_3 = new lib.SeattleBankboxwhitevector();
	this.instance_3.setTransform(698.95,26.8,1,1,0,0,0,64.7,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(144));

	// FDIC
	this.instance_4 = new lib.MemberFDICwhite();
	this.instance_4.setTransform(629.75,55.8,0.82,0.82,0,0,0,18.8,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(144));

	// BKGD
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#185975").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(144));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(364,45,364,63.3);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 728,
	height: 90,
	fps: 36,
	color: "#999999",
	opacity: 1.00,
	manifest: [],
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
an.compositions['0957C5EC3B874C629166840920B09671'] = {
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