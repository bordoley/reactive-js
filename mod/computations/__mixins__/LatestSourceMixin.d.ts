import { Mixin3 } from "../../__internal__/mixins.js";
import { ReactiveSourceLike } from "../../computations.js";
import { Function2 } from "../../functions.js";
import { EventListenerLike } from "../../utils.js";
import { LatestEventListenerContextLike, LatestEventListenerLike, LatestEventListenerMode } from "./LatestEventListenerMixin.js";
declare const LatestSourceMixin: <T, TEventListener extends EventListenerLike<ReadonlyArray<T>>, TSource extends ReactiveSourceLike<T, TSourceEventListener>, TSourceEventListener extends EventListenerLike<T> & LatestEventListenerLike<T>>() => Mixin3<ReactiveSourceLike<ReadonlyArray<T>, TEventListener>, ReadonlyArray<TSource>, LatestEventListenerMode, Function2<TEventListener, LatestEventListenerContextLike, TSourceEventListener>>;
export default LatestSourceMixin;
