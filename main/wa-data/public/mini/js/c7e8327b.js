(function($){$.fn.lazyLoad=function(options,ext){if(options=='stop'){var settings=this.data('lazyLoadSettings');if(settings){settings.stopped=!0}
return}
if(options=='reload'){var settings=this.data('lazyLoadSettings');if(settings){settings.stopped=!1;settings.loading=!1;this.get(0).onscroll=null;this.lazyLoad(settings)}
return}
if(options=='sleep'){var settings=this.data('lazyLoadSettings');if(settings){settings.loading=!0}
return}
if(options=='wake'){var settings=this.data('lazyLoadSettings');if(settings){settings.loading=!1}
return}
if(options=='force'){var settings=this.data('lazyLoadSettings');if(settings){if(!settings.loading){settings.load()}}
return}
if(options==='get'){var settings=this.data('lazyLoadSettings')||{};return settings[ext]}
this.data('lazyLoadSettings',$.extend({distance:50,load:function(){},container:container,state:'wake',hash:location.hash.replace(/^[^#]*#\/*/,'').split('/')[0]||null,distanceBetweenBottoms:null},options||{}));var settings=this.data('lazyLoadSettings');settings.loading=!1;settings.stopped=!1;var win=$(window);var container=settings.container||$(this);init();function init(){if(settings.hash!==null){if(!$.isArray(settings.hash)){settings.hash=[settings.hash]}}
$.fn.lazyLoad.call(win,settings.state);initHandler()}
function scrollHandler(){if(settings.stopped){this.onscroll=null;return}
if(!settings.stopped&&!settings.loading&&distanceBetweenBottoms(container,win)<=settings.distance){if(settings.hash!==null){var loc_hash=location.hash.replace(/^[^#]*#\/*/,'').split('/')[0];if(settings.hash.indexOf(loc_hash)===-1){this.onscroll=null;return}}
settings.load()}}
function initHandler(){var interval=350,h;var timerId=setTimeout(h=function(){if(settings.stopped){clearTimeout(timerId);return}
if(settings.hash!==null){var loc_hash=location.hash.replace(/^[^#]*#\/*/,'').split('/')[0];if(settings.hash.indexOf(loc_hash)===-1){clearTimeout(timerId);return}}
if(!settings.loading){var r=distanceBetweenBottoms(container,win);if(distanceBetweenBottoms(container,win)<=settings.distance){settings.load();timerId=setTimeout(h,interval)}else{win.get(0).onscroll=scrollHandler;clearTimeout(timerId)}}else{timerId=setTimeout(h,interval)}},interval)}
var distanceBetweenBottoms=typeof settings.distanceBetweenBottoms==='function'?settings.distanceBetweenBottoms:function(container,win,offset){container=typeof container==='string'?$(container):container;offset=offset||0;return(container.position().top+container.outerHeight()-offset)-(win.scrollTop()+win.height())}}})(jQuery)