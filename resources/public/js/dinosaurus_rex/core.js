// Compiled by ClojureScript 1.7.170 {}
goog.provide('dinosaurus_rex.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('externals.react');
goog.require('om.dom');
goog.require('externals.react_motion');
goog.require('cljs.pprint');
goog.require('om.next');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof dinosaurus_rex.core.app_state !== 'undefined'){
} else {
dinosaurus_rex.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fireballs","fireballs",1451269482),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"angle","angle",1622094254),(25)], null));
}
dinosaurus_rex.core.rest_or_vector = (function dinosaurus_rex$core$rest_or_vector(p__32121){
var vec__32123 = p__32121;
var _ = cljs.core.nth.call(null,vec__32123,(0),null);
var rest = cljs.core.nthnext.call(null,vec__32123,(1));
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,rest);
});
dinosaurus_rex.core.calc_angle_from_cursor = (function dinosaurus_rex$core$calc_angle_from_cursor(e){
var rads = Math.atan(((window.innerHeight - e.pageY) / e.pageX));
return (((180) / Math.PI) * rads);
});
dinosaurus_rex.core.read = (function dinosaurus_rex$core$read(p__32124,key,params){
var map__32128 = p__32124;
var map__32128__$1 = ((((!((map__32128 == null)))?((((map__32128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32128):map__32128);
var env = map__32128__$1;
var state = cljs.core.get.call(null,map__32128__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.find.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__32130 = temp__4423__auto__;
var _ = cljs.core.nth.call(null,vec__32130,(0),null);
var value = cljs.core.nth.call(null,vec__32130,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
});
if(typeof dinosaurus_rex.core.mutate !== 'undefined'){
} else {
dinosaurus_rex.core.mutate = (function (){var method_table__17684__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17685__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17686__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17687__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17688__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"dinosaurus-rex.core","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17688__auto__,method_table__17684__auto__,prefer_table__17685__auto__,method_cache__17686__auto__,cached_hierarchy__17687__auto__));
})();
}
cljs.core._add_method.call(null,dinosaurus_rex.core.mutate,new cljs.core.Symbol("fireball","create","fireball/create",977873306,null),(function (p__32131,_,params){
var map__32132 = p__32131;
var map__32132__$1 = ((((!((map__32132 == null)))?((((map__32132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32132):map__32132);
var env = map__32132__$1;
var state = cljs.core.get.call(null,map__32132__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fireballs","fireballs",1451269482)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__32132,map__32132__$1,env,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fireballs","fireballs",1451269482)], null),cljs.core.conj,params);
});})(map__32132,map__32132__$1,env,state))
], null);
}));
cljs.core._add_method.call(null,dinosaurus_rex.core.mutate,new cljs.core.Symbol("fireball","destroy","fireball/destroy",1324047919,null),(function (p__32134){
var map__32135 = p__32134;
var map__32135__$1 = ((((!((map__32135 == null)))?((((map__32135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32135):map__32135);
var state = cljs.core.get.call(null,map__32135__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fireballs","fireballs",1451269482)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__32135,map__32135__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fireballs","fireballs",1451269482)], null),dinosaurus_rex.core.rest_or_vector);
});})(map__32135,map__32135__$1,state))
], null);
}));
cljs.core._add_method.call(null,dinosaurus_rex.core.mutate,new cljs.core.Symbol("dinosaur","rotate","dinosaur/rotate",1565293199,null),(function (p__32137,_,params){
var map__32138 = p__32137;
var map__32138__$1 = ((((!((map__32138 == null)))?((((map__32138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32138):map__32138);
var state = cljs.core.get.call(null,map__32138__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"angle","angle",1622094254)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__32138,map__32138__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"angle","angle",1622094254)], null),new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(params));
});})(map__32138,map__32138__$1,state))
], null);
}));
dinosaurus_rex.core.handle_click = (function dinosaurus_rex$core$handle_click(e,this$){
om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("fireball","create","fireball/create",977873306,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),((-3) + e.pageX),new cljs.core.Keyword(null,"y","y",-1757859776),((10) + e.pageY),new cljs.core.Keyword(null,"t","t",-1397832519),(new Date()).getTime()], null)))))))))));

return window.setTimeout((function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("fireball","destroy","fireball/destroy",1324047919,null)))))))))));
}),(10000));
});
dinosaurus_rex.core.handle_move = (function dinosaurus_rex$core$handle_move(e,this$){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("dinosaur","rotate","dinosaur/rotate",1565293199,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"angle","angle",1622094254),dinosaurus_rex.core.calc_angle_from_cursor.call(null,e)], null)))))))))));
});
/**
 * @constructor
 */
