var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );



var _containerHeight = 1700;
var _width, _height, _scrollHeight;
var letters = document.getElementsByTagName('span');
var _movingElements = [];
var _scrollPercent = 0;
var pre = prefix();
resize();
var _jsPrefix  = pre.lowercase;
if(_jsPrefix == 'moz') _jsPrefix = 'Moz'
var _cssPrefix = pre.css;
if (_width <= 900) {
  var _positions = [

    {
      name: 'santa', 
       start: {
        percent: 0.02, x: 0.01, y: 0.005
      },
      end: {
        percent: 1.0, x: 0.01 , y: 0.95
      }
    }
  
  ]
}else{
  var _positions = [

    {
      name: 'santa', 
       start: {
        percent: 0.02, x: 0.1, y: 0.005
      },
      end: {
        percent: 1.0, x: 0.7 , y: 0.9
      }
    }
  
  ]
}
initMovingElements();
function resize() {
	_width = window.innerWidth;
  _height = window.innerHeight;
  _scrollHeight = _containerHeight-_height;
}

function initMovingElements() {
  for (var i = 0; i < _positions.length; i++) {
    _positions[i].diff = {
      percent: _positions[i].end.percent - _positions[i].start.percent,
      x: _positions[i].end.x - _positions[i].start.x,
      y: _positions[i].end.y - _positions[i].start.y,
    }
    var el = document.getElementsByClassName('santa '+_positions[i].name)[0];
    _movingElements.push(el);
  }
}



function updateElements() {
  for (var i = 0; i < _movingElements.length; i++) {
    var p = _positions[i];
    if(_scrollPercent <= p.start.percent) {
      _movingElements[i].style[_jsPrefix+'Transform'] = 'translate3d('+(p.start.x*_width)+'px, '+(p.start.y*_containerHeight)+'px, 0px)';
    } else if(_scrollPercent >= p.end.percent) {
      _movingElements[i].style[_jsPrefix+'Transform'] = 'translate3d('+(p.end.x*_width)+'px, '+(p.end.y*_containerHeight)+'px, 0px)';
    } else {
      _movingElements[i].style[_jsPrefix+'Transform'] = 'translate3d('+(p.start.x*_width + (p.diff.x*(_scrollPercent-p.start.percent)/p.diff.percent*_width))+'px, '+
        (p.start.y*_containerHeight + (p.diff.y*(_scrollPercent-p.start.percent)/p.diff.percent*_containerHeight))+'px, 0px)';
    }
  }
}



function loop() {
  _scrollOffset = window.scrollY || window.scrollTo;
  _scrollPercent = _scrollOffset/_scrollHeight || 0;
  updateElements();
  
  requestAnimationFrame(loop);
}

loop();

window.addEventListener('resize', resize);

/* prefix detection http://davidwalsh.name/vendor-prefix */

function prefix() {
  var styles = window.getComputedStyle(document.documentElement, ''),
    pre = (Array.prototype.slice
      .call(styles)
      .join('') 
      .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
    )[1],
    dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
  return {
    dom: dom,
    lowercase: pre,
    css: '-' + pre + '-',
    js: pre[0].toUpperCase() + pre.substr(1)
  };
}
