// Compiled by ClojureScript 1.7.170 {}
goog.provide('fireball.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('externals.react');
goog.require('om.dom');
goog.require('externals.react_motion');
goog.require('cljs.pprint');
goog.require('om.next');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof fireball.core.app_state !== 'undefined'){
} else {
fireball.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fireballs","fireballs",1451269482),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"angle","angle",1622094254),(25)], null));
}
fireball.core.rest_or_vector = (function fireball$core$rest_or_vector(p__32043){
var vec__32045 = p__32043;
var _ = cljs.core.nth.call(null,vec__32045,(0),null);
var rest = cljs.core.nthnext.call(null,vec__32045,(1));
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,rest);
});
fireball.core.calc_angle_from_cursor = (function fireball$core$calc_angle_from_cursor(e){
var rads = Math.atan(((window.innerHeight - e.pageY) / e.pageX));
return (((180) / Math.PI) * rads);
});
fireball.core.read = (function fireball$core$read(p__32046,key,params){
var map__32050 = p__32046;
var map__32050__$1 = ((((!((map__32050 == null)))?((((map__32050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32050):map__32050);
var env = map__32050__$1;
var state = cljs.core.get.call(null,map__32050__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.find.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__32052 = temp__4423__auto__;
var _ = cljs.core.nth.call(null,vec__32052,(0),null);
var value = cljs.core.nth.call(null,vec__32052,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
});
if(typeof fireball.core.mutate !== 'undefined'){
} else {
fireball.core.mutate = (function (){var method_table__17684__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17685__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17686__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17687__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17688__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"fireball.core","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17688__auto__,method_table__17684__auto__,prefer_table__17685__auto__,method_cache__17686__auto__,cached_hierarchy__17687__auto__));
})();
}
cljs.core._add_method.call(null,fireball.core.mutate,new cljs.core.Symbol("fireball","create","fireball/create",977873306,null),(function (p__32053,_,params){
var map__32054 = p__32053;
var map__32054__$1 = ((((!((map__32054 == null)))?((((map__32054.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32054.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32054):map__32054);
var env = map__32054__$1;
var state = cljs.core.get.call(null,map__32054__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fireballs","fireballs",1451269482)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__32054,map__32054__$1,env,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fireballs","fireballs",1451269482)], null),cljs.core.conj,params);
});})(map__32054,map__32054__$1,env,state))
], null);
}));
cljs.core._add_method.call(null,fireball.core.mutate,new cljs.core.Symbol("fireball","destroy","fireball/destroy",1324047919,null),(function (p__32056){
var map__32057 = p__32056;
var map__32057__$1 = ((((!((map__32057 == null)))?((((map__32057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32057):map__32057);
var state = cljs.core.get.call(null,map__32057__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fireballs","fireballs",1451269482)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__32057,map__32057__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fireballs","fireballs",1451269482)], null),fireball.core.rest_or_vector);
});})(map__32057,map__32057__$1,state))
], null);
}));
cljs.core._add_method.call(null,fireball.core.mutate,new cljs.core.Symbol("dinosaur","rotate","dinosaur/rotate",1565293199,null),(function (p__32059,_,params){
var map__32060 = p__32059;
var map__32060__$1 = ((((!((map__32060 == null)))?((((map__32060.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32060.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32060):map__32060);
var state = cljs.core.get.call(null,map__32060__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"angle","angle",1622094254)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__32060,map__32060__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"angle","angle",1622094254)], null),new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(params));
});})(map__32060,map__32060__$1,state))
], null);
}));
fireball.core.handle_click = (function fireball$core$handle_click(e,this$){
om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("fireball","create","fireball/create",977873306,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),((-3) + e.pageX),new cljs.core.Keyword(null,"y","y",-1757859776),((10) + e.pageY),new cljs.core.Keyword(null,"t","t",-1397832519),(new Date()).getTime()], null)))))))))));

