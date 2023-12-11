import { Mixin1 } from "../../__internal__/mixins.js";
import { ObserverLike } from "../../concurrent.js";
import { DisposableLike } from "../../utils.js";
declare const DelegatingObserverMixin: <T>() => Mixin1<ObserverLike<T>, ObserverLike, DisposableLike>;
export default DelegatingObserverMixin;
