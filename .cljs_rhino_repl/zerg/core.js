// Compiled by ClojureScript 1.9.229 {}
goog.provide('zerg.core');
goog.require('cljs.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
zerg.core.new_board = (function zerg$core$new_board(n){
return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,cljs.core.vec.call(null,cljs.core.repeat.call(null,n,(0)))));
});
if(typeof zerg.core.app_state !== 'undefined'){
} else {
zerg.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Nightshell TicTacToe",new cljs.core.Keyword(null,"board","board",-1907017633),zerg.core.new_board.call(null,(3))], null));
}
zerg.core.zerg = (function zerg$core$zerg(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,zerg.core.app_state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 3 3",new cljs.core.Keyword(null,"width","width",-384071477),(500),new cljs.core.Keyword(null,"height","height",1025178622),(500)], null),(function (){var iter__25867__auto__ = (function zerg$core$zerg_$_iter__37504(s__37505){
return (new cljs.core.LazySeq(null,(function (){
var s__37505__$1 = s__37505;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__37505__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var i = cljs.core.first.call(null,xs__5205__auto__);
var iterys__25863__auto__ = ((function (s__37505__$1,i,xs__5205__auto__,temp__4657__auto__){
return (function zerg$core$zerg_$_iter__37504_$_iter__37506(s__37507){
return (new cljs.core.LazySeq(null,((function (s__37505__$1,i,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__37507__$1 = s__37507;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__37507__$1);
if(temp__4657__auto____$1){
var s__37507__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37507__$2)){
var c__25865__auto__ = cljs.core.chunk_first.call(null,s__37507__$2);
var size__25866__auto__ = cljs.core.count.call(null,c__25865__auto__);
var b__37509 = cljs.core.chunk_buffer.call(null,size__25866__auto__);
if((function (){var i__37508 = (0);
while(true){
if((i__37508 < size__25866__auto__)){
var j = cljs.core._nth.call(null,c__25865__auto__,i__37508);
cljs.core.chunk_append.call(null,b__37509,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),0.9,new cljs.core.Keyword(null,"height","height",1025178622),0.9,new cljs.core.Keyword(null,"fill","fill",883462889),"gold",new cljs.core.Keyword(null,"x","x",2099068185),i,new cljs.core.Keyword(null,"y","y",-1757859776),j,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__37508,s__37505__$1,j,c__25865__auto__,size__25866__auto__,b__37509,s__37507__$2,temp__4657__auto____$1,i,xs__5205__auto__,temp__4657__auto__){
return (function zerg$core$zerg_$_iter__37504_$_iter__37506_$_rect_click(e){
return cljs.core.prn.call(null,"Clicked",i,j);
});})(i__37508,s__37505__$1,j,c__25865__auto__,size__25866__auto__,b__37509,s__37507__$2,temp__4657__auto____$1,i,xs__5205__auto__,temp__4657__auto__))
], null)], null));

var G__37510 = (i__37508 + (1));
i__37508 = G__37510;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37509),zerg$core$zerg_$_iter__37504_$_iter__37506.call(null,cljs.core.chunk_rest.call(null,s__37507__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37509),null);
}
} else {
var j = cljs.core.first.call(null,s__37507__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),0.9,new cljs.core.Keyword(null,"height","height",1025178622),0.9,new cljs.core.Keyword(null,"fill","fill",883462889),"gold",new cljs.core.Keyword(null,"x","x",2099068185),i,new cljs.core.Keyword(null,"y","y",-1757859776),j,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s__37505__$1,j,s__37507__$2,temp__4657__auto____$1,i,xs__5205__auto__,temp__4657__auto__){
return (function zerg$core$zerg_$_iter__37504_$_iter__37506_$_rect_click(e){
return cljs.core.prn.call(null,"Clicked",i,j);
});})(s__37505__$1,j,s__37507__$2,temp__4657__auto____$1,i,xs__5205__auto__,temp__4657__auto__))
], null)], null),zerg$core$zerg_$_iter__37504_$_iter__37506.call(null,cljs.core.rest.call(null,s__37507__$2)));
}
} else {
return null;
}
break;
}
});})(s__37505__$1,i,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__37505__$1,i,xs__5205__auto__,temp__4657__auto__))
;
var fs__25864__auto__ = cljs.core.seq.call(null,iterys__25863__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,zerg.core.app_state))))));
if(fs__25864__auto__){
return cljs.core.concat.call(null,fs__25864__auto__,zerg$core$zerg_$_iter__37504.call(null,cljs.core.rest.call(null,s__37505__$1)));
} else {
var G__37511 = cljs.core.rest.call(null,s__37505__$1);
s__37505__$1 = G__37511;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25867__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,zerg.core.app_state)))));
})()], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zerg.core.zerg], null),document.getElementById("app"));
zerg.core.on_js_reload = (function zerg$core$on_js_reload(){
return cljs.core.swap_BANG_.call(null,zerg.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697)], null),"Hi");
});

//# sourceMappingURL=core.js.map