dinosaurus_rex.core.Fireball = (function dinosaurus_rex$core$Fireball(){
var this__18948__auto__ = this;
React.Component.apply(this__18948__auto__,arguments);

if(!((this__18948__auto__.initLocalState == null))){
this__18948__auto__.state = this__18948__auto__.initLocalState();
} else {
this__18948__auto__.state = {};
}

return this__18948__auto__;
});

dinosaurus_rex.core.Fireball.prototype = goog.object.clone(React.Component.prototype);

var x32144_32155 = dinosaurus_rex.core.Fireball.prototype;
x32144_32155.componentWillUpdate = ((function (x32144_32155){
return (function (next_props__18889__auto__,next_state__18890__auto__){
var this__18888__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__18888__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18888__auto__);
});})(x32144_32155))
;

x32144_32155.shouldComponentUpdate = ((function (x32144_32155){
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
});})(x32144_32155))
;

x32144_32155.componentWillUnmount = ((function (x32144_32155){
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
});})(x32144_32155))
;

x32144_32155.componentDidUpdate = ((function (x32144_32155){
return (function (prev_props__18891__auto__,prev_state__18892__auto__){
var this__18888__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18888__auto__);
});})(x32144_32155))
;

x32144_32155.isMounted = ((function (x32144_32155){
return (function (){
var this__18888__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18888__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x32144_32155))
;

x32144_32155.componentWillMount = ((function (x32144_32155){
return (function (){
var this__18888__auto__ = this;
var indexer__18893__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18888__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18893__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18893__auto__,this__18888__auto__);
}
});})(x32144_32155))
;

x32144_32155.render = ((function (x32144_32155){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_32145 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_32146 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_32147 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_32148 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_32149 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var vec__32150 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.props.call(null,this$),window.innerHeight], null);
var map__32151 = cljs.core.nth.call(null,vec__32150,(0),null);
var map__32151__$1 = ((((!((map__32151 == null)))?((((map__32151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32151):map__32151);
var x = cljs.core.get.call(null,map__32151__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__32151__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var h = cljs.core.nth.call(null,vec__32150,(1),null);
return externals.react.create.call(null,externals.react_motion.standard,{"defaultStyle": {"x": (0), "y": (0), "o": externals.react_motion.spring.call(null,(1))}, "style": {"x": externals.react_motion.spring.call(null,x,[(200),(26)]), "y": externals.react_motion.spring.call(null,(h - y),[(350),(26)]), "o": externals.react_motion.spring.call(null,(0),[(20),(30)])}},((function (vec__32150,map__32151,map__32151__$1,x,y,h,_STAR_reconciler_STAR_32145,_STAR_depth_STAR_32146,_STAR_shared_STAR_32147,_STAR_instrument_STAR_32148,_STAR_parent_STAR_32149,this$,x32144_32155){
return (function (i){
return React.DOM.div({"className": "fireball", "style": {"left": i.x, "bottom": i.y, "opacity": i.o, "animationDelay": [cljs.core.str(cljs.core.rand_int.call(null,(400))),cljs.core.str("ms")].join('')}});
});})(vec__32150,map__32151,map__32151__$1,x,y,h,_STAR_reconciler_STAR_32145,_STAR_depth_STAR_32146,_STAR_shared_STAR_32147,_STAR_instrument_STAR_32148,_STAR_parent_STAR_32149,this$,x32144_32155))
);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_32149;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_32148;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_32147;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_32146;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_32145;
}});})(x32144_32155))
;


dinosaurus_rex.core.Fireball.prototype.constructor = dinosaurus_rex.core.Fireball;

dinosaurus_rex.core.Fireball.prototype.om$isComponent = true;

var x32153_32156 = dinosaurus_rex.core.Fireball;


var x32154_32157 = dinosaurus_rex.core.Fireball.prototype;


dinosaurus_rex.core.Fireball.cljs$lang$type = true;

dinosaurus_rex.core.Fireball.cljs$lang$ctorStr = "dinosaurus-rex.core/Fireball";

dinosaurus_rex.core.Fireball.cljs$lang$ctorPrWriter = (function (this__18950__auto__,writer__18951__auto__,opt__18952__auto__){
return cljs.core._write.call(null,writer__18951__auto__,"dinosaurus-rex.core/Fireball");
});
dinosaurus_rex.core.fireball = om.next.factory.call(null,dinosaurus_rex.core.Fireball,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (p1__32158_SHARP_){
return clojure.string.join.call(null,cljs.core.vals.call(null,p1__32158_SHARP_));
})], null));
/**
 * @constructor
 */
