import { Mixin3 } from "../../__internal__/mixins.js";
import { SourceLike } from "../../computations.js";
import { Function2 } from "../../functions.js";
import { EventListenerLike } from "../../utils.js";
import { LatestEventListenerContextLike, LatestEventListenerLike, LatestEventListenerMode } from "./LatestEventListenerMixin.js";
declare const LatestSourceMixin: <T, TEventListener extends EventListenerLike<ReadonlyArray<T>>, TSource extends SourceLike<T, TSourceEventListener>, TSourceEventListener extends EventListenerLike<T> & LatestEventListenerLike<T>>() => Mixin3<SourceLike<ReadonlyArray<T>, TEventListener>, ReadonlyArray<TSource>, LatestEventListenerMode, Function2<TEventListener, LatestEventListenerContextLike, TSourceEventListener>>;
export default LatestSourceMixin;
