// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__37623__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__37623 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37624__i = 0, G__37624__a = new Array(arguments.length -  0);
while (G__37624__i < G__37624__a.length) {G__37624__a[G__37624__i] = arguments[G__37624__i + 0]; ++G__37624__i;}
  args = new cljs.core.IndexedSeq(G__37624__a,0);
} 
return G__37623__delegate.call(this,args);};
G__37623.cljs$lang$maxFixedArity = 0;
G__37623.cljs$lang$applyTo = (function (arglist__37625){
var args = cljs.core.seq(arglist__37625);
return G__37623__delegate(args);
});
G__37623.cljs$core$IFn$_invoke$arity$variadic = G__37623__delegate;
return G__37623;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__37626__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__37626 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37627__i = 0, G__37627__a = new Array(arguments.length -  0);
while (G__37627__i < G__37627__a.length) {G__37627__a[G__37627__i] = arguments[G__37627__i + 0]; ++G__37627__i;}
  args = new cljs.core.IndexedSeq(G__37627__a,0);
} 
return G__37626__delegate.call(this,args);};
G__37626.cljs$lang$maxFixedArity = 0;
G__37626.cljs$lang$applyTo = (function (arglist__37628){
var args = cljs.core.seq(arglist__37628);
return G__37626__delegate(args);
});
G__37626.cljs$core$IFn$_invoke$arity$variadic = G__37626__delegate;
return G__37626;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map