dinosaurus_rex.core.Dinosaur = (function dinosaurus_rex$core$Dinosaur(){
var this__18948__auto__ = this;
React.Component.apply(this__18948__auto__,arguments);

if(!((this__18948__auto__.initLocalState == null))){
this__18948__auto__.state = this__18948__auto__.initLocalState();
} else {
this__18948__auto__.state = {};
}

return this__18948__auto__;
});

dinosaurus_rex.core.Dinosaur.prototype = goog.object.clone(React.Component.prototype);

var x32163_32173 = dinosaurus_rex.core.Dinosaur.prototype;
x32163_32173.componentWillUpdate = ((function (x32163_32173){
return (function (next_props__18889__auto__,next_state__18890__auto__){
var this__18888__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__18888__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18888__auto__);
});})(x32163_32173))
;

x32163_32173.shouldComponentUpdate = ((function (x32163_32173){
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
});})(x32163_32173))
;

x32163_32173.componentWillUnmount = ((function (x32163_32173){
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
});})(x32163_32173))
;

x32163_32173.componentDidUpdate = ((function (x32163_32173){
return (function (prev_props__18891__auto__,prev_state__18892__auto__){
var this__18888__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18888__auto__);
});})(x32163_32173))
;

x32163_32173.isMounted = ((function (x32163_32173){
return (function (){
var this__18888__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18888__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x32163_32173))
;

x32163_32173.componentWillMount = ((function (x32163_32173){
return (function (){
var this__18888__auto__ = this;
var indexer__18893__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18888__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18893__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18893__auto__,this__18888__auto__);
}
});})(x32163_32173))
;

x32163_32173.render = ((function (x32163_32173){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_32164 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_32165 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_32166 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_32167 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_32168 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__32169 = om.next.props.call(null,this$);
var map__32169__$1 = ((((!((map__32169 == null)))?((((map__32169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32169):map__32169);
var angle = cljs.core.get.call(null,map__32169__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
return React.DOM.div({"className": "dinosaur", "style": {"transform": [cljs.core.str("rotate("),cljs.core.str(((-10) - angle)),cljs.core.str("deg)")].join('')}});
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_32168;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_32167;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_32166;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_32165;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_32164;
}});})(x32163_32173))
;


dinosaurus_rex.core.Dinosaur.prototype.constructor = dinosaurus_rex.core.Dinosaur;

dinosaurus_rex.core.Dinosaur.prototype.om$isComponent = true;

var x32171_32174 = dinosaurus_rex.core.Dinosaur;


var x32172_32175 = dinosaurus_rex.core.Dinosaur.prototype;


dinosaurus_rex.core.Dinosaur.cljs$lang$type = true;

dinosaurus_rex.core.Dinosaur.cljs$lang$ctorStr = "dinosaurus-rex.core/Dinosaur";

dinosaurus_rex.core.Dinosaur.cljs$lang$ctorPrWriter = (function (this__18950__auto__,writer__18951__auto__,opt__18952__auto__){
return cljs.core._write.call(null,writer__18951__auto__,"dinosaurus-rex.core/Dinosaur");
});
dinosaurus_rex.core.dinosaur = om.next.factory.call(null,dinosaurus_rex.core.Dinosaur);
/**
 * @constructor
 */
dinosaurus_rex.core.Canvas = (function dinosaurus_rex$core$Canvas(){
var this__18948__auto__ = this;
React.Component.apply(this__18948__auto__,arguments);

if(!((this__18948__auto__.initLocalState == null))){
this__18948__auto__.state = this__18948__auto__.initLocalState();
} else {
this__18948__auto__.state = {};
}

return this__18948__auto__;
});

dinosaurus_rex.core.Canvas.prototype = goog.object.clone(React.Component.prototype);

var x32182_32192 = dinosaurus_rex.core.Canvas.prototype;
x32182_32192.componentWillUpdate = ((function (x32182_32192){
return (function (next_props__18889__auto__,next_state__18890__auto__){
var this__18888__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__18888__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18888__auto__);
});})(x32182_32192))
;

x32182_32192.shouldComponentUpdate = ((function (x32182_32192){
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
});})(x32182_32192))
;

x32182_32192.componentWillUnmount = ((function (x32182_32192){
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
});})(x32182_32192))
;

x32182_32192.componentDidUpdate = ((function (x32182_32192){
return (function (prev_props__18891__auto__,prev_state__18892__auto__){
var this__18888__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18888__auto__);
});})(x32182_32192))
;

