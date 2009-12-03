/*
 * John Resig Templates - jQuery plugin for templates
 *
 * Copyright (c) 2009 Jared Grippe (but mostly by John Resig)
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * straight stolen from http://ejohn.org/blog/javascript-micro-templating
 *
 */

 /**
  * see straight stolen from
  */
(function($) {

  function Resiglet(source, tag){
    if (tag) this.tag = tag;
    var t = String(this.tag).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
    this.evaluate = new Function("obj",
      "var p=[],print=function(){p.push.apply(p,arguments);};" +
      "with(obj){p.push('" +
      source.toString()
        .replace(/[\r\t\n]/g, " ")
        .replace(new RegExp("'(?=[^"+t+"]*"+t+">)",'g'),"\t")
        .split("'").join("\\'")
        .split("\t").join("'")
        .replace(new RegExp('<'+t+'=(.+?)'+t+'>','g'), "',$1,'")
        .split('<'+t).join("');")
        .split(t+'>').join("p.push('")
      + "');}return p.join('');"
    );
  };
  Resiglet.prototype.Pattern = /(^|.|\r|\n)(#\{(.*?)\})/;
  Resiglet.prototype.tag = '%';

  $.resiglet = function(source, obj){
    var resiglet = new Resiglet(source);
    if (!obj) return resiglet;
    return resiglet.evaluate(obj);
  };

})(jQuery);