return window.setTimeout((function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("fireball","destroy","fireball/destroy",1324047919,null)))))))))));
}),(10000));
});
fireball.core.handle_move = (function fireball$core$handle_move(e,this$){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("dinosaur","rotate","dinosaur/rotate",1565293199,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"angle","angle",1622094254),fireball.core.calc_angle_from_cursor.call(null,e)], null)))))))))));
});
/**
 * @constructor
 */
fireball.core.Fireball = (function fireball$core$Fireball(){
var this__18948__auto__ = this;
React.Component.apply(this__18948__auto__,arguments);

if(!((this__18948__auto__.initLocalState == null))){
this__18948__auto__.state = this__18948__auto__.initLocalState();
} else {
this__18948__auto__.state = {};
}

return this__18948__auto__;
});

fireball.core.Fireball.prototype = goog.object.clone(React.Component.prototype);

var x32066_32077 = fireball.core.Fireball.prototype;
x32066_32077.componentWillUpdate = ((function (x32066_32077){
return (function (next_props__18889__auto__,next_state__18890__auto__){
var this__18888__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__18888__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18888__auto__);
});})(x32066_32077))
;

x32066_32077.shouldComponentUpdate = ((function (x32066_32077){
return (function (next_props__18889__auto__,next_state__18890__auto__){
var this__18888__auto__ = this;
var or__16771__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18888__auto__),goog.object.get(next_props__18889__auto__,"omcljs$value"));
if(or__16771__auto__){
return or__16771__auto__;
} else {
var and__16759__auto__ = this__18888__auto__.state;
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18888__auto__.state,"omcljs$state"),goog.object.get(next_state__18890__auto__,"omcljs$state"));
} else {
return and__16759__auto__;
}
}
});})(x32066_32077))
;

x32066_32077.componentWillUnmount = ((function (x32066_32077){
return (function (){
var this__18888__auto__ = this;
var r__18894__auto__ = om.next.get_reconciler.call(null,this__18888__auto__);
var cfg__18895__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18894__auto__);
var st__18896__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18895__auto__);
var indexer__18893__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18895__auto__);
if((st__18896__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__18896__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18888__auto__);
}

if((indexer__18893__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18893__auto__,this__18888__auto__);
}
});})(x32066_32077))
;

x32066_32077.componentDidUpdate = ((function (x32066_32077){
return (function (prev_props__18891__auto__,prev_state__18892__auto__){
var this__18888__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18888__auto__);
});})(x32066_32077))
;

