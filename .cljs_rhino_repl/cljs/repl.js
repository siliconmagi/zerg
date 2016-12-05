// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36037){
var map__36062 = p__36037;
var map__36062__$1 = ((((!((map__36062 == null)))?((((map__36062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36062):map__36062);
var m = map__36062__$1;
var n = cljs.core.get.call(null,map__36062__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36062__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36064_36086 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36065_36087 = null;
var count__36066_36088 = (0);
var i__36067_36089 = (0);
while(true){
if((i__36067_36089 < count__36066_36088)){
var f_36090 = cljs.core._nth.call(null,chunk__36065_36087,i__36067_36089);
cljs.core.println.call(null,"  ",f_36090);

var G__36091 = seq__36064_36086;
var G__36092 = chunk__36065_36087;
var G__36093 = count__36066_36088;
var G__36094 = (i__36067_36089 + (1));
seq__36064_36086 = G__36091;
chunk__36065_36087 = G__36092;
count__36066_36088 = G__36093;
i__36067_36089 = G__36094;
continue;
} else {
var temp__4657__auto___36095 = cljs.core.seq.call(null,seq__36064_36086);
if(temp__4657__auto___36095){
var seq__36064_36096__$1 = temp__4657__auto___36095;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36064_36096__$1)){
var c__25898__auto___36097 = cljs.core.chunk_first.call(null,seq__36064_36096__$1);
var G__36098 = cljs.core.chunk_rest.call(null,seq__36064_36096__$1);
var G__36099 = c__25898__auto___36097;
var G__36100 = cljs.core.count.call(null,c__25898__auto___36097);
var G__36101 = (0);
seq__36064_36086 = G__36098;
chunk__36065_36087 = G__36099;
count__36066_36088 = G__36100;
i__36067_36089 = G__36101;
continue;
} else {
var f_36102 = cljs.core.first.call(null,seq__36064_36096__$1);
cljs.core.println.call(null,"  ",f_36102);

var G__36103 = cljs.core.next.call(null,seq__36064_36096__$1);
var G__36104 = null;
var G__36105 = (0);
var G__36106 = (0);
seq__36064_36086 = G__36103;
chunk__36065_36087 = G__36104;
count__36066_36088 = G__36105;
i__36067_36089 = G__36106;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36107 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25087__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25087__auto__)){
return or__25087__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36107);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36107)))?cljs.core.second.call(null,arglists_36107):arglists_36107));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36068_36108 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36069_36109 = null;
var count__36070_36110 = (0);
var i__36071_36111 = (0);
while(true){
if((i__36071_36111 < count__36070_36110)){
var vec__36072_36112 = cljs.core._nth.call(null,chunk__36069_36109,i__36071_36111);
var name_36113 = cljs.core.nth.call(null,vec__36072_36112,(0),null);
var map__36075_36114 = cljs.core.nth.call(null,vec__36072_36112,(1),null);
var map__36075_36115__$1 = ((((!((map__36075_36114 == null)))?((((map__36075_36114.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36075_36114.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36075_36114):map__36075_36114);
var doc_36116 = cljs.core.get.call(null,map__36075_36115__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36117 = cljs.core.get.call(null,map__36075_36115__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36113);

cljs.core.println.call(null," ",arglists_36117);

if(cljs.core.truth_(doc_36116)){
cljs.core.println.call(null," ",doc_36116);
} else {
}

var G__36118 = seq__36068_36108;
var G__36119 = chunk__36069_36109;
var G__36120 = count__36070_36110;
var G__36121 = (i__36071_36111 + (1));
seq__36068_36108 = G__36118;
chunk__36069_36109 = G__36119;
count__36070_36110 = G__36120;
i__36071_36111 = G__36121;
continue;
} else {
var temp__4657__auto___36122 = cljs.core.seq.call(null,seq__36068_36108);
if(temp__4657__auto___36122){
var seq__36068_36123__$1 = temp__4657__auto___36122;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36068_36123__$1)){
var c__25898__auto___36124 = cljs.core.chunk_first.call(null,seq__36068_36123__$1);
var G__36125 = cljs.core.chunk_rest.call(null,seq__36068_36123__$1);
var G__36126 = c__25898__auto___36124;
var G__36127 = cljs.core.count.call(null,c__25898__auto___36124);
var G__36128 = (0);
seq__36068_36108 = G__36125;
chunk__36069_36109 = G__36126;
count__36070_36110 = G__36127;
i__36071_36111 = G__36128;
continue;
} else {
var vec__36077_36129 = cljs.core.first.call(null,seq__36068_36123__$1);
var name_36130 = cljs.core.nth.call(null,vec__36077_36129,(0),null);
var map__36080_36131 = cljs.core.nth.call(null,vec__36077_36129,(1),null);
var map__36080_36132__$1 = ((((!((map__36080_36131 == null)))?((((map__36080_36131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36080_36131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36080_36131):map__36080_36131);
var doc_36133 = cljs.core.get.call(null,map__36080_36132__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36134 = cljs.core.get.call(null,map__36080_36132__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36130);

cljs.core.println.call(null," ",arglists_36134);

if(cljs.core.truth_(doc_36133)){
cljs.core.println.call(null," ",doc_36133);
} else {
}

var G__36135 = cljs.core.next.call(null,seq__36068_36123__$1);
var G__36136 = null;
var G__36137 = (0);
var G__36138 = (0);
seq__36068_36108 = G__36135;
chunk__36069_36109 = G__36136;
count__36070_36110 = G__36137;
i__36071_36111 = G__36138;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__36082 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36083 = null;
var count__36084 = (0);
var i__36085 = (0);
while(true){
if((i__36085 < count__36084)){
var role = cljs.core._nth.call(null,chunk__36083,i__36085);
var temp__4657__auto___36139__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36139__$1)){
var spec_36140 = temp__4657__auto___36139__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36140));
} else {
}

var G__36141 = seq__36082;
var G__36142 = chunk__36083;
var G__36143 = count__36084;
var G__36144 = (i__36085 + (1));
seq__36082 = G__36141;
chunk__36083 = G__36142;
count__36084 = G__36143;
i__36085 = G__36144;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36082);
if(temp__4657__auto____$1){
var seq__36082__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36082__$1)){
var c__25898__auto__ = cljs.core.chunk_first.call(null,seq__36082__$1);
var G__36145 = cljs.core.chunk_rest.call(null,seq__36082__$1);
var G__36146 = c__25898__auto__;
var G__36147 = cljs.core.count.call(null,c__25898__auto__);
var G__36148 = (0);
seq__36082 = G__36145;
chunk__36083 = G__36146;
count__36084 = G__36147;
i__36085 = G__36148;
continue;
} else {
var role = cljs.core.first.call(null,seq__36082__$1);
var temp__4657__auto___36149__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36149__$2)){
var spec_36150 = temp__4657__auto___36149__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36150));
} else {
}

var G__36151 = cljs.core.next.call(null,seq__36082__$1);
var G__36152 = null;
var G__36153 = (0);
var G__36154 = (0);
seq__36082 = G__36151;
chunk__36083 = G__36152;
count__36084 = G__36153;
i__36085 = G__36154;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map