x32182_32192.isMounted = ((function (x32182_32192){
return (function (){
var this__18888__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18888__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x32182_32192))
;

x32182_32192.componentWillMount = ((function (x32182_32192){
return (function (){
var this__18888__auto__ = this;
var indexer__18893__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18888__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18893__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18893__auto__,this__18888__auto__);
}
});})(x32182_32192))
;

x32182_32192.render = ((function (x32182_32192){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_32183 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_32184 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_32185 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_32186 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_32187 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__32188 = om.next.props.call(null,this$);
var map__32188__$1 = ((((!((map__32188 == null)))?((((map__32188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32188):map__32188);
var fireballs = cljs.core.get.call(null,map__32188__$1,new cljs.core.Keyword(null,"fireballs","fireballs",1451269482));
var angle = cljs.core.get.call(null,map__32188__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
return cljs.core.apply.call(null,om.dom.div,{"className": "canvas", "onClick": ((function (map__32188,map__32188__$1,fireballs,angle,_STAR_reconciler_STAR_32183,_STAR_depth_STAR_32184,_STAR_shared_STAR_32185,_STAR_instrument_STAR_32186,_STAR_parent_STAR_32187,this$,x32182_32192){
return (function (p1__32176_SHARP_){
return dinosaurus_rex.core.handle_click.call(null,p1__32176_SHARP_,this$);
});})(map__32188,map__32188__$1,fireballs,angle,_STAR_reconciler_STAR_32183,_STAR_depth_STAR_32184,_STAR_shared_STAR_32185,_STAR_instrument_STAR_32186,_STAR_parent_STAR_32187,this$,x32182_32192))
, "onMouseMove": ((function (map__32188,map__32188__$1,fireballs,angle,_STAR_reconciler_STAR_32183,_STAR_depth_STAR_32184,_STAR_shared_STAR_32185,_STAR_instrument_STAR_32186,_STAR_parent_STAR_32187,this$,x32182_32192){
return (function (p1__32177_SHARP_){
return dinosaurus_rex.core.handle_move.call(null,p1__32177_SHARP_,this$);
});})(map__32188,map__32188__$1,fireballs,angle,_STAR_reconciler_STAR_32183,_STAR_depth_STAR_32184,_STAR_shared_STAR_32185,_STAR_instrument_STAR_32186,_STAR_parent_STAR_32187,this$,x32182_32192))
},cljs.core.cons.call(null,dinosaurus_rex.core.dinosaur.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"angle","angle",1622094254),angle], null)),((!(cljs.core._EQ_.call(null,fireballs,new cljs.core.Keyword(null,"not-found","not-found",-629079980))))?cljs.core.map.call(null,dinosaurus_rex.core.fireball,fireballs):null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_32187;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_32186;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_32185;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_32184;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_32183;
}});})(x32182_32192))
;


dinosaurus_rex.core.Canvas.prototype.constructor = dinosaurus_rex.core.Canvas;

dinosaurus_rex.core.Canvas.prototype.om$isComponent = true;

var x32190_32193 = dinosaurus_rex.core.Canvas;
x32190_32193.om$next$IQuery$ = true;

x32190_32193.om$next$IQuery$query$arity$1 = ((function (x32190_32193){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fireballs","fireballs",1451269482),new cljs.core.Keyword(null,"angle","angle",1622094254)], null);
});})(x32190_32193))
;


var x32191_32194 = dinosaurus_rex.core.Canvas.prototype;
x32191_32194.om$next$IQuery$ = true;

x32191_32194.om$next$IQuery$query$arity$1 = ((function (x32191_32194){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fireballs","fireballs",1451269482),new cljs.core.Keyword(null,"angle","angle",1622094254)], null);
});})(x32191_32194))
;


dinosaurus_rex.core.Canvas.cljs$lang$type = true;

dinosaurus_rex.core.Canvas.cljs$lang$ctorStr = "dinosaurus-rex.core/Canvas";

dinosaurus_rex.core.Canvas.cljs$lang$ctorPrWriter = (function (this__18950__auto__,writer__18951__auto__,opt__18952__auto__){
return cljs.core._write.call(null,writer__18951__auto__,"dinosaurus-rex.core/Canvas");
});
dinosaurus_rex.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),dinosaurus_rex.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),dinosaurus_rex.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),dinosaurus_rex.core.mutate], null))], null));
om.next.add_root_BANG_.call(null,dinosaurus_rex.core.reconciler,dinosaurus_rex.core.Canvas,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map