x32066_32077.isMounted = ((function (x32066_32077){
return (function (){
var this__18888__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18888__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x32066_32077))
;

x32066_32077.componentWillMount = ((function (x32066_32077){
return (function (){
var this__18888__auto__ = this;
var indexer__18893__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18888__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18893__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18893__auto__,this__18888__auto__);
}
});})(x32066_32077))
;

x32066_32077.render = ((function (x32066_32077){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_32067 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_32068 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_32069 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_32070 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_32071 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var vec__32072 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.props.call(null,this$),window.innerHeight], null);
var map__32073 = cljs.core.nth.call(null,vec__32072,(0),null);
var map__32073__$1 = ((((!((map__32073 == null)))?((((map__32073.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32073.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32073):map__32073);
var x = cljs.core.get.call(null,map__32073__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__32073__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var h = cljs.core.nth.call(null,vec__32072,(1),null);
return externals.react.create.call(null,externals.react_motion.standard,{"defaultStyle": {"x": (0), "y": (0), "o": externals.react_motion.spring.call(null,(1))}, "style": {"x": externals.react_motion.spring.call(null,x,[(200),(26)]), "y": externals.react_motion.spring.call(null,(h - y),[(350),(26)]), "o": externals.react_motion.spring.call(null,(0),[(20),(30)])}},((function (vec__32072,map__32073,map__32073__$1,x,y,h,_STAR_reconciler_STAR_32067,_STAR_depth_STAR_32068,_STAR_shared_STAR_32069,_STAR_instrument_STAR_32070,_STAR_parent_STAR_32071,this$,x32066_32077){
return (function (i){
return React.DOM.div({"className": "fireball", "style": {"left": i.x, "bottom": i.y, "opacity": i.o, "animationDelay": [cljs.core.str(cljs.core.rand_int.call(null,(400))),cljs.core.str("ms")].join('')}});
});})(vec__32072,map__32073,map__32073__$1,x,y,h,_STAR_reconciler_STAR_32067,_STAR_depth_STAR_32068,_STAR_shared_STAR_32069,_STAR_instrument_STAR_32070,_STAR_parent_STAR_32071,this$,x32066_32077))
);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_32071;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_32070;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_32069;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_32068;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_32067;
}});})(x32066_32077))
;


fireball.core.Fireball.prototype.constructor = fireball.core.Fireball;

fireball.core.Fireball.prototype.om$isComponent = true;

var x32075_32078 = fireball.core.Fireball;


var x32076_32079 = fireball.core.Fireball.prototype;


fireball.core.Fireball.cljs$lang$type = true;

fireball.core.Fireball.cljs$lang$ctorStr = "fireball.core/Fireball";

fireball.core.Fireball.cljs$lang$ctorPrWriter = (function (this__18950__auto__,writer__18951__auto__,opt__18952__auto__){
return cljs.core._write.call(null,writer__18951__auto__,"fireball.core/Fireball");
});
fireball.core.fireball = om.next.factory.call(null,fireball.core.Fireball,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (p1__32080_SHARP_){
return clojure.string.join.call(null,cljs.core.vals.call(null,p1__32080_SHARP_));
})], null));
/**
 * @constructor
 */
fireball.core.Dinosaur = (function fireball$core$Dinosaur(){
var this__18948__auto__ = this;
React.Component.apply(this__18948__auto__,arguments);

if(!((this__18948__auto__.initLocalState == null))){
this__18948__auto__.state = this__18948__auto__.initLocalState();
} else {
this__18948__auto__.state = {};
}

return this__18948__auto__;
});

fireball.core.Dinosaur.prototype = goog.object.clone(React.Component.prototype);

var x32085_32095 = fireball.core.Dinosaur.prototype;
x32085_32095.componentWillUpdate = ((function (x32085_32095){
return (function (next_props__18889__auto__,next_state__18890__auto__){
var this__18888__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__18888__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18888__auto__);
});})(x32085_32095))
;

x32085_32095.shouldComponentUpdate = ((function (x32085_32095){
return (function (next_props__18889__auto__,next_state__18890__auto__){
var this__18888__auto__ = this;
var or__16771__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18888__auto__),goog.object.get(next_props__18889__auto__,"omcljs$value"));
if(or__16771__auto__){
return or__16771__auto__;
} else {
var and__16759__auto__ = this__18888__auto__.state;
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18888__auto__.state,"omcljs$state"),goog.object.get(next_state__18890__auto__,"omcljs$state"));
} else {
return and__16759__auto__;
}
}
});})(x32085_32095))
;

x32085_32095.componentWillUnmount = ((function (x32085_32095){
return (function (){
var this__18888__auto__ = this;
var r__18894__auto__ = om.next.get_reconciler.call(null,this__18888__auto__);
var cfg__18895__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18894__auto__);
var st__18896__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18895__auto__);
var indexer__18893__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18895__auto__);
if((st__18896__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__18896__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18888__auto__);
}

if((indexer__18893__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18893__auto__,this__18888__auto__);
}
});})(x32085_32095))
;

x32085_32095.componentDidUpdate = ((function (x32085_32095){
return (function (prev_props__18891__auto__,prev_state__18892__auto__){
var this__18888__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18888__auto__);
});})(x32085_32095))
;

