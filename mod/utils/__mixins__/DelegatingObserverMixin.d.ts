import { Mixin1 } from "../../__internal__/mixins.js";
import { DisposableLike, ObserverLike } from "../../utils.js";
import { ObserverMixinBaseLike } from "./ObserverMixin.js";
declare const DelegatingObserverMixin: <T>() => Mixin1<ObserverLike<T>, ObserverLike, ObserverMixinBaseLike<T> & DisposableLike>;
export default DelegatingObserverMixin;
