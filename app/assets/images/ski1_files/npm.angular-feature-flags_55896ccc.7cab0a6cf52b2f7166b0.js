/*! For license information please see npm.angular-feature-flags~55896ccc.7cab0a6cf52b2f7166b0.js.LICENSE.txt */
(window.webpackJsonpAem=window.webpackJsonpAem||[]).push([[12],{"4a91e5192d94aa2a8511":function(e,a,t){t("de8704d87f66a62be42f"),e.exports="feature-flags"},de8704d87f66a62be42f:function(e,a){!function(){function e(e,a,t){var r={},n=[],i=function(e){return a.isPresent(e)},l=function(e){return i(e)?"true"===a.get(e):r[e]},f=function(e){return e.forEach((function(e){r[e.key]=e.active,e.active=l(e.key)})),angular.copy(e,n),n},u=function(a){return angular.isArray(a)?function(a){var t=e.defer();return t.resolve(a),t.promise}(f(a)):a.then((function(e){return f(e.data||e)}))};return t&&u(t),{set:u,get:function(){return n},enable:function(e){e.active=!0,a.set(e.key,!0)},disable:function(e){e.active=!1,a.set(e.key,!1)},reset:function(e){e.active=r[e.key],a.remove(e.key)},isOn:l,isOnByDefault:function(e){return r[e]},isOverridden:i}}angular.module("feature-flags",[]),angular.module("feature-flags").directive("featureFlag",["featureFlags","$interpolate",function(e,a){return{transclude:"element",priority:599,terminal:!0,restrict:"A",$$tlb:!0,compile:function(t,r){var n="featureFlagHide"in r;return t[0].textContent=" featureFlag: "+r.featureFlag+" is "+(n?"on":"off")+" ",function(t,r,i,l,f){var u,s;t.$watch((function(){var r=a(i.featureFlag)(t);return e.isOn(r)}),(function(e){(n?!e:e)?(s=t.$new(),f(s,(function(e){u=e,r.after(u).remove()}))):(s&&(s.$destroy(),s=null),u&&(u.after(r).remove(),u=null))}))}}}}]),angular.module("feature-flags").directive("featureFlagOverrides",["featureFlags",function(e){return{restrict:"A",link:function(a){a.flags=e.get(),a.isOn=e.isOn,a.isOverridden=e.isOverridden,a.enable=e.enable,a.disable=e.disable,a.reset=e.reset,a.isOnByDefault=e.isOnByDefault},template:'<div class="feature-flags">  <h1>Feature Flags</h1>  <div id="feature-flag--{{flag.key}}" class="feature-flags-flag" ng-repeat="flag in flags">    <div class="feature-flags-name">{{flag.name || flag.key}}</div>    <div id="feature-flag--{{flag.key}}--enable" class="feature-flags-switch" ng-click="enable(flag)" ng-class="{\'active\': isOverridden(flag.key) && isOn(flag.key)}">ON</div>    <div id="feature-flag--{{flag.key}}--disable" class="feature-flags-switch" ng-click="disable(flag)" ng-class="{\'active\': isOverridden(flag.key) && !isOn(flag.key)}">OFF</div>    <div id="feature-flag--{{flag.key}}--reset" class="feature-flags-switch" ng-click="reset(flag)" ng-class="{\'active\': !isOverridden(flag.key)}">DEFAULT ({{isOnByDefault(flag.key) ? \'ON\' : \'OFF\'}})</div>    <div class="feature-flags-desc">{{flag.description}}</div>  </div></div>',replace:!0}}]),angular.module("feature-flags").service("featureFlagOverrides",["$rootElement",function(e){var a="featureFlags."+e.attr("ng-app")+".",t=function(){try{return localStorage.setItem("featureFlags.availableTest","test"),localStorage.removeItem("featureFlags.availableTest"),!0}catch(e){return!1}}(),r=function(e){return a+e},n=function(e){return 0===e.indexOf(a)},i=function(e,a){t&&localStorage.setItem(r(a),e)},l=function(e){if(t)return localStorage.getItem(r(e))};return{isPresent:function(e){var a=l(e);return"undefined"!==typeof a&&null!==a},get:l,set:function(e,a){angular.isObject(e)?angular.forEach(e,i):i(a,e)},remove:function(e){t&&localStorage.removeItem(r(e))},reset:function(){var e;if(t)for(e in localStorage)n(e)&&localStorage.removeItem(e)}}}]),angular.module("feature-flags").provider("featureFlags",(function(){var a=[];this.setInitialFlags=function(e){a=e},this.$get=["$q","featureFlagOverrides",function(t,r){return new e(t,r,a)}]}))}()}}]);