x32085_32095.isMounted = ((function (x32085_32095){
return (function (){
var this__18888__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18888__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x32085_32095))
;

x32085_32095.componentWillMount = ((function (x32085_32095){
return (function (){
var this__18888__auto__ = this;
var indexer__18893__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18888__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18893__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18893__auto__,this__18888__auto__);
}
});})(x32085_32095))
;

x32085_32095.render = ((function (x32085_32095){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_32086 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_32087 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_32088 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_32089 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_32090 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__32091 = om.next.props.call(null,this$);
var map__32091__$1 = ((((!((map__32091 == null)))?((((map__32091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32091):map__32091);
var angle = cljs.core.get.call(null,map__32091__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
return React.DOM.div({"className": "dinosaur", "style": {"transform": [cljs.core.str("rotate("),cljs.core.str(((-10) - angle)),cljs.core.str("deg)")].join('')}});
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_32090;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_32089;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_32088;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_32087;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_32086;
}});})(x32085_32095))
;


fireball.core.Dinosaur.prototype.constructor = fireball.core.Dinosaur;

fireball.core.Dinosaur.prototype.om$isComponent = true;

var x32093_32096 = fireball.core.Dinosaur;


var x32094_32097 = fireball.core.Dinosaur.prototype;


fireball.core.Dinosaur.cljs$lang$type = true;

fireball.core.Dinosaur.cljs$lang$ctorStr = "fireball.core/Dinosaur";

fireball.core.Dinosaur.cljs$lang$ctorPrWriter = (function (this__18950__auto__,writer__18951__auto__,opt__18952__auto__){
return cljs.core._write.call(null,writer__18951__auto__,"fireball.core/Dinosaur");
});
fireball.core.dinosaur = om.next.factory.call(null,fireball.core.Dinosaur);
/**
 * @constructor
 */
fireball.core.Canvas = (function fireball$core$Canvas(){
var this__18948__auto__ = this;
React.Component.apply(this__18948__auto__,arguments);

if(!((this__18948__auto__.initLocalState == null))){
this__18948__auto__.state = this__18948__auto__.initLocalState();
} else {
this__18948__auto__.state = {};
}

return this__18948__auto__;
});

fireball.core.Canvas.prototype = goog.object.clone(React.Component.prototype);

var x32104_32114 = fireball.core.Canvas.prototype;
x32104_32114.componentWillUpdate = ((function (x32104_32114){
return (function (next_props__18889__auto__,next_state__18890__auto__){
var this__18888__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__18888__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18888__auto__);
});})(x32104_32114))
;

x32104_32114.shouldComponentUpdate = ((function (x32104_32114){
return (function (next_props__18889__auto__,next_state__18890__auto__){
var this__18888__auto__ = this;
var or__16771__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18888__auto__),goog.object.get(next_props__18889__auto__,"omcljs$value"));
if(or__16771__auto__){
return or__16771__auto__;
} else {
var and__16759__auto__ = this__18888__auto__.state;
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18888__auto__.state,"omcljs$state"),goog.object.get(next_state__18890__auto__,"omcljs$state"));
} else {
return and__16759__auto__;
}
}
});})(x32104_32114))
;

x32104_32114.componentWillUnmount = ((function (x32104_32114){
return (function (){
var this__18888__auto__ = this;
var r__18894__auto__ = om.next.get_reconciler.call(null,this__18888__auto__);
var cfg__18895__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18894__auto__);
var st__18896__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18895__auto__);
var indexer__18893__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18895__auto__);
if((st__18896__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__18896__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18888__auto__);
}

if((indexer__18893__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18893__auto__,this__18888__auto__);
}
});})(x32104_32114))
;

x32104_32114.componentDidUpdate = ((function (x32104_32114){
return (function (prev_props__18891__auto__,prev_state__18892__auto__){
var this__18888__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18888__auto__);
});})(x32104_32114))
;

