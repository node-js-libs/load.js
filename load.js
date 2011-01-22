/* Copyright (c) 2010 Chris O'Hara <cohara87@gmail.com>. MIT Licensed */
 
//Include the chain.js microframework (http://github.com/chriso/chain.js)
(function(a){a=a||{};var b={},c,d,e=function(){};c=function(a,d,e){var f=a.halt=!1;a.error=function(){a.halt=!0},a.next=function(c){c&&(f=!1);if(!a.halt&&d&&d.length){var e=d.shift(),g=e.shift();f=!0;try{b[g].apply(a,[e,e.length,g])}catch(h){a.error(h)}}return a};for(var g in b){if(typeof a[g]==="function")continue;(function(b){a[b]=function(){var e=Array.prototype.slice.call(arguments);e.unshift(b);if(!d)return c({},[e],b);a.then=a[b],d.push(e);return f?a:a.next()}})(g)}e&&(a.then=a[e]),a.call=function(b,c){c.unshift(b),d.unshift(c),a.next(!0)};return a.next()},d=a.addMethod=function(d){var e=Array.prototype.slice.call(arguments),f=e.pop();for(var g=0,h=e.length;g<h;g++)typeof e[g]==="string"&&(b[e[g]]=f);b["then"+d[0].toUpperCase()+d.substr(1)]=f,c(a)},d("run",function(a,b){var c=this,d=function(){c.halt||(--b||c.next(!0))};for(var e=0,f=b;!c.halt&&e<f;e++)null!=a[e].call(c,d,c.error)&&d()}),d("onError",function(a,b){var c=this.error;this.error=function(d){c();for(var e=0;e<b;e++)a[e].call(this,d)}})})(this)

var head = document.getElementsByTagName('head')[0] || document.documentElement;

addMethod('load', function (args, argc) {
    for (var queue = [], i = 0; i < argc; i++) {
        (function (i) {
            queue.push(function (next, error) {
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = args[i];
                script.onload = next;
                script.onerror = error;
                head.insertBefore(script, head.firstChild);
            });
        }(i));
    }
    this.call('run', queue);
});