x32104_32114.isMounted = ((function (x32104_32114){
return (function (){
var this__18888__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18888__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x32104_32114))
;

x32104_32114.componentWillMount = ((function (x32104_32114){
return (function (){
var this__18888__auto__ = this;
var indexer__18893__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18888__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18893__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18893__auto__,this__18888__auto__);
}
});})(x32104_32114))
;

x32104_32114.render = ((function (x32104_32114){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_32105 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_32106 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_32107 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_32108 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_32109 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__32110 = om.next.props.call(null,this$);
var map__32110__$1 = ((((!((map__32110 == null)))?((((map__32110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32110):map__32110);
var fireballs = cljs.core.get.call(null,map__32110__$1,new cljs.core.Keyword(null,"fireballs","fireballs",1451269482));
var angle = cljs.core.get.call(null,map__32110__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
return cljs.core.apply.call(null,om.dom.div,{"className": "canvas", "onClick": ((function (map__32110,map__32110__$1,fireballs,angle,_STAR_reconciler_STAR_32105,_STAR_depth_STAR_32106,_STAR_shared_STAR_32107,_STAR_instrument_STAR_32108,_STAR_parent_STAR_32109,this$,x32104_32114){
return (function (p1__32098_SHARP_){
return fireball.core.handle_click.call(null,p1__32098_SHARP_,this$);
});})(map__32110,map__32110__$1,fireballs,angle,_STAR_reconciler_STAR_32105,_STAR_depth_STAR_32106,_STAR_shared_STAR_32107,_STAR_instrument_STAR_32108,_STAR_parent_STAR_32109,this$,x32104_32114))
, "onMouseMove": ((function (map__32110,map__32110__$1,fireballs,angle,_STAR_reconciler_STAR_32105,_STAR_depth_STAR_32106,_STAR_shared_STAR_32107,_STAR_instrument_STAR_32108,_STAR_parent_STAR_32109,this$,x32104_32114){
return (function (p1__32099_SHARP_){
return fireball.core.handle_move.call(null,p1__32099_SHARP_,this$);
});})(map__32110,map__32110__$1,fireballs,angle,_STAR_reconciler_STAR_32105,_STAR_depth_STAR_32106,_STAR_shared_STAR_32107,_STAR_instrument_STAR_32108,_STAR_parent_STAR_32109,this$,x32104_32114))
},cljs.core.cons.call(null,fireball.core.dinosaur.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"angle","angle",1622094254),angle], null)),((!(cljs.core._EQ_.call(null,fireballs,new cljs.core.Keyword(null,"not-found","not-found",-629079980))))?cljs.core.map.call(null,fireball.core.fireball,fireballs):null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_32109;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_32108;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_32107;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_32106;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_32105;
}});})(x32104_32114))
;


fireball.core.Canvas.prototype.constructor = fireball.core.Canvas;

fireball.core.Canvas.prototype.om$isComponent = true;

var x32112_32115 = fireball.core.Canvas;
x32112_32115.om$next$IQuery$ = true;

x32112_32115.om$next$IQuery$query$arity$1 = ((function (x32112_32115){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fireballs","fireballs",1451269482),new cljs.core.Keyword(null,"angle","angle",1622094254)], null);
});})(x32112_32115))
;


var x32113_32116 = fireball.core.Canvas.prototype;
x32113_32116.om$next$IQuery$ = true;

x32113_32116.om$next$IQuery$query$arity$1 = ((function (x32113_32116){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fireballs","fireballs",1451269482),new cljs.core.Keyword(null,"angle","angle",1622094254)], null);
});})(x32113_32116))
;


fireball.core.Canvas.cljs$lang$type = true;

fireball.core.Canvas.cljs$lang$ctorStr = "fireball.core/Canvas";

fireball.core.Canvas.cljs$lang$ctorPrWriter = (function (this__18950__auto__,writer__18951__auto__,opt__18952__auto__){
return cljs.core._write.call(null,writer__18951__auto__,"fireball.core/Canvas");
});
fireball.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),fireball.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),fireball.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),fireball.core.mutate], null))], null));
om.next.add_root_BANG_.call(null,fireball.core.reconciler,fireball.core.